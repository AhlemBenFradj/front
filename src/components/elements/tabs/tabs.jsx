import React, { useState, useEffect } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { Card, Col, Nav, Row, Tab, Form, Collapse, Button } from 'react-bootstrap';

const Tabs = () => {

	//Show Code variables

	const [i, seti] = useState(false)
	const [i2, seti2] = useState(false)
	const [i3, seti3] = useState(false)
	const [i4, seti4] = useState(false)
	const [i5, seti5] = useState(false)
	const [agentCount, setAgentCount] = useState(1);
	const [agentComments, setAgentComments] = useState([""]);
	const [tweetUrl, setTweetUrl] = useState("");
	const [humantweet, setHumanTweet] = useState("");
	const [humanComment, setHumanComment] = useState("");

	const [isLoading, setIsLoading] = useState(false);
	const [profiles, setProfiles] = useState([]);
	const [likeCount, setLikeCount] = useState(1);

	// Fetch profiles and sort them
	const fetchProfiles = async () => {
		try {
			const response = await fetch('https://3387-197-27-123-45.ngrok-free.app/profiles');
			if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

			const data = await response.json();
			console.log('Full API response:', data);

			let profiles = Array.isArray(data.data) ? data.data : [];

			// Sort profiles alphabetically
			profiles.sort((a, b) => a.name.localeCompare(b.name));

			console.log("Sorted profiles:", profiles.map(profile => profile.name));
			setProfiles(profiles);
		} catch (error) {
			console.error('Error fetching profiles:', error);
			setProfiles([]);
		}
	};
	useEffect(() => {
		fetchProfiles();
	}, []);


	const handleAgentCountChange = (e) => {
		const count = Math.max(1, parseInt(e.target.value, 10) || 1);
		setAgentCount(count);
		setAgentComments(Array(count).fill(""));
	};

	const handleAgentCommentChange = (index, value) => {
		const newComments = [...agentComments];
		newComments[index] = value;
		setAgentComments(newComments);
	};

	const save_tweetLike = async (url, profileId) => {
		try {
			const response = await fetch('http://164.68.114.70:50000/save_tweetLike', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ url, profileId })
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const result = await response.json();
		} catch (error) {
			console.error('Error saving tweet', error);
		}
	};

	const Repost_tweet = async (url, profileId) => {
		try {
			const response = await fetch('http://164.68.114.70:50000/Repost_tweet', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ url, profileId })
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const result = await response.json();
		} catch (error) {
			console.error('Error saving tweet', error);
		}
	};

	const generateAgentComments = async () => {
		if (humanComment.trim() === "") {
			alert('Human comment cannot be empty');
			return;
		}

		setIsLoading(true);
		document.body.style.cursor = 'wait';

		try {
			const response = await fetch('http://207.180.254.58:8333/api/chat/completions', {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${process.env.REACT_APP_DEEPSEEK_API_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhmMzgyNWFhLTM4NDQtNDU1OC1hMDE5LTZhMTExMTIwMTg4YyJ9.4SPbNgNPK0DCZzYGIVHfN-NuIWwe_12ou_kOKUchico'}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					model: "deepseek-r1:latest",
					messages: [
						{
							role: "system",
							content: `Generate exactly ${agentCount} different  comment variations based on the user's input. Return unique each variation on a separate line without numbering, symbols, or additional text.`
						},
						{
							role: "user",
							content: humanComment
						}
					]
				})
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const completion = await response.json();
			let generatedText = completion.choices[0].message.content;

			// Updated processing logic with <think> removal
			let isThinking = false;
			const comments = generatedText
				.split('\n')
				.map(line => line.trim())
				.filter(line => {
					if (line === '<think>') {
						isThinking = true;
						return false;
					}
					if (line === '</think>') {
						isThinking = false;
						return false;
					}
					return !isThinking && line !== '';
				})
				.slice(0, agentCount);

			setAgentComments(comments);
			console.log("cleaned comments", comments);

		} catch (error) {
			console.error('API Error:', error);
			alert(`Error generating comments: ${error.message}`);
		} finally {
			setIsLoading(false);
			document.body.style.cursor = 'default';
		}
	};

	const generateAgentTweets = async () => {
		if (humantweet.trim() === "") {
			alert('Human tweet cannot be empty');
			return;
		}

		setIsLoading(true);
		document.body.style.cursor = 'wait';

		try {
			const response = await fetch('http://207.180.254.58:8333/api/chat/completions', {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${process.env.REACT_APP_DEEPSEEK_API_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhmMzgyNWFhLTM4NDQtNDU1OC1hMDE5LTZhMTExMTIwMTg4YyJ9.4SPbNgNPK0DCZzYGIVHfN-NuIWwe_12ou_kOKUchico'}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					model: "deepseek-r1:latest",
					messages: [
						{
							role: "system",
							content: `Generate exactly ${agentCount} unique tweets based on the user's input. Each tweet should be distinct and match the length of the original input. Return them as plain text, each on a new line, without numbers, symbols, or any additional formatting.`
						},
						{
							role: "user",
							content: humantweet
						}
					]
				})
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const completion = await response.json();
			let generatedText = completion.choices[0].message.content;

			// Updated processing logic with <think> removal
			let isThinking = false;
			const tweets = generatedText
				.split('\n')
				.map(line => line.trim())
				.filter(line => {
					if (line === '<think>') {
						isThinking = true;
						return false;
					}
					if (line === '</think>') {
						isThinking = false;
						return false;
					}
					return !isThinking && line !== '';
				})
				.slice(0, agentCount);

			setAgentComments(tweets);
			console.log("cleaned tweets", tweets);

		} catch (error) {
			console.error('API Error:', error);
			alert(`Error generating tweets: ${error.message}`);
		} finally {
			setIsLoading(false);
			document.body.style.cursor = 'default';
		}
	};


	const saveUrlAndComment = async (tweetUrl, comment, profileId) => {
		try {
			const response = await fetch('http://164.68.114.70:50000/save_url_and_comment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ tweetUrl, comment, profileId })
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const result = await response.json();
		} catch (error) {
			console.error('Error saving URL and comment:', error);
		}
	};

	const saveTweetWithoutUrl = async (tweet, profileId) => {
		try {
			const response = await fetch('http://164.68.114.70:50000/save_tweet_url', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ tweet, profileId })
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const result = await response.json();
		} catch (error) {
			console.error('Error saving tweet without URL:', error);
		}
	};

	return (
		<div>
			<Pageheader titles="Twitter" active="Automation" />
			<Row className="row-sm">



				<Col xl={12}>
					<Card className="mg-b-20" id="tabs-style3">

						<Card.Body>
							<div className="main-content-label mg-b-5">

							</div>
							<div className='d-grid d-sm-flex'>

							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="panel panel-primary tabs-style-3">
										<Tab.Container id="left-tabs-example" defaultActiveKey="first">
											<div className="tabs-menu ">
												<Nav variant="" className=" nav panel-tabs">
													<Nav.Item>
														<Nav.Link eventKey="first"><i className="fa fa-laptop"></i>Like</Nav.Link>
													</Nav.Item>
													<Nav.Item>
														<Nav.Link eventKey="second"><i className="fa fa-cube"></i> Comment</Nav.Link>
													</Nav.Item>
													<Nav.Item>
														<Nav.Link eventKey="third"><i className="fa fa-cogs"></i> Tweet </Nav.Link>
													</Nav.Item>
													<Nav.Item>
														<Nav.Link eventKey="fourth"><i className="fa fa-tasks"></i> Repost</Nav.Link>
													</Nav.Item>
												</Nav>
											</div>
											<Tab.Content className='panel-body tabs-menu-body border-top-0'>
												<Tab.Pane eventKey="first">
													<Row className="row-sm">
														<Col xl={12} lg={12} md={12} sm={12}>
															<Card>
																<Card.Header>
																	<Card.Title as='h3'>Like a Tweet</Card.Title>
																</Card.Header>
																<Card.Body>
																	<Form>
																		{/* URL Input */}
																		<Form.Group className="mb-4">
																			<Row>
																				<Form.Label column sm={3}>Tweet URL</Form.Label>
																				<Col sm={9}>
																					<Form.Control
																						type="text"
																						value={tweetUrl}
																						onChange={(e) => setTweetUrl(e.target.value)}
																					/>
																				</Col>
																			</Row>
																		</Form.Group>

																		{/* Like Count */}
																		<Form.Group className="mb-4">
																			<Row>
																				<Form.Label column sm={3}>Number of Likes</Form.Label>
																				<Col sm={2}>
																					<Form.Control
																						type="number"
																						min={1}
																						max={profiles.filter(profile => profile.name.startsWith('PL')).length}
																						value={likeCount}
																						onChange={(e) => setLikeCount(e.target.value)}
																					/>
																				</Col>
																				<Col sm={3}>
																					<Button
																						variant='primary'
																						onClick={() => {
																							const profileIds = profiles.filter(profile => profile.name.startsWith('PL')).slice(0, likeCount).map(profile => profile.id);
																							save_tweetLike(tweetUrl, profileIds);
																						}}
																						disabled={isLoading}
																					>
																						{isLoading ? 'Generating...' : (
																							<>
																								<i className="fa-solid fa-robot"></i> Generate
																							</>
																						)}
																					</Button>
																				</Col>
																			</Row>
																		</Form.Group>

																	</Form>

																</Card.Body>
															</Card>
														</Col>
													</Row>
												</Tab.Pane>
												<Tab.Pane eventKey="second">
													<Row className="row-sm">
														<Col xl={12} lg={12} md={12} sm={12}>
															<Card>
																<Card.Header>
																	<Card.Title as='h3'>Comments</Card.Title>
																</Card.Header>
																<Card.Body>
																	<Form>
																		{/* URL Input */}
																		<Form.Group className="mb-4">
																			<Row>
																				<Form.Label column sm={3}>Tweets URL</Form.Label>
																				<Col sm={9}>
																					<Form.Control
																						type="text"
																						value={tweetUrl}
																						onChange={(e) => setTweetUrl(e.target.value)}
																					/>
																				</Col>
																			</Row>
																		</Form.Group>

																		<Form.Group className="mb-4">
																			<Row>
																				<Form.Label column sm={3}>Commentaire Humain</Form.Label>
																				<Col sm={4}>
																					<Form.Control
																						type="text"
																						value={humanComment}
																						onChange={(e) => setHumanComment(e.target.value)}
																					/>
																				</Col>

																				<Col sm={2}>
																					<Form.Control
																						type="number"
																						value={agentCount}
																						onChange={handleAgentCountChange}
																						min={1}
																						max={profiles.filter(profile => profile.name.startsWith('PC')).length}
																					/>
																				</Col>
																				<Col sm={3}>
																					<Button
																						variant='primary'
																						onClick={generateAgentComments}
																						disabled={!humanComment.trim() || isLoading}
																					>
																						{isLoading ? 'Generating...' : (
																							<>
																								<i className="fa-solid fa-robot"></i> Générer des Commentaires
																							</>
																						)}
																					</Button>
																				</Col>
																			</Row>

																		</Form.Group>

																		{/* Agent Controls */}
																		<Form.Group className="mb-4">

																		</Form.Group>

																		{/* Agent Comments */}
																		{agentComments.map((comment, index) => (
																			<Form.Group key={index} className="mb-3">
																				<Row>
																					<Form.Label column sm={3}>
																						Commentaire Agent N°{index + 1}
																					</Form.Label>
																					<Col sm={4}>
																						<Form.Control
																							type="text"
																							value={comment}
																							onChange={(e) => handleAgentCommentChange(index, e.target.value)}
																						/>
																					</Col>
																					<Col sm={2}>
																						<Form.Control
																							as="select"
																							value={profiles[index] ? profiles[index].name : `PC ${index + 1}`}
																							onChange={(e) => handleSelectProfile(index, e.target.value)}
																						>
																							<option value={`PC ${index + 1}`}>{`PC ${index + 1}`}</option>
																							{profiles.filter(profile => profile.name.startsWith('PC') && profile.name !== `PC ${index + 1}`).map((profile, idx) => (
																								<option key={idx} value={profile.name}>
																									{profile.name}
																								</option>
																							))}
																						</Form.Control>
																					</Col>
																					<Col sm={3}>
																						<Button
																							variant='primary'
																							onClick={() => saveUrlAndComment(tweetUrl, comment, profiles[index].id)}
																						>
																							Ajouter un commentaire
																						</Button>
																					</Col>
																				</Row>
																			</Form.Group>
																		))}


																	</Form>

																</Card.Body>
															</Card>
														</Col>
													</Row>

												</Tab.Pane>
												<Tab.Pane eventKey="third">
													<Row className="row-sm">
														<Col xl={12} lg={12} md={12} sm={12}>
															<Card>
																<Card.Header>
																	<Card.Title as='h3'>Add a Tweet </Card.Title>
																</Card.Header>
																<Card.Body>
																	<Form>


																		{/* Human Tweet */}
																		<Form.Group className="mb-4">
																			<Row>
																				<Form.Label column sm={3}>Tweet Humain</Form.Label>
																				<Col sm={4}>
																					<Form.Control
																						as="textarea"
																						rows={5}
																						value={humantweet}
																						onChange={(e) => {
																							const value = e.target.value;
																							setHumanTweet(value);
																							if (/[أ-ي]/.test(value)) {
																								e.target.style.direction = 'rtl';
																								e.target.style.height = 'auto';
																								e.target.style.height = e.target.scrollHeight + 'px';
																							} else {
																								e.target.style.direction = 'ltr';
																								e.target.style.height = 'auto';
																								e.target.style.height = e.target.scrollHeight + 'px';
																							}
																						}}
																					/>
																				</Col>

																				<Col sm={2}>
																					<Form.Control
																						type="number"
																						value={agentCount}
																						onChange={handleAgentCountChange}
																						min={1}
																						max={profiles.filter(profile => profile.name.startsWith('PT')).length}
																					/>
																				</Col>
																				<Col sm={3}>
																					<Button
																						variant='primary'
																						onClick={generateAgentTweets}
																						disabled={!humantweet.trim() || isLoading}
																					>
																						{isLoading ? 'Generating...' : (
																							<>
																								<i className="fa-solid fa-robot"></i> Générer les tweets
																							</>
																						)}
																					</Button>
																				</Col>
																			</Row>

																		</Form.Group>

																		{/* Agent Comments */}
																		{agentComments.map((tweet, index) => (
																			<Form.Group key={index} className="mb-3">
																				<Row>
																					<Form.Label column sm={3}>
																						Tweet Agent N°{index + 1}
																					</Form.Label>
																					<Col sm={4}>
																						<Form.Control
																							as="textarea"
																							rows={5}
																							value={tweet}
																							onChange={(e) => {
																								const value = e.target.value;
																								handleAgentCommentChange(index, value);
																								if (/[أ-ي]/.test(value)) {
																									e.target.style.direction = 'rtl';
																									e.target.style.height = 'auto';
																									e.target.style.height = e.target.scrollHeight + 'px';
																								} else {
																									e.target.style.direction = 'ltr';
																									e.target.style.height = 'auto';
																									e.target.style.height = e.target.scrollHeight + 'px';
																								}
																							}}
																						/>
																					</Col>
																					<Col sm={2}>
																						<Form.Control
																							as="select"
																							value={profiles[index] ? profiles[index].name : `PT ${index + 1}`}
																							onChange={(e) => handleSelectProfile(index, e.target.value)}
																						>
																							<option value={`PT ${index + 1}`}>{`PT ${index + 1}`}</option>
																							{profiles.filter(profile => profile.name.startsWith('PT') && profile.name !== `PT ${index + 1}`).map((profile, idx) => (
																								<option key={idx} value={profile.name}>
																									{profile.name}
																								</option>
																							))}
																						</Form.Control>
																					</Col>
																					<Col sm={3}>
																						<Button
																							variant='primary'
																							onClick={() => saveTweetWithoutUrl(tweet, profiles[index].id)}
																						>
																							Ajouter un Tweet
																						</Button>
																					</Col>
																				</Row>
																			</Form.Group>
																		))}


																	</Form>

																</Card.Body>
															</Card>
														</Col>
													</Row>

												</Tab.Pane>
												<Tab.Pane eventKey="fourth">
													<Row className="row-sm">
														<Col xl={12} lg={12} md={12} sm={12}>
															<Card>
																<Card.Header>
																	<Card.Title as='h3'>Repost a Tweet</Card.Title>
																</Card.Header>
																<Card.Body>
																	<Form>
																		{/* URL Input */}
																		<Form.Group className="mb-4">
																			<Row>
																				<Form.Label column sm={3}>Tweets URL</Form.Label>
																				<Col sm={9}>
																					<Form.Control
																						type="text"
																						value={tweetUrl}
																						onChange={(e) => setTweetUrl(e.target.value)}
																					/>
																				</Col>
																			</Row>
																		</Form.Group>

																		{/* Human Comment */}
																		<Form.Group className="mb-4">
																			<Row>
																				<Form.Label column sm={3}>Repost Number</Form.Label>


																				<Col sm={2}>
																					<Form.Control
																						type="number"
																						min={1}
																						max={profiles.filter(profile => profile.name.startsWith('PR')).length}
																						value={likeCount}
																						onChange={(e) => setLikeCount(e.target.value)}
																					/>
																				</Col>
																				<Col sm={3}>
																					<Button
																						variant='primary'
																						onClick={() => {
																							const profileIds = profiles.filter(profile => profile.name.startsWith('PR')).slice(0, likeCount).map(profile => profile.id);
																							Repost_tweet(tweetUrl, profileIds);
																						}}
																						disabled={isLoading}
																					>
																						{isLoading ? 'Generating...' : (
																							<>
																								<i className="fa-solid fa-robot"></i> Generate
																							</>
																						)}
																					</Button>
																				</Col>
																			</Row>

																		</Form.Group>



																	</Form>

																</Card.Body>
															</Card>
														</Col>
													</Row>
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
		</div>
	)
};

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
