import { useState, useEffect, Fragment } from "react";
import { Button, Form, Table, Pagination, Toast, OverlayTrigger, Tooltip } from "react-bootstrap";

export const ProfilesX = () => {
    const [profiles, setProfiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [profilesPerPage] = useState(10);
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [editMode, setEditMode] = useState(null);
    const [editedProfile, setEditedProfile] = useState(null);
    const [search, setSearch] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [toastData, setToastData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await fetch("http://localhost:5000/twitter/fetch_combined_profiles");
                if (!response.ok) throw new Error(`Error fetching profiles: ${response.status}`);
                const data = await response.json();
                setProfiles(data);
                console.log(data)
            } catch (error) {
                addToast("Error fetching profiles: " + error.message, 'danger');
                setProfiles([]);
            }
        };
        fetchProfiles();
    }, []);

    const statusCheck = async () => {
        setIsLoading(true);
        try {
            addToast('This can Take few minutes to check each box status', 'info');
            const response = await fetch('http://127.0.0.1:5000/twitter/statusCheck', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to sync profiles');
            }

            const data = await response.json();
            addToast('Profiles synced successfully!', 'success');
            window.location.reload();
        } catch (error) {
            addToast('Error syncing profiles: ' + error.message, 'danger');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLoginAll = async () => {
        setIsLoading(true);
        const LoggedIn = profiles.filter(profile => profile.connected_Twitter === false || profile.connected_Twitter === undefined);
        console.log("clean data", LoggedIn);
        try {
            const response = await fetch('http://127.0.0.1:5000/twitter/loginall', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(LoggedIn),
            });
            if (!response.ok) throw new Error('Failed to login profiles');
            addToast('Login request sent successfully!', 'success');
        } catch (error) {
            console.error("Error logging in profiles:", error);
            addToast('Error logging in profiles 500.', 'danger');
        } finally {
            setIsLoading(false);
        }
    };

    const combineBoxesCredentials = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:5000/twitter/combine_boxes_credentials', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to combine boxes and credentials');
            }

            const data = await response.json();
            window.location.reload();
            addToast('Boxes and credentials combined successfully!', 'success');
        } catch (error) {
            addToast('Error combining boxes and credentials: ' + error.message, 'danger');
        } finally {
            setIsLoading(false);
        }
    };
    const addToast = (message, type) => {
        const newToast = { id: Date.now(), message, type };
        setToastData(prev => [...prev, newToast]);
        setTimeout(() => {
            setToastData(prev => prev.filter(toast => toast.id !== newToast.id));
        }, 5000);
    };

    const handleSort = (field) => {
        setSortOrder(prevOrder => (sortField === field && prevOrder === 'asc' ? 'desc' : 'asc'));
        setSortField(field);
    };

    const handleEdit = (profile) => {
        setEditMode(profile.id);
        setEditedProfile({ ...profile });
    };

    const handleSave = async (profile) => {
        if (!profile) return;
        const updatedProfiles = profiles.map(p => (p.id === profile.id ? profile : p));
        setProfiles(updatedProfiles);
        setEditMode(null);

        try {
            const response = await fetch('http://127.0.0.1:5000/twitter/profiles/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profile),
            });
            if (!response.ok) throw new Error('Failed to save profile');
            addToast('Profile saved successfully!', 'success');
        } catch (error) {
            addToast('Error saving profile: ' + error.message, 'danger');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const sortedProfiles = [...profiles].sort((a, b) => {
        if (!sortField) return 0;

        // Handle nested objects for credentials
        if (sortField.startsWith('credentials.')) {
            const field = sortField.split('.')[1];
            const valueA = a.credentials?.[field] || '';
            const valueB = b.credentials?.[field] || '';
            return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }

        // Handle nested objects for proxy
        if (sortField.startsWith('proxy.')) {
            const field = sortField.split('.')[1];
            const valueA = a.proxy?.[field] || '';
            const valueB = b.proxy?.[field] || '';
            return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }

        // Handle top-level fields
        const valueA = a[sortField] || '';
        const valueB = b[sortField] || '';
        return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    const filteredProfiles = sortedProfiles.filter(profile => {
        const searchTerm = search.toLowerCase();
        const email = profile.credentials?.email?.toLowerCase() || '';
        const username = profile.credentials?.username?.toLowerCase() || '';
        const category = profile.category?.toLowerCase() || '';
        const country = profile.proxy?.password ?
            profile.proxy.password.split('_')[1].split('-')[1].toLowerCase() : '';

        return email.includes(searchTerm) ||
            username.includes(searchTerm) ||
            category.includes(searchTerm) ||
            country.includes(searchTerm);
    });

    const handleLogin = async (profile) => {
        try {
            setIsLoading(true);
            const response = await fetch(`http://127.0.0.1:5000/twitter/login`, {
                method: 'POST',
                mode: 'cors', // Ensure CORS is enabled
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profile),
            });
            if (!response.ok) throw new Error('Failed to login profile');
            addToast('Profile logged in successfully!', 'success');
            window.location.reload();
        } catch (error) {
            addToast('Error logging in profile: ' + error.message, 'danger');
        } finally {
            setIsLoading(false);
        }
    };
    const handleLogout = async (profile) => {
        try {
            setIsLoading(true);

            console.log(profile.id);
            const response = await fetch(`http://127.0.0.1:5000/twitter/logout/${profile.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
            if (!response.ok) throw new Error('Failed to logout profile');
            addToast('Profile logged out successfully!', 'success'); // Add toast message
            window.location.reload();

        } catch (error) {
            console.error("Error logging out profile:", error);
            addToast('Error logging out profile.', 'danger'); // Add toast message
        } finally {
            setIsLoading(false);
        }
    };
    const paginatedProfiles = filteredProfiles.slice((currentPage - 1) * profilesPerPage, currentPage * profilesPerPage);

    return (
        <div className="app-container table-responsive">
            <div className="search-bar mb-3">
                <Form.Group controlId="searchInput" className="w-25 mb-3">
                    <Form.Label>Search:</Form.Label>
                    <Form.Control type="text" value={search} onChange={handleSearchChange} placeholder="🔍 Search..." />
                </Form.Group>
            </div>
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="login-all-tooltip">Refresh Boxes</Tooltip>}
            >
                <Button variant="info" onClick={combineBoxesCredentials} className="mb-3 float-end  me-2" disabled={isLoading}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                    </svg>
                </Button>
            </OverlayTrigger>

            <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="login-all-tooltip"> Login Status </Tooltip>}
            >
                <Button variant="warning" onClick={statusCheck} className="mb-3 float-end    me-2" disabled={isLoading}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14" />
                    </svg>
                </Button>
            </OverlayTrigger>

            <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="login-all-tooltip">Login All</Tooltip>}
            >
                <Button variant="secondary" onClick={handleLoginAll} className="mb-3 float-end me-2" disabled={isLoading}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-broadcast-pin" viewBox="0 0 16 16">
                        <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8" />
                    </svg>
                </Button>
            </OverlayTrigger>


            <Table striped bordered hover responsive className="table-sm">
                <thead className="table-light">
                    <tr>
                        <th></th>
                        <th onClick={() => handleSort('credentials.email')}>Email {sortField === 'credentials.email' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                        <th onClick={() => handleSort('credentials.username')}>Username {sortField === 'credentials.username' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                        <th>Password</th>
                        <th onClick={() => handleSort('proxy.password')}>Country/City {sortField === 'proxy.password' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                        <th onClick={() => handleSort('category')}>Category {sortField === 'category' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedProfiles.length > 0 ? (
                        paginatedProfiles.map((profile, index) => (
                            <Fragment key={`${profile.id}-${index}`}>
                                <tr>
                                    <td>
                                        {profile.connected_Twitter === true ? (
                                            <span className="text-success" style={{ marginRight: '0.5rem', animation: 'flash 1s infinite' }}>●</span>
                                        ) : (
                                            <span className="text-danger" style={{
                                                marginRight: '0.5rem'
                                            }}>●</span>
                                            // <span className="text-danger" style={{ marginRight: '0.5rem', animation: 'flash 1s infinite' }}>●</span>

                                        )}
                                    </td>
                                    <td>{profile.credentials.email}</td>
                                    <td>{profile.credentials.username}</td>
                                    <td>
                                        {editMode === profile.id ? (
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                value={editedProfile.credentials.password}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                                <span style={{ float: 'left' }}>
                                                    {profile.credentials.password ? profile.credentials.password[0] + "*".repeat(profile.credentials.password.length - 1) : ""}
                                                </span>
                                                {profile.credentials.password && (
                                                    <span
                                                        style={{ cursor: 'pointer', float: 'right' }}
                                                        onClick={(e) => {
                                                            const span = e.currentTarget.previousSibling;
                                                            span.textContent = span.textContent.includes('*')
                                                                ? profile.credentials.password
                                                                : profile.credentials.password[0] + "*".repeat(profile.credentials.password.length - 1);
                                                        }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                        </svg>
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {profile.proxy.password ?
                                            ` ${profile.proxy.password.split('_')[1].split('-')[1].toUpperCase()}, 
                                          ${profile.proxy.password.split('_')[2].split('-')[1].charAt(0).toUpperCase() + profile.proxy.password.split('_')[2].split('-')[1].slice(1)}`
                                            : 'N/A'
                                        }
                                    </td>
                                    <td>
                                        {editMode === profile.id ? (
                                            <Form.Select name="category" value={editedProfile.category} onChange={handleInputChange}>
                                                <option value="">Select Category</option>
                                                <option value="Politics">Politics</option>
                                                <option value="Music">Music</option>
                                                <option value="Sport">Sport</option>
                                                <option value="Religion">Religion</option>
                                                <option value="General">General</option>
                                            </Form.Select>
                                        ) : (
                                            profile.category
                                        )}
                                    </td>
                                    <td style={{ display: 'flex', gap: '0.6rem' }}>
                                        {editMode === profile.id ? (
                                            <Button variant="success" size="sm" onClick={() => handleSave(editedProfile)} disabled={isLoading}>Save</Button>
                                        ) : (
                                            <Button variant="warning" size="sm" onClick={() => handleEdit(profile)} disabled={isLoading}>Edit</Button>
                                        )}
                                        {profile.connected_Twitter ? (
                                            <Button variant="danger" size="sm" onClick={() => handleLogout(profile)} disabled={isLoading}>Logout</Button>
                                        ) : (
                                            <Button variant="success" size="sm" onClick={() => handleLogin(profile)} disabled={isLoading}>Login</Button>
                                        )}

                                    </td>
                                </tr>
                            </Fragment>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center"> No profiles found. </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <div className="d-flex justify-content-between align-items-center my-3">
                <Button
                    variant="outline-primary"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <span className="pagination-info">
                    Page {currentPage} of {Math.ceil(filteredProfiles.length / profilesPerPage)}
                </span>
                <Button
                    variant="outline-primary"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredProfiles.length / profilesPerPage)))}
                    disabled={currentPage === Math.ceil(filteredProfiles.length / profilesPerPage)}
                >
                    Next
                </Button>
            </div>

            <div className="ht-150 pos-relative">
                <div className="demo-static-toast position-fixed bottom-0 end-0 p-3">
                    {toastData.map(toast => (
                        <Toast key={toast.id} className={`bg-${toast.type}`} onClose={() => setToastData(prev => prev.filter(t => t.id !== toast.id))}>
                            <Toast.Header>
                                <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
                                <small className="text-muted">Just now</small>
                            </Toast.Header>
                            <Toast.Body style={{ color: 'white' }}>{toast.message}</Toast.Body>
                        </Toast>
                    ))}
                </div>
            </div>
        </div>
    );
};
