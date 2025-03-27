import React, { useEffect, useState } from 'react';
import { Card, Col, Nav, Row, Container, Tab, Form, Button, Toast, Accordion } from 'react-bootstrap';
import Pageheader from '../../../layouts/layoutcomponents/pageheader';
import { Savetable } from '../../../common/tablesdata';
import { ProfilesX } from '../../elements/profiles/profilesX';

const Settings = () => {
  const [profileName, setProfileName] = useState('');
  const [browserType, setBrowserType] = useState('');
  const [operatingSystem, setOperatingSystem] = useState('');
  const [proxyEnabled, setProxyEnabled] = useState(true);
  const [error, setError] = useState('');

  const syncProfiles = async () => {
    try {
      const response = await fetch('http://164.68.114.70:5000/twitter/sync-profiles', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to sync profiles');
      }

      const data = await response.json();
      console.log('Profiles synced successfully:', data);
    } catch (error) {
      console.error('Error syncing profiles:', error);
    }
  };
  const combineBoxesCredentials = async () => {
    try {
      const response = await fetch('http://164.68.114.70:5000/twitter/combine_boxes_credentials', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to combine boxes and credentials');
      }

      const data = await response.json();
      console.log('Boxes and credentials combined successfully:', data);
    } catch (error) {
      console.error('Error combining boxes and credentials:', error);
    }
  };



  const handleSaveBox = async (event) => {
    event.preventDefault();
    if (!profileName || !browserType || !operatingSystem) {
      setError('All fields are required.');
      return;
    }
    setError('');
    const profileData = {
      profileName,
      browserType,
      operatingSystem,
      proxyEnabled,
    };
    console.log(profileData);
    try {
      const response = await fetch('http://164.68.114.70:5000/save_box', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });
      console.log(response);

      if (response.ok) {
        console.log('Profile saved successfully');
        syncProfiles();
        combineBoxesCredentials();
      } else {
        console.error('Failed to save profile');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container fluid>
      <Pageheader titles="Profiles" active="Browser" />
      <Row>
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <Tab.Container defaultActiveKey="Twitter">
                <Nav variant="tabs" className="flex-column flex-sm-row">
                  <Nav.Item className="flex-sm-fill text-sm-center">
                    <Nav.Link eventKey="Twitter">
                      <i className="fe fe-home"></i> Twitter Profiles
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-sm-fill text-sm-center">
                    <Nav.Link eventKey="web">
                      <i className="fe fe-grid"></i> Facebook Profiles
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-sm-fill text-sm-center">
                    <Nav.Link eventKey="gen">
                      <i className="fe fe-server"></i> Instagram Profiles
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-sm-fill text-sm-center">
                    <Nav.Link eventKey="com">
                      <i className="fe fe-globe"></i> Create New Box
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="Twitter">
                    <Card>
                      <Card.Header>
                        <Card.Title as="h3">Twitter Profiles</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <ProfilesX />
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="web">
                    <Card>
                      <Card.Header>
                        <Card.Title as="h3">Facebook Profiles</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <p>Manage your Facebook profiles here.</p>
                        <Savetable />
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="gen">
                    <Card>
                      <Card.Header>
                        <Card.Title as="h3">Instagram Profiles</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <p>Manage your Instagram profiles here.</p>
                        <Savetable />
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="com">
                    <Card>
                      <Card.Header>
                        <Card.Title as="h3">Create New Box</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        {/* <Accordion defaultActiveKey="0" flush>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Important Note</Accordion.Header>
                            <Accordion.Body>
                              Use the following abbreviations: PT for Twitter, PF for Facebook, and PI for Instagram.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion> */}
                        {error && (
                          <div className="demo-static-toast position-fixed bottom-0 end-0 p-3">
                            <Toast className="bg-danger" onClose={() => setError('')} show={!!error} delay={3000} autohide>
                              <Toast.Header>
                                <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
                                <small className="text-muted">Just now</small>
                              </Toast.Header>
                              <Toast.Body style={{ color: 'white' }}>{error}</Toast.Body>
                            </Toast>
                          </div>
                        )}
                        <Form onSubmit={handleSaveBox}>
                          <Row>
                            <Col md={6}>
                              <Form.Group controlId="formProfileName">
                                <Form.Label>Box Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter profile name"
                                  aria-label="Profile Name"
                                  value={profileName}
                                  onChange={(e) => setProfileName(e.target.value)}
                                />
                              </Form.Group>

                              <Form.Group controlId="formBrowserType">
                                <Form.Label>Browser Type</Form.Label>
                                <Form.Control
                                  as="select"
                                  aria-label="Select Browser Type"
                                  value={browserType}
                                  onChange={(e) => setBrowserType(e.target.value)}
                                >
                                  <option value="" disabled>Select a browser</option>
                                  <option value="chrome">Chrome</option>
                                  <option value="Yandex">Yandex</option>
                                  <option value="edge">Edge</option>
                                  <option value="brave">Brave</option>
                                  <option value="opera">Opera</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group controlId="formOS">
                                <Form.Label>Operating System</Form.Label>
                                <Form.Control
                                  as="select"
                                  aria-label="Select Operating System"
                                  value={operatingSystem}
                                  onChange={(e) => setOperatingSystem(e.target.value)}
                                >
                                  <option value="" disabled>Select an OS</option>
                                  <option value="win">Windows</option>
                                  <option value="mac">MacOS</option>
                                  <option value="linux">Linux</option>
                                  <option value="android">Android</option>
                                  <option value="ios">iOS</option>
                                </Form.Control>
                              </Form.Group>

                              <Form.Group controlId="formProxyEnabled" className="mt-4">
                                <Form.Check
                                  type="checkbox"
                                  label="Enable Proxy"
                                  aria-label="Enable Proxy"
                                  checked={proxyEnabled}
                                  onChange={(e) => setProxyEnabled(e.target.checked)}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Button
                            className="mt-4 float-end"
                            variant="primary"
                            type="submit"
                            aria-label="Save Box"
                          >
                            Save Box
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >
  );
};

export default Settings;
