import React from 'react';
import { Link } from "react-router-dom";

export default function AdminHome() {
  // Styles for the side menu and dashboard
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

  const aHoverStyle = {
    backgroundColor: "#eee",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    width: "calc(33.33% - 20px)",
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

  // Responsive styles
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
        <h3 style={h3Style}>Admin Panel</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a href="/admin" style={aStyle}>Dashboard</a>
          </li>
          <li style={liStyle}>
            <a href="/read" style={aStyle}>Clients List</a>
          </li>
          <li style={liStyle}>
            <a href="#" style={aStyle}>Milk Collection</a>
          </li>
          <li style={liStyle}>
            <a href="/create" style={aStyle}>Register Admin</a>
          </li>
          <li style={liStyle}>
            <a href="#" style={aStyle}>Report</a>
          </li>
          <li style={liStyle}>
            <a href="#" style={aStyle}>Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content and Dashboard */}
      <div style={{ ...contentStyle, ...mediaQueryStyle.content }}>
        <h1>Manage DairySync Clients</h1>
        <div className="row mt-5 mb-3 p-3">
          {/* <div className="col-xl-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Clients</h5>
                <p className="card-text">
                  Please click button to get Clients details.
                </p>
                <Link to="/read" className="btn btn-primary">
                  Clients List
                </Link>
              </div>
            </div>
          </div> */}
          {/* <div className="col-xl-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Register Admin</h5>
                <p className="card-text">
                  Please click for registration of new Admin.
                </p>
                <Link to="/create" className="btn btn-primary">
                  Register
                </Link>
              </div>
            </div>
          </div> */}
        </div>

        {/* Dashboard Section */}
        {/* <h1 style={{ marginBottom: "20px", fontSize: "2rem", color: "#333" }}>Dashboard</h1> */}
        <div style={dashboardStyle}>
          <div style={{ ...cardStyle, backgroundColor: "#9966FF" }}>
            <h3 style={cardContentStyle}>Total Clients</h3>
            <p style={{ marginBottom: 0, fontSize: "1.2rem", color: "#333" }}>0</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <path d="M24 24c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" fill="#fff" />
              <path d="M24 36c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4 4 1.791 4 4z" fill="#fff" />
            </svg>
          </div>
          <div style={{ ...cardStyle, backgroundColor: "#FF6699" }}>
            <h3 style={cardContentStyle}>Total Sell</h3>
            <p style={{ marginBottom: 0, fontSize: "1.2rem", color: "#333" }}>0</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <path d="M24 24c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" fill="#fff" />
              <path d="M24 36c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4 4 1.791 4 4z" fill="#fff" />
              <path d="M16 16h16" fill="#fff" />
              <path d="M16 20h16" fill="#fff" />
              <path d="M20 24h8" fill="#fff" />
            </svg>
          </div>
          <div style={{ ...cardStyle, backgroundColor: "#FFCC66" }}>
            <h3 style={cardContentStyle}>Total Milk Collection</h3>
            <p style={{ marginBottom: 0, fontSize: "1.2rem", color: "#333" }}>0</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <path d="M24 36c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4 4 1.791 4 4z" fill="#fff" />
              <path d="M16 18h16" fill="#fff" />
              <path d="M16 26h16" fill="#fff" />
              <path d="M18 32h12" fill="#fff" />
              <path d="M22 34h4" fill="#fff" />
              <path d="M24 36c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4 4 1.791 4 4z" fill="#fff" />
              <path d="M20 14h8" fill="#fff" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
