import React from 'react';

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    background: 'linear-gradient(90deg, #11b232 0%, #6e78f7 100%)',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  statusIcon: {
    marginRight: '5px',
  },
  completed: {
    color: 'black',
  },
  pending: {
    color: '#ffc107',
  },
  failed: {
    color: '#dc3545',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'inline-block',
  },
  submitButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
};

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

function Transaction() {
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
            <a href="transaction" style={aStyle}>Transaction</a>
          </li>
          <li style={liStyle}>
            <a href="/login" style={aStyle}>Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content and Dashboard */}
      <div style={{ ...contentStyle, ...mediaQueryStyle.content }}>
        
        <div style={styles.container}>
          <h1 style={styles.title}>Transaction Details</h1>

          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Transaction ID:</span>
            <span>TXN123456789</span>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Date:</span>
            <span>2024-06-14</span>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Amount:</span>
            <span>
              <i className="fa-solid fa-indian-rupee-sign" style={styles.statusIcon} /> 500.00
            </span>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Description:</span>
            <span>Payment</span>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Status:</span>
            <span style={styles.completed}>
              <i className="fas fa-check-circle" style={styles.statusIcon} /> Completed
            </span>
          </div>

          <div style={styles.submitButtonContainer}>
            <a href="/client" style={{ textDecoration: 'none' }}>
              <button style={styles.submitButton}>Back</button>
            </a>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default Transaction;
