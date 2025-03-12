import React, { useState } from 'react';
import Pageheader from '../../../../layouts/layoutcomponents/pageheader';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TwitterCommentGenerator = () => {
	const [agentCount, setAgentCount] = useState(1);
	const [agentComments, setAgentComments] = useState([""]);
	const [tweetUrl, setTweetUrl] = useState("");
	const [humanComment, setHumanComment] = useState("");
	const [isLoading, setIsLoading] = useState(false);

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
							content: `Generate exactly ${agentCount} different French comment variations based on the user's input. Return each variation on a separate line without numbering, symbols, or additional text.`
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

	const handleSubmit = async () => {
		if (!tweetUrl) {
			alert('URL cannot be empty');
			return;
		}

		const comments = [
			...(humanComment.trim() !== "" ? [humanComment] : []),
			...agentComments.filter(comment => comment.trim() !== "")
		];

		const data = {
			url: tweetUrl,
			comments: comments
		};

		console.log('Submission data:', data);

		try {
			const response = await fetch('http://197.29.226.103:3000/open-url', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const result = await response.json();
			alert(JSON.stringify(result, null, 2));
		} catch (error) {
			console.error('Error submitting data:', error);
			alert(`Error submitting data: ${error.message}`);
		}
	};

	return (
		<div>
			<Pageheader titles="Twitter" active="Commentaires" />
			<Row className="row-sm">
				<Col xl={12} lg={12} md={12} sm={12}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Commentaires Twitter</Card.Title>
						</Card.Header>
						<Card.Body>
							<Form>
								{/* URL Input */}
								<Form.Group className="mb-4">
									<Row>
										<Form.Label column sm={2}>Tweets URL</Form.Label>
										<Col sm={10}>
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
										<Form.Label column sm={2}>Commentaire Humain</Form.Label>
										<Col sm={4}>
											<Form.Control
												type="text"
												value={humanComment}
												onChange={(e) => setHumanComment(e.target.value)}
											/>
										</Col>

										<Col sm={1}>
											<Form.Control
												type="number"
												value={agentCount}
												onChange={handleAgentCountChange}
												min={1}
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
											<Form.Label column sm={2}>
												Commentaire Agent N°{index + 1}
											</Form.Label>
											<Col sm={5}>
												<Form.Control
													type="text"
													value={comment}
													onChange={(e) => handleAgentCommentChange(index, e.target.value)}
												/>
											</Col>
											<Col sm={2}>
												<Button
													variant='primary'
													onClick={() => handleSelectProfile(index)}
												>
													Sélectionner un profil
												</Button>
											</Col>
											<Col sm={3}>
												<Button
													variant='primary'
													onClick={() => handleAddComment(index)}
												>
													Ajouter un commentaire
												</Button>
											</Col>
										</Row>
									</Form.Group>
								))}

								<Button
									variant='primary'
									onClick={handleSubmit}
									disabled={!tweetUrl}
								>
									Submit All
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
};

export default TwitterCommentGenerator;