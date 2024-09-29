import React, { useState } from 'react';

export default function Client() {
  const [showForm, setShowForm] = useState(false);
  const [complaintDescription, setComplaintDescription] = useState('');

  // Toggle form visibility
  const handleRaiseComplaint = () => {
    setShowForm(!showForm);
  };

  // Handle form submission
  const handleSubmitComplaint = (e) => {
    e.preventDefault();

    // Assuming you have the user's ID stored in localStorage or context
    const userId = localStorage.getItem('userId');

    // Complaint object
    const complaint = {
      description: complaintDescription,
    };

    const email = localStorage.getItem('clientEmail');

    // Make the POST request to the backend
    fetch(`http://localhost:9009/api/complaints/raise/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(complaint),
    })
    .then(response => {
      if (response.ok) {
        alert('Complaint raised successfully');
        // Reset the form
        setComplaintDescription('');
        setShowForm(false);
      } else {
        alert('Failed to raise complaint');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while raising the complaint');
    });
  };

  // Styles for the side menu and dashboard (unchanged)
  const containerStyle = {
    fontFamily: "sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f4f4f4",
    height: "100vh",
    display: "flex",
    width: "100%",
    flexDirection: "row",
  };

  const sidebarStyle = {
    backgroundColor: "#fff",
    width: "200px",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
  };

  const contentStyle = {
    flex: 1,
    padding: "20px",
  };

  const h3Style = {
    marginBottom: "20px",
    fontSize: "1.2rem",
    color: "#333",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
  };

  const liStyle = {
    marginBottom: "10px",
  };

  const aStyle = {
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: "#333",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    width: "calc(33.33% - 20px)",
    position: "relative",
  };

  const cardContentStyle = {
    marginBottom: "10px",
    fontSize: "1.5rem",
    color: "#333",
  };

  const dashboardStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#fff",
    color: "#333",
    border: "1px solid #333",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    width: "100%",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const mediaQueryStyle = {
    '@media (max-width: 768px)': {
      container: {
        flexDirection: "column",
      },
      sidebar: {
        width: "100%",
        boxShadow: "none",
      },
      content: {
        marginTop: "20px",
      },
      card: {
        width: "100%",
      },
    },
  };

  return (
    <div style={{ ...containerStyle, ...mediaQueryStyle.container }}>
      {/* Sidebar Menu */}
      <div style={{ ...sidebarStyle, ...mediaQueryStyle.sidebar }}>
        <h3 style={h3Style}>Client Panel</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a href="/client" style={aStyle}>Dashboard</a>
          </li>
          <li style={liStyle}>
            <a href="/history" style={aStyle}>Milk Records</a>
          </li>
          <li style={liStyle}>
            <a href="/transaction" style={aStyle}>Transaction</a>
          </li>
          <li style={liStyle}>
            <a href="/login" style={aStyle}>Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content and Dashboard */}
      <div style={{ ...contentStyle, ...mediaQueryStyle.content }}>
        <h1>DairySync</h1>

        {/* Dashboard Section */}
        <div style={dashboardStyle}>
          <div style={{ ...cardStyle, backgroundColor: "#9966FF" }}>
            <h3 style={cardContentStyle}>Records</h3>
          </div>
          <div style={{ ...cardStyle, backgroundColor: "#FF6699" }}>
            <h3 style={cardContentStyle}>Transaction</h3>
          </div>
          <div style={{ ...cardStyle, backgroundColor: "#FFCC66" }}>
            <h3 style={cardContentStyle}>Raise Complaint</h3>
            <button style={buttonStyle} onClick={handleRaiseComplaint}>Raise Complaint</button>
          </div>
        </div>

        {/* Complaint Form */}
        {showForm && (
          <div style={formStyle}>
            <h3>Raise a New Complaint</h3>
            <form onSubmit={handleSubmitComplaint}>
              <textarea
                placeholder="Complaint Description"
                style={inputStyle}
                rows="5"
                value={complaintDescription}
                onChange={(e) => setComplaintDescription(e.target.value)}
              />
              <button type="submit" style={buttonStyle}>Submit Complaint</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
