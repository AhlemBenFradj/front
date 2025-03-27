import React, { useState, useEffect, useCallback } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { Card, Col, Nav, Row, Tab, Form, Button, ProgressBar, Toast } from 'react-bootstrap';

// Constants
const API_URL = 'http://164.68.114.70:5000/twitter';
const AI_API_URL = 'http://207.180.254.58:11434/api/generate';
const AI_API_KEY = 'sk-cf9254cc31d0480cb1c06a564dba8897';
const AI_MODEL = 'deepseek-r1:32b';

// Profile prefix types
const PROFILE_TYPES = {
	FACEBOOK: 'PF',
	TWITTER: 'PT',
	INSTAGRAM: 'PI'
};

const x = () => {
	// Form inputs
	const [tweetUrl, setTweetUrl] = useState('');
	const [humanTweet, setHumanTweet] = useState('');
	const [manualTweetContent, setManualTweetContent] = useState(''); // New state for manual tweet content

	// Agents state
	const [commentAgentCount, setCommentAgentCount] = useState(1);
	const [tweetAgentCount, setTweetAgentCount] = useState(1);
	const [agentComments, setAgentComments] = useState(['']);
	const [agentTweets, setAgentTweets] = useState(['']);
	const [likeCount, setLikeCount] = useState(1);
	const [FollowCount, setFollowCount] = useState(1);
	const [commentTone, setCommentTone] = useState('positive');
	const [tweetContent, setTweetContent] = useState('');

	// Profile state
	const [profiles, setProfiles] = useState([]);
	const [selectedProfileIds, setSelectedProfileIds] = useState([]);
	const [commentSelectedProfileIds, setCommentSelectedProfileIds] = useState([]);
	const [tweetSelectedProfileIds, setTweetSelectedProfileIds] = useState([]);

	// UI state
	const [isLoading, setIsLoading] = useState(false);
	const [progressState, setProgressState] = useState({
		like: { show: false, value: 0 },
		comment: { show: false, value: 0 },
		tweet: { show: false, value: 0 },
		repost: { show: false, value: 0 },
		follow: { show: false, value: 0 }
	});

	// Toast state
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
	const [toastVariant, setToastVariant] = useState('success');

	// Set progress for a specific action
	const setProgress = useCallback((action, value, show = true) => {
		setProgressState(prev => ({
			...prev,
			[action]: { show, value }
		}));
	}, []);

	// Hide progress after a delay
	const hideProgress = useCallback((action, delay = 2000) => {
		setTimeout(() => {
			setProgressState(prev => ({
				...prev,
				[action]: { ...prev[action], show: false }
			}));
		}, delay);
	}, []);

	// Validate URL format
	const isValidUrl = (url) => {
		const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
			'((([a-z0-9\\-]+\\.)+[a-z]{2,})|' + // domain name
			'localhost|' + // localhost
			'\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IP address
			'\\[?[a-f0-9]*:[a-f0-9:%.\\-]+\\]?)' + // IPv6
			'(\\:\\d+)?(\\/[-a-z0-9+&@#/%=~_|\\?\\.:]*)*$', 'i'); // path
		return !!pattern.test(url);
	};

	// Fetch profiles from API
	const fetchProfiles = useCallback(async () => {
		try {
			const response = await fetch(`${API_URL}/fetch_combined_profiles`);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const rawData = await response.text();
			const data = JSON.parse(rawData);
			console.log(data)
			if (!data) {
				console.error("Expected 'data' key not found in response:", data);
				return;
			}

			const fetchedProfiles = Array.isArray(data) ? data : [];
			const filteredProfiles = fetchedProfiles.filter(profile =>
				profile.name.startsWith(PROFILE_TYPES.TWITTER) &&
				profile.connected_Twitter === true
			);
			setProfiles(filteredProfiles);
			setProfiles(fetchedProfiles);
		} catch (error) {
			setProfiles([]);
			setToastMessage(`Profile services not working: ${error.message}`);
			setToastVariant('danger');
			setShowToast(true);
		}
	}, []);

	// Initial setup
	useEffect(() => {
		fetchProfiles();
	}, [fetchProfiles]);

	// Set default profiles when count changes
	const setupDefaultProfiles = useCallback((count, prefix, setSelectedIds) => {
		const newSelectedProfiles = [];
		for (let i = 0; i < count; i++) {
			const profileName = `${prefix} ${i + 1}`;
			const selectedProfile = profiles.find(profile => profile.name === profileName);
			if (selectedProfile) {
				newSelectedProfiles[i] = selectedProfile.id;
			}
		}
		setSelectedIds(newSelectedProfiles);
	}, [profiles]);

	// Handle agent count changes
	const handleAgentCountChange = useCallback((e, type) => {
		const count = Math.max(1, parseInt(e.target.value, 10) || 1);

		if (type === 'comment') {
			setCommentAgentCount(count);
			setAgentComments(Array(count).fill(''));
			setupDefaultProfiles(count, PROFILE_TYPES.TWITTER, setCommentSelectedProfileIds);
		} else if (type === 'tweet') {
			setTweetAgentCount(count);
			setAgentTweets(Array(count).fill(''));
			setupDefaultProfiles(count, PROFILE_TYPES.TWITTER, setTweetSelectedProfileIds);
		}
	}, [setupDefaultProfiles]);

	// Handle profile selection
	const handleProfileSelect = useCallback((index, profileName, type) => {
		const selectedProfile = profiles.find(profile => profile.name === profileName);
		if (!selectedProfile) return;

		if (type === 'comment') {
			setCommentSelectedProfileIds(prev => {
				const newProfiles = [...prev];
				newProfiles[index] = selectedProfile.id;
				return newProfiles;
			});
		} else if (type === 'tweet') {
			setTweetSelectedProfileIds(prev => {
				const newProfiles = [...prev];
				newProfiles[index] = selectedProfile.id;
				return newProfiles;
			});
		} else {
			setSelectedProfileIds(prev => {
				const newProfiles = [...prev];
				newProfiles[index] = selectedProfile.id;
				return newProfiles;
			});
		}
	}, [profiles]);

	// Handle agent content changes
	const handleAgentContentChange = useCallback((index, value, type) => {
		if (type === 'comment') {
			setAgentComments(prev => {
				const newContent = [...prev];
				newContent[index] = value;
				return newContent;
			});
		} else if (type === 'tweet') {
			setAgentTweets(prev => {
				const newContent = [...prev];
				newContent[index] = value;
				return newContent;
			});
		}
	}, []);

	// Render functions for form sections
	const renderUrlField = () => (
		<Form.Group className="mb-4">
			<Row>
				<Form.Label column sm={12} md={3}>Tweet URL</Form.Label>
				<Col sm={12} md={9}>
					<Form.Control
						type="text"
						value={tweetUrl}
						onChange={(e) => {
							const url = e.target.value;
							if (isValidUrl(url) || url === '') {
								setTweetUrl(url);
							} else {
								setToastMessage('Invalid URL format');
								setToastVariant('danger');
								setShowToast(true);
							}
						}}
					/>
				</Col>
			</Row>
		</Form.Group>
	);
	const generateAITweet = useCallback(async () => {
		console.log('Debug: Starting AI tweet generation...');
		setIsLoading(true);
		setProgress('tweet', 10);
		document.body.style.cursor = 'wait';

		try {
			setProgress('tweet', 30);
			const response = await fetch(AI_API_URL, {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${AI_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					model: `${AI_MODEL}`,
					prompt: `Generate exactly ${tweetAgentCount} unique tweets based on the following human tweet: "${humanTweet}".
						- Use the same language as the tweet
						- No URLs, hashtags, or markdown
						- Natural, conversational responses
						- Each comment must be distinct
						- Never start with phrases like "Here are your comments:" or "Voici trois commentaires:"
						- ${commentTone} tone throughout
						- STRICTLY PROHIBITED: 
						  * Introductory phrases
						  * Section headers
						  * Explanatory text
						  * Numbering/formatting
						- Format: ONLY the raw comments separated by newlines
						- Response must begin with the first comment
						- No titles, headers, or section separators
						Return nothing except the comments themselves - no acknowledgments, 
						no apologies, and no explanations. Begin immediately with comment #1.`,
					"stream": false
				}),
			});

			setProgress('tweet', 60);
			console.log('Debug: API request sent. Awaiting response...', response);

			if (!response.ok) {
				console.error(`Debug: API response error - Status ${response.status}`);
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const completion = await response.json();
			console.log('Debug: Received API response:', completion);

			setProgress('tweet', 80);

			// Process response, remove <think> sections if present
			let isThinking = false;
			const contentArray = completion.response
				.split('\n')
				.map(line => line.trim())
				.filter(line => {
					if (line === '<think>') {
						isThinking = true;
						console.warn('Debug: Detected <think> section, skipping...');
						return false;
					}
					if (line === '</think>') {
						isThinking = false;
						console.warn('Debug: Exiting <think> section...');
						return false;
					}
					return !isThinking && line !== '';
				})
				.slice(0, tweetAgentCount);

			console.log('Debug: Processed tweet:', contentArray);

			// Clean output if it returns 1. or symbol in a line  
			const cleanedContentArray = contentArray.map(tweet => {
				if (/^\d+$/.test(tweet)) {
					return '';
				}
				if (tweet.startsWith('.')) {
					return tweet.slice(1).trim();
				}
				if (/\d+\.\s/.test(tweet)) {
					return tweet.replace(/\d+\.\s/, '').trim();
				}
				return tweet;
			}).filter(tweet => tweet !== '');
			console.log('Debug: Cleaned tweet:', cleanedContentArray);

			setAgentTweets(cleanedContentArray); // Set the generated tweets here
			setProgress('tweet', 100);
			setToastMessage('Tweets generated successfully!');
			setToastVariant('success');
			setShowToast(true);
		} catch (error) {
			console.error('API Error:', error);
			setToastMessage(`Error generating tweets: ${error.message}`);
			setToastVariant('danger');
			setShowToast(true);
		} finally {
			console.log('Debug: Cleaning up and resetting UI state...');
			setIsLoading(false);
			document.body.style.cursor = 'default';
			hideProgress('tweet');
		}
	}, [tweetAgentCount, humanTweet, AI_API_URL, AI_MODEL, setProgress, hideProgress]);

	const generateAIComments = useCallback(async () => {
		if (!tweetUrl.trim()) {
			setToastMessage('Tweet URL cannot be empty');
			setToastVariant('danger');
			setShowToast(true);
			console.warn('Debug: Tweet URL is empty');
			return;
		}

		if (!isValidUrl(tweetUrl)) {
			setToastMessage('Invalid Tweet URL format');
			setToastVariant('danger');
			setShowToast(true);
			console.warn('Debug: Invalid Tweet URL format');
			return;
		}

		console.log('Debug: Starting AI comment generation...');
		setIsLoading(true);
		setProgress('comment', 10);
		document.body.style.cursor = 'wait';

		try {
			console.log('Debug: Sending request to extract content from URL:', tweetUrl);
			setProgress('comment', 30);

			// Step 1: Extract content from the tweet URL
			const extractResponse = await fetch(`${API_URL}/Extract_tweet`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ url: tweetUrl })
			});

			if (!extractResponse.ok) {
				throw new Error(`Failed to extract content: ${extractResponse.status}`);
			}
			console.log('extractResponse', extractResponse)
			// Step 2: Fetch the content from the database
			const contentResponse = await fetch(`${API_URL}/content`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ url: tweetUrl })
			});
			console.log("contentResponse", contentResponse)

			if (!contentResponse.ok) {
				throw new Error(`Failed to fetch content: ${contentResponse.status}`);
			}

			const contentData = await contentResponse.json();
			const content = contentData.content;
			console.log('Debug: Extracted content:', content);
			setProgress('comment', 50);

			const response = await fetch(AI_API_URL, {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${AI_API_KEY}`,
					'Content-Type': 'application/json',

				},
				body: JSON.stringify({
					model: `${AI_MODEL}`,
					prompt: `Generate exactly ${commentAgentCount} unique ${commentTone} comments for this tweet: "${content}".
						- Use the same language as the tweet
						- No URLs, hashtags, or markdown
						- Natural, conversational responses
						- Each comment must be distinct
						- Never start with phrases like "Here are your comments:" or "Voici trois commentaires:"
						- ${commentTone} tone throughout
						- STRICTLY PROHIBITED: 
						  * Introductory phrases
						  * Section headers
						  * Explanatory text
						  * Numbering/formatting
						- Format: ONLY the raw comments separated by newlines
						- Response must begin with the first comment
						- No titles, headers, or section separators
						Return nothing except the comments themselves - no acknowledgments, 
						no apologies, and no explanations. Begin immediately with comment #1.`,
					"stream": false
				}),
			});

			setProgress('comment', 60);
			console.log('Debug: API request sent. Awaiting response...', response);

			if (!response.ok) {
				console.error(`Debug: API response error - Status ${response.status}`);
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const completion = await response.json();
			console.log('Debug: Received API response:', completion);

			setProgress('comment', 80);

			// Process response, remove <think> sections if present
			let isThinking = false;
			const contentArray = completion.response
				.split('\n')
				.map(line => line.trim())
				.filter(line => {
					if (line === '<think>') {
						isThinking = true;
						console.warn('Debug: Detected <think> section, skipping...');
						return false;
					}
					if (line === '</think>') {
						isThinking = false;
						console.warn('Debug: Exiting <think> section...');
						return false;
					}
					return !isThinking && line !== '';
				})
				.slice(0, commentAgentCount);

			console.log('Debug: Processed comments:', contentArray);

			//Clean output if it return 1. or symbole in a ligne  
			const cleanedContentArray = contentArray.map(comment => {
				if (/^\d+$/.test(comment)) {
					return '';
				}
				if (comment.startsWith('.')) {
					return comment.slice(1).trim();
				}
				if (/\d+\.\s/.test(comment)) {
					return comment.replace(/\d+\.\s/, '').trim();
				}
				return comment;

			}).filter(comment => comment !== '');
			console.log('Debug: Cleaned comments:', cleanedContentArray);

			setAgentComments(cleanedContentArray);
			setProgress('comment', 100);

			setToastMessage('Comments generated successfully!');
			setToastVariant('success');
			setShowToast(true);
		} catch (error) {
			console.error('API Error:', error);
			setToastMessage(`Error generating comments: ${error.message}`);
			setToastVariant('danger');
			setShowToast(true);
		} finally {
			console.log('Debug: Cleaning up and resetting UI state...');
			setIsLoading(false);
			document.body.style.cursor = 'default';
			hideProgress('comment');
		}
	}, [tweetUrl, commentTone, commentAgentCount, AI_API_URL, AI_MODEL, setProgress, hideProgress]);

	// Handle API actions with progress tracking
	const handleApiAction = useCallback(async (action, endpoint, data) => {
		try {
			setProgress(action, 0);

			const response = await fetch(`${API_URL}/${endpoint}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			setProgress(action, 100);
			setToastMessage(`${action.charAt(0).toUpperCase() + action.slice(1)} successful!`);
			setToastVariant('success');
			setShowToast(true);
			return await response.json();
		} catch (error) {
			console.error(`Error in ${action}:`, error);
			setToastMessage(`Error: ${error.message}`);
			setToastVariant('danger');
			setShowToast(true);
			throw error;
		} finally {
			hideProgress(action);
		}
	}, [setProgress, hideProgress]);

	// Batch process actions with multiple profiles
	const batchProcess = useCallback(async (action, endpoint, baseData, profileIds) => {
		try {
			setProgress(action, 0);
			const totalProfiles = profileIds.length;
			for (let i = 0; i < totalProfiles; i++) {
				const profileId = profileIds[i];
				const data = { ...baseData, profileId };

				try {
					const response = await fetch(`${API_URL}/${endpoint}`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(data)
					});

					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);

					} else {
						setToastMessage(`${action.charAt(0).toUpperCase() + action.slice(1)} completed for all profiles!`);
						setToastVariant('success');
						setShowToast(true);

					}

				} catch (fetchError) {
					console.error(`Fetch error for profile ID ${profileId} in ${action}:`, fetchError);
					setToastMessage(`Error processing profile ID ${profileId}: ${fetchError.message}`);
					setToastVariant('danger');
					setShowToast(true);
					continue; // Skip to the next iteration if an error occurs
				}
				// Update progress
				const currentProgress = Math.round(((i + 1) / totalProfiles) * 100);
				setProgress(action, currentProgress);
			}
		} catch (error) {
			console.error(`Error in ${action}:`, error);
			setToastMessage(`Error: ${error.message}`);
			setToastVariant('danger');
			setShowToast(true);
		} finally {
			hideProgress(action);
		}
	}, [setProgress, hideProgress]);

	// Action handlers
	const handleLike = useCallback(() => {
		const profileIds = profiles
			.filter(profile => profile.name.startsWith(PROFILE_TYPES.TWITTER) &&
				profile.connected_Twitter === true) //	FACEBOOK: 'PF', TWITTER: 'PT', INSTAGRAM: 'PI'
			.slice(0, likeCount)
			.map(profile => profile.id);

		batchProcess('like', 'save_tweetLike', { url: tweetUrl }, profileIds);
	}, [profiles, likeCount, tweetUrl, batchProcess]);

	const handleRepost = useCallback(() => {
		const profileIds = profiles
			.filter(profile => profile.name.startsWith(PROFILE_TYPES.TWITTER) &&
				profile.connected_Twitter === true)
			.slice(0, likeCount)
			.map(profile => profile.id);

		batchProcess('repost', 'Repost_tweet', { url: tweetUrl }, profileIds);
	}, [profiles, likeCount, tweetUrl, batchProcess]);

	const handleComment = useCallback(async (comment, profileId) => {

		handleApiAction('comment', 'save_url_and_comment', {
			tweetUrl,
			comment,
			profileId
		});

	}, [tweetUrl, handleApiAction]);

	const handleTweet = useCallback((tweet, profileId) => {
		handleApiAction('tweet', 'save_tweet_url', {
			tweet,
			profileId
		});
	}, [handleApiAction]);

	const handleFollow = useCallback(() => {
		const profileIds = profiles
			.filter(profile => profile.name.startsWith(PROFILE_TYPES.TWITTER) &&
				profile.connected_Twitter === true)
			.slice(0, likeCount)
			.map(profile => profile.id);

		batchProcess('follow', 'followAccount', { url: tweetUrl }, profileIds);
	}, [profiles, likeCount, tweetUrl, batchProcess]);

	// Render functions for form sections
	const renderProgressBar = (type, variant) => (
		progressState[type].show && (
			<Form.Group className="mb-4">
				<Row>
					<Form.Label column sm={12} md={3}>Progress</Form.Label>
					<Col sm={12} md={9}>
						<ProgressBar
							now={progressState[type].value}
							label={`${progressState[type].value}%`}
							variant={variant}
							animated={progressState[type].value < 100}
						/>
					</Col>
				</Row>
			</Form.Group>
		)
	);

	// Render tabs content
	const renderLikeTab = () => (
		<Card>
			<Card.Header>
				<Card.Title as='h3'>Like a Tweet</Card.Title>
			</Card.Header>
			<Card.Body>
				<Form>
					<Form.Group className="mb-4">
						<Row>
							<Form.Label column sm={12} md={3}>Tweet URL</Form.Label>
							<Col sm={4} md={9}>
								<Form.Control
									type="text"
									value={tweetUrl}
									onChange={(e) => {
										const url = e.target.value;
										if (isValidUrl(url) || url === '') {
											setTweetUrl(url);
										} else {
											setToastMessage('Invalid URL format');
											setToastVariant('danger');
											setShowToast(true);
										}
									}}
								/>
							</Col>
						</Row>
					</Form.Group>
					<Form.Group className="mb-4">
						<Row>
							<Form.Label column sm={12} md={3}>Number of Likes</Form.Label>
							<Col sm={6} md={2}>
								<Form.Control
									type="number"
									min={1}
									max={profiles.filter(profile => profile.name.startsWith(PROFILE_TYPES.TWITTER) &&
										profile.connected_Twitter === true).length}
									value={likeCount}
									onChange={(e) => setLikeCount(parseInt(e.target.value, 10) || 1)}
								/>
							</Col>
							<Col sm={6} md={3}>
								<Button
									variant='primary'
									onClick={handleLike}
									disabled={isLoading || progressState.like.show || !tweetUrl.trim()} // Disable button if tweetUrl is empty
									className="w-100"
								>
									{progressState.like.show ? 'Processing...' : (
										<>
											<i className="fa-solid fa-robot"></i> Like
										</>
									)}
								</Button>
							</Col>
						</Row>
					</Form.Group>

					{renderProgressBar('like', 'success')}
				</Form>
			</Card.Body>
		</Card>
	);

	const renderCommentTab = () => (
		<Card>
			<Card.Header>
				<Card.Title as='h3'>Comments</Card.Title>
			</Card.Header>
			<Card.Body>
				<Form>
					<Form.Group className="mb-4">
						<Row>
							<Form.Label column sm={4} md={3}>Tweet URL</Form.Label>
							<Col sm={3} md={3}>
								<Form.Control
									type="text"
									value={tweetUrl}
									onChange={(e) => {
										const url = e.target.value;
										if (isValidUrl(url) || url === '') {
											setTweetUrl(url);
										} else {
											setToastMessage('Invalid URL format');
											setToastVariant('danger');
											setShowToast(true);
										}
									}}
									placeholder="Enter tweet URL"
								/>
							</Col>
							<Col sm={1} md={1} className="mb-2">
								<Form.Control
									type="number"
									value={commentAgentCount}
									onChange={(e) => handleAgentCountChange(e, 'comment')}
									min={1}
									max={profiles.filter(profile => profile.name.startsWith(PROFILE_TYPES.TWITTER) &&
										profile.connected_Twitter === true).length}
								/>
							</Col>
							<Col sm={2} md={2} className="mb-2 mb-md-0">
								<Form.Control
									as="select"
									value={commentTone}
									onChange={(e) => setCommentTone(e.target.value)}
								>
									<option value="positive">Positive</option>
									<option value="negative">Negative</option>
									<option value="neutral">Neutral</option>
								</Form.Control>
							</Col>

							<Col sm={7} md={3}>
								<Button
									variant='primary'
									onClick={generateAIComments}
									disabled={isLoading || progressState.comment.show || !tweetUrl.trim()}
									className="w-100"
								>
									{progressState.comment.show ? 'Analyzing...' : (
										<>
											<i className="fa-solid fa-robot"></i>  Generate Comments
										</>
									)}
								</Button>
							</Col>
						</Row>
					</Form.Group>

					{renderProgressBar('comment', 'info')}

					{agentComments.map((comment, index) => (
						<Form.Group key={index} className="mb-3">
							<Row className="align-items-start">
								<Form.Label column sm={12} md={3} className="pt-md-2">
									Comment Agent #{index + 1}
								</Form.Label>
								<Col sm={12} md={4} className="mb-2 mb-md-0">
									<Form.Control
										as="textarea"
										rows={3}
										value={comment}
										onChange={(e) => {
											const value = e.target.value;
											handleAgentContentChange(index, value, 'comment');
											if (/[أ-ي]/.test(value)) {
												e.target.style.direction = 'rtl';
											} else {
												e.target.style.direction = 'ltr';
											}
										}}
									/>
								</Col>
								<Col sm={5} md={2} className="mb-2 mb-md-0">
									<Form.Control
										as="select"
										value={commentSelectedProfileIds[index]
											? profiles.find(p => p.id === commentSelectedProfileIds[index])?.name || ""
											: ""}
										onChange={(e) => handleProfileSelect(index, e.target.value, 'comment')}
									>
										<option value="" disabled>Select Profile</option>
										{profiles
											.filter(profile => profile.name.startsWith(PROFILE_TYPES.TWITTER) &&
												profile.connected_Twitter === true)
											.map((profile) => (
												<option
													key={profile.id}
													value={profile.name}
													disabled={commentSelectedProfileIds.includes(profile.id) && commentSelectedProfileIds[index] !== profile.id}
												>
													{profile.name}
												</option>
											))}
									</Form.Control>
								</Col>
								<Col sm={7} md={3}>
									<Button
										variant='primary'
										onClick={() => handleComment(comment, commentSelectedProfileIds[index])}
										disabled={progressState.comment.show || !comment.trim() || !commentSelectedProfileIds[index]}
										className="w-100"
									>
										Post Comment
									</Button>
								</Col>
							</Row>
						</Form.Group>
					))}
				</Form>
			</Card.Body>
		</Card>
	);

	const renderTweetTab = () => (
		<Card>
			<Card.Header>
				<Card.Title as='h3'>Add a Tweet</Card.Title>
			</Card.Header>
			<Card.Body>
				<Form>
					<Form.Group className="mb-4">
						<Row className="align-items-start">
							<Form.Label column sm={12} md={3} className="pt-md-2">Human Tweet</Form.Label>
							<Col sm={12} md={4} className="mb-2 mb-md-0">
								<textarea
									className="form-control"
									rows={5}
									value={humanTweet}
									onChange={(e) => {
										const value = e.target.value;
										setHumanTweet(value);
										if (/[أ-ي]/.test(value)) {
											e.target.style.direction = 'rtl';
										} else {
											e.target.style.direction = 'ltr';
										}
										e.target.style.height = 'auto';
										e.target.style.height = `${e.target.scrollHeight}px`;
									}}
								></textarea>
							</Col>
							<Col sm={4} md={2} className="mb-2 mb-md-0">
								<Form.Control
									type="number"
									value={tweetAgentCount}
									onChange={(e) => handleAgentCountChange(e, 'tweet')}
									min={1}
									max={profiles.filter(profile => profile.name.startsWith(PROFILE_TYPES.TWITTER) &&
										profile.connected_Twitter === true).length}
								/>
							</Col>
							<Col sm={8} md={3}>
								<Button
									variant='primary'
									onClick={generateAITweet}
									disabled={!humanTweet.trim() || isLoading || progressState.tweet.show}
									className="w-100"
								>
									{progressState.tweet.show && progressState.tweet.value < 100 ? 'Generating...' : (
										<>
											<i className="fa-solid fa-robot"></i> Generate Tweets
										</>
									)}
								</Button>
							</Col>
						</Row>
					</Form.Group>

					{renderProgressBar('tweet', 'warning')}

					{agentTweets.map((tweet, index) => (
						<Form.Group key={index} className="mb-3">
							<Row className="align-items-start">
								<Form.Label column sm={12} md={3} className="pt-md-2">
									Tweet Agent #{index + 1}
								</Form.Label>
								<Col sm={12} md={4} className="mb-2 mb-md-0">
									<Form.Control
										as="textarea"
										rows={5}
										value={tweet}
										onChange={(e) => {
											const value = e.target.value;
											handleAgentContentChange(index, value, 'tweet');
											if (/[أ-ي]/.test(value)) {
												e.target.style.direction = 'rtl';
											} else {
												e.target.style.direction = 'ltr';
											}
											e.target.style.height = 'auto';
											e.target.style.height = `${e.target.scrollHeight}px`;
										}}
									/>
								</Col>
								<Col sm={5} md={2} className="mb-2 mb-md-0">
									<Form.Control
										as="select"
										value={tweetSelectedProfileIds[index]
											? profiles.find(p => p.id === tweetSelectedProfileIds[index])?.name || ""
											: ""}
										onChange={(e) => handleProfileSelect(index, e.target.value, 'tweet')}
									>
										<option value="" disabled>Select Profile</option>
										{profiles
											.filter(profile => profile.name.startsWith(PROFILE_TYPES.TWITTER) &&
												profile.connected_Twitter === true)
											.map((profile) => (
												<option
													key={profile.id}
													value={profile.name}
													disabled={tweetSelectedProfileIds.includes(profile.id) && tweetSelectedProfileIds[index] !== profile.id}
												>
													{profile.name}
												</option>
											))}
									</Form.Control>
								</Col>
								<Col sm={7} md={3}>
									<Button
										variant='primary'
										onClick={() => handleTweet(tweet, tweetSelectedProfileIds[index])}
										disabled={progressState.tweet.show || !tweet.trim() || !tweetSelectedProfileIds[index]}
										className="w-100"
									>
										Post Tweet
									</Button>
								</Col>
							</Row>
						</Form.Group>
					))}
				</Form>
			</Card.Body>
		</Card>
	);

	const renderRepostTab = () => (
		<Card>
			<Card.Header>
				<Card.Title as='h3'>Repost a Tweet</Card.Title>
			</Card.Header>
			<Card.Body>
				<Form>
					<Form.Group className="mb-4">
						<Row>
							<Form.Label column sm={12} md={3}>Tweet URL</Form.Label>
							<Col sm={4} md={9}>
								<Form.Control
									type="text"
									value={tweetUrl}
									onChange={(e) => {
										const url = e.target.value;
										if (isValidUrl(url) || url === '') {
											setTweetUrl(url);
										} else {
											setToastMessage('Invalid URL format');
											setToastVariant('danger');
											setShowToast(true);
										}
									}}
								/>
							</Col>
						</Row>
					</Form.Group>
					<Form.Group className="mb-4">
						<Row>
							<Form.Label column sm={12} md={3}>Repost Number</Form.Label>
							<Col sm={6} md={2}>
								<Form.Control
									type="number"
									min={1}
									max={profiles.filter(profile => profile.name.startsWith(PROFILE_TYPES.TWITTER) &&
										profile.connected_Twitter === true).length}
									value={likeCount}
									onChange={(e) => setLikeCount(parseInt(e.target.value, 10) || 1)}
								/>
							</Col>
							<Col sm={6} md={3}>
								<Button
									variant='primary'
									onClick={handleRepost}
									disabled={isLoading || progressState.repost.show || !tweetUrl.trim()} // Disable button if tweetUrl is empty
									className="w-100"
								>
									{progressState.repost.show ? 'Processing...' : (
										<>
											<i className="fa-solid fa-robot"></i> Repost
										</>
									)}
								</Button>
							</Col>
						</Row>
					</Form.Group>

					{renderProgressBar('repost', 'danger')}
				</Form>
			</Card.Body>
		</Card>
	);

	const renderFollowTab = () => (
		<Card>
			<Card.Header>
				<Card.Title as='h3'>Follow Tweet Account</Card.Title>
			</Card.Header>
			<Card.Body>
				<Form>
					{renderUrlField()}
					<Form.Group className="mb-4">
						<Row>
							<Form.Label column sm={12} md={3}>Number of Followers</Form.Label>
							<Col sm={6} md={2}>
								<Form.Control
									type="number"
									min={1}
									max={profiles.filter(profile => profile.name.startsWith(PROFILE_TYPES.TWITTER) &&
										profile.connected_Twitter === true).length} //	FACEBOOK: 'PF', TWITTER: 'PT', INSTAGRAM: 'PI'
									value={likeCount}
									onChange={(e) => setLikeCount(parseInt(e.target.value, 10) || 1)}
								/>
							</Col>
							<Col sm={6} md={3}>
								<Button
									variant='primary'
									onClick={handleFollow}
									disabled={isLoading || progressState.like.show || !tweetUrl.trim()} // Disable button if tweetUrl is empty
									className="w-100"
								>
									{progressState.like.show ? 'Processing...' : (
										<>
											<i className="fa-solid fa-robot"></i> Follow
										</>
									)}
								</Button>
							</Col>
						</Row>
					</Form.Group>

					{renderProgressBar('follow', 'success')}
				</Form>
			</Card.Body>
		</Card>
	);

	// Main component rendering
	return (
		<div>
			<Pageheader titles="Twitter" active="Automation" />

			<Row className="row-sm">
				<Col xl={12}>
					<Card className="mg-b-20" id="tabs-style3">
						<Card.Body>
							<div className="text-wrap">
								<div className="example">
									<div className="panel panel-primary tabs-style-3">
										<Tab.Container id="twitter-automation-tabs" defaultActiveKey="like">
											<div className="tabs-menu">
												<Nav variant="" className="nav panel-tabs flex-wrap">
													<Nav.Item className="flex-grow-1 text-center">
														<Nav.Link eventKey="like"><i className="fa fa-heart me-1"></i>Like</Nav.Link>
													</Nav.Item>
													<Nav.Item className="flex-grow-1 text-center">
														<Nav.Link eventKey="comment"><i className="fa fa-comment me-1"></i>Comment</Nav.Link>
													</Nav.Item>
													<Nav.Item className="flex-grow-1 text-center">
														<Nav.Link eventKey="tweet"><i className="fa fa-pencil me-1"></i>Tweet</Nav.Link>
													</Nav.Item>
													<Nav.Item className="flex-grow-1 text-center">
														<Nav.Link eventKey="repost"><i className="fa fa-retweet me-1"></i>Repost</Nav.Link>
													</Nav.Item>
													<Nav.Item className="flex-grow-1 text-center">
														<Nav.Link eventKey="follow"><i className="fa fa-retweet me-1"></i>Follow</Nav.Link>
													</Nav.Item>
												</Nav>
											</div>

											<Tab.Content className='panel-body tabs-menu-body border-top-0'>
												<Tab.Pane eventKey="like">
													{renderLikeTab()}
												</Tab.Pane>

												<Tab.Pane eventKey="comment">
													{renderCommentTab()}
												</Tab.Pane>

												<Tab.Pane eventKey="tweet">
													{renderTweetTab()}
												</Tab.Pane>

												<Tab.Pane eventKey="repost">
													{renderRepostTab()}
												</Tab.Pane>
												<Tab.Pane eventKey="follow">
													{renderFollowTab()}
												</Tab.Pane>

											</Tab.Content>
										</Tab.Container>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<div className="ht-150 pos-relative">
				<div className="demo-static-toast position-fixed bottom-0 end-0 p-3">
					<Toast
						onClose={() => setShowToast(false)}
						show={showToast}
						delay={3000}
						autohide
						className={`bg-${toastVariant}`}
					>
						<Toast.Header>
							<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
							<small className="text-muted">Just now</small>
						</Toast.Header>
						<Toast.Body style={{ color: 'white' }}>{toastMessage}</Toast.Body>
					</Toast>
				</div>
			</div>
		</div>
	);
};


export default x;
