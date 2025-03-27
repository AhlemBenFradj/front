import { useState, useEffect, Fragment } from "react";
import { Button, Form, Table, Pagination, Toast } from "react-bootstrap";

export const Savetable = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(10);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [editMode, setEditMode] = useState(null);
  const [editedProfile, setEditedProfile] = useState(null);
  const [showNonLoginProfiles, setShowNonLoginProfiles] = useState(true);
  const [search, setSearch] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toastData, setToastData] = useState([]); // State for toast messages

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("http://164.68.114.70:5000/fetch_data");
        if (!response.ok) throw new Error(`Error fetching profiles: ${response.status}`);
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
        setProfiles([]);
      }
    };

    fetchProfiles();
  }, []);

  const fetchCombinedProfiles = async () => {
    setIsRefreshing(true);
    addToast('Fetching combined profiles...', 'info'); // Add toast message
    try {
      const response = await fetch("http://164.68.114.70:5000/fetch_combined_profiles");
      if (!response.ok) throw new Error(`Error fetching combined profiles: ${response.status}`);
      const data = await response.json();
      setProfiles(data);
      addToast('Profiles fetched successfully!', 'success'); // Add toast message
    } catch (error) {
      console.error("Error fetching combined profiles:", error);
      setProfiles([]);
      addToast('Failed to fetch combined profiles.', 'danger'); // Add toast message
    } finally {
      setIsRefreshing(false);
    }
  };

  const addToast = (message, type) => {
    const newToast = { id: Date.now(), message, type };
    setToastData(prev => [...prev, newToast]);
    setTimeout(() => {
      setToastData(prev => prev.filter(toast => toast.id !== newToast.id));
    }, 5000); // Remove toast after 5 seconds
  };

  const handleRefresh = () => {
    fetchCombinedProfiles();
  };

  const handleSort = (field) => {
    setSortOrder(prevOrder => (sortField === field && prevOrder === 'asc' ? 'desc' : 'asc'));
    setSortField(field);
  };

  const handleEdit = (profile) => {
    setEditMode(profile.ProfileID);
    setEditedProfile({ ...profile });
  };

  const handleSave = async (profile) => {
    if (!profile) return;
    const updatedProfiles = profiles.map(p => (p.ProfileID === profile.ProfileID ? profile : p));
    setProfiles(updatedProfiles);
    setEditMode(null);

    try {
      const response = await fetch('http://164.68.114.70:5000/profiles/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });
      if (!response.ok) throw new Error('Failed to save profile');
      addToast('Profile saved successfully!', 'success'); // Add toast message
    } catch (error) {
      console.error("Error saving profile:", error);
      addToast('Error saving profile.', 'danger'); // Add toast message
    }
  };

  const handleSaveAll = async () => {
    const updatedProfiles = profiles.map(profile => {
      if (profile.selected) {
        return { ...profile, edited: true };
      }
      return profile;
    });
    setProfiles(updatedProfiles);

    try {
      const response = await fetch('http://164.68.114.70:5000/profiles/save_all', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfiles.filter(profile => profile.edited)),
      });
      if (!response.ok) throw new Error('Failed to save profiles');
      addToast('All profiles saved successfully!', 'success'); // Add toast message
    } catch (error) {
      console.error("Error saving profiles:", error);
      addToast('Error saving profiles.', 'danger'); // Add toast message
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

  const handleLoginAll = async () => {
    const profilesToLogin = profiles.filter(profile =>
      profile.connectedTwitter === "YES" ||
      profile.fullname === '' ||
      profile.username === '' ||
      profile.password === '' ||
      profile.email === '' ||
      profile.name === '' ||
      profile.category === '' ||
      profile.country === '' ||
      profile.fullname === 'N/A' ||
      profile.username === 'N/A' ||
      profile.email === 'N/A' ||
      profile.password === 'N/A' ||
      profile.name === 'N/A' ||
      profile.category === 'N/A' ||
      profile.country === 'N/A'
    );
    console.log(profilesToLogin)
    if (profilesToLogin.length !== 0) {
      addToast('No valid profiles to login.', 'danger'); // Add toast message
      return;
    }
    const LoggedIn = profiles.filter(profile => profile.connectedTwitter === "No");
    console.log("clean data", LoggedIn);
    try {
      const response = await fetch('http://164.68.114.70:5000/loginall', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(LoggedIn),
      });
      if (!response.ok) throw new Error('Failed to login profiles');
      addToast('Login request sent successfully!', 'success'); // Add toast message
    } catch (error) {
      console.error("Error logging in profiles:", error);
      addToast('Error logging in profiles 500.', 'danger'); // Add toast message
    }
  };

  const handleLogout = async (profile) => {
    try {
      console.log(profile.ProfileID);
      const response = await fetch(`http://164.68.114.70:5000/logout/${profile.ProfileID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (!response.ok) throw new Error('Failed to logout profile');
      addToast('Profile logged out successfully!', 'success'); // Add toast message
      // Update the profile state to reflect the logout
      setProfiles(prevProfiles => prevProfiles.map(p => p.ProfileID === profile.ProfileID ? { ...p, connectedTwitter: "No" } : p));
    } catch (error) {
      console.error("Error logging out profile:", error);
      addToast('Error logging out profile.', 'danger'); // Add toast message
    }
  };
  const handleLogin = async (profile) => {
    console.log(profile);
    try {
      const response = await fetch(`http://164.68.114.70:5000/login`, {
        method: 'POST',
        mode: 'cors', // Ensure CORS is enabled
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),

      });
      console.log(response);
      if (!response.ok) throw new Error('Failed to login profile');
      addToast('Profile logged in successfully!', 'success'); // Add toast message
      // Update the profile state to reflect the logout
      setProfiles(prevProfiles => prevProfiles.map(p => p.ProfileID === profile.ProfileID ? { ...p, connectedTwitter: "No" } : p));
    } catch (error) {
      console.error("Error logging in profile:", error);
      addToast('Error logging in profile.', 'danger'); // Add toast message
    }
  };

  const sortedProfiles = [...profiles].sort((a, b) => {
    if (!sortField) return 0;
    return sortOrder === 'asc' ? (a[sortField] > b[sortField] ? 1 : -1) : (a[sortField] < b[sortField] ? 1 : -1);
  });

  const filteredProfiles = sortedProfiles.filter(profile =>
    showNonLoginProfiles || profile.connectedTwitter === "No"
  ).filter(profile => {
    return Object.keys(profile).some(key => {
      const value = profile[key].toLowerCase();
      return value.includes(search.toLowerCase());
    });
  });

  const paginatedProfiles = filteredProfiles.slice((currentPage - 1) * profilesPerPage, currentPage * profilesPerPage);

  return (
    <div className="app-container table-responsive">
      <div className="search-bar mb-3 d-flex justify-content-between align-items-center">
        <Form.Group controlId="searchInput" className="w-25 mb-3">
          <Form.Label>Search:</Form.Label>
          <Form.Control type="text" value={search} onChange={handleSearchChange} placeholder="🔍 Search..." />
        </Form.Group>
        <Form.Check
          type="switch"
          id="flexSwitchCheckChecked"
          label="Show All"
          checked={showNonLoginProfiles}
          onChange={() => setShowNonLoginProfiles(prev => !prev)}
          className="float-end"
        />
      </div>
      <div className="d-flex justify-content-end mb-3">

        <>
          <Button variant="info" onClick={handleRefresh} className="me-2" disabled={isRefreshing}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
          </Button>

        </>
        <Button variant="dark" onClick={handleLoginAll} className="me-2" disabled={isRefreshing}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
          </svg>
        </Button>
      </div>


      <Table striped bordered hover responsive className="table-sm">
        <thead className="table-light">
          <tr>
            <th onClick={() => handleSort('fullname')} style={{ cursor: 'pointer', fontSize: '0.8rem', resize: 'horizontal', overflow: 'auto' }}>Full Name</th>
            <th onClick={() => handleSort('username')} style={{ cursor: 'pointer', fontSize: '0.8rem', resize: 'horizontal', overflow: 'auto' }}>Username</th>
            <th onClick={() => handleSort('email')} style={{ cursor: 'pointer', fontSize: '0.8rem', resize: 'horizontal', overflow: 'auto', width: '15%' }}>Email</th>
            <th onClick={() => handleSort('password')} style={{ cursor: 'pointer', fontSize: '0.8rem', resize: 'horizontal', overflow: 'auto' }}>Password</th>
            <th onClick={() => handleSort('category')} style={{ cursor: 'pointer', fontSize: '0.8rem', resize: 'horizontal', overflow: 'auto' }}>Category</th>
            <th onClick={() => handleSort('country')} style={{ cursor: 'pointer', fontSize: '0.8rem', resize: 'horizontal', overflow: 'auto' }}>Country</th>
            <th onClick={() => handleSort('status')} style={{ cursor: 'pointer', fontSize: '0.8rem', resize: 'horizontal', overflow: 'auto' }}>status</th>

            <th style={{ fontSize: '1rem', resize: 'horizontal', overflow: 'auto' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProfiles.length > 0 ? (
            paginatedProfiles.map((profile, index) => (
              <Fragment key={`${profile.ProfileID}-${index}`}>
                <tr>
                  <td>
                    {profile.connectedTwitter === "Yes" ? (
                      <span className="text-success" style={{ marginRight: '0.5rem', animation: 'flash 1s infinite' }}>●</span>
                    ) : (
                      <span className="text-danger" style={{
                        marginRight: '0.5rem'
                      }}>●</span>
                      // <span className="text-danger" style={{ marginRight: '0.5rem', animation: 'flash 1s infinite' }}>●</span>

                    )}
                    {editMode === profile.ProfileID ? <Form.Control type="text" name="fullname" value={editedProfile.fullname} onChange={handleInputChange} /> : profile.fullname}
                  </td>
                  <td>{editMode === profile.ProfileID ? <Form.Control type="text" name="username" value={editedProfile.username} onChange={handleInputChange} /> : profile.username}</td>
                  <td>{editMode === profile.ProfileID ? <Form.Control type="text" name="email" value={editedProfile.email} onChange={handleInputChange} /> : profile.email}</td>

                  <td>
                    {editMode === profile.ProfileID ? (
                      <Form.Control
                        type="password"
                        name="password"
                        value={editedProfile.password}
                        onChange={handleInputChange}
                      />
                    ) : (
                      profile.password ? profile.password[0] + "*".repeat(profile.password.length - 1) : ""
                    )}
                  </td>
                  <td>{editMode === profile.ProfileID ? (
                    <Form.Select name="category" value={editedProfile.category} onChange={handleInputChange}>
                      <option value="">Select Category</option>
                      <option value="Politics">Politics</option>
                      <option value="Music">Music</option>
                      <option value="Sport">Sport</option>
                      <option value="Religion">Religion</option>
                      <option value="General">General</option>
                    </Form.Select>
                  ) : (profile.category ? profile.category : "N/A")}</td>
                  <td>{editMode === profile.ProfileID ? <Form.Control type="text" name="country" value={editedProfile.country} onChange={handleInputChange} /> : profile.country}</td>
                  <td>
                    {profile.connectedTwitter === "Yes" ? (
                      <Button variant="danger" size="sm" onClick={() => handleLogout(profile)}>Logout</Button>
                    ) : (
                      <Button variant="success" size="sm" onClick={() => handleLogin(profile)}>Login</Button>
                    )}
                  </td>

                  <td style={{ display: 'flex', gap: '0.6rem' }}>
                    {editMode === profile.ProfileID ? (
                      <Button variant="success" size="sm" onClick={() => handleSave(editedProfile)}>Save</Button>
                    ) : (
                      <Button variant="warning" size="sm" onClick={() => handleEdit(profile)}>Edit</Button>
                    )}
                    <Button variant="danger" size="sm">Delete</Button>
                  </td>
                </tr>
              </Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center"> No profiles found. </td>
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
