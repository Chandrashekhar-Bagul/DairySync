import React, { useEffect, useState } from 'react';

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

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#f2f2f2',
  },
  td: {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ccc',
  },
  even: {
    backgroundColor: '#f8f8f8',
  },
};

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMilkRecords = async () => {
      const email = localStorage.getItem('clientEmail'); // Get client email from localStorage

      if (!email) {
        setError('No client email found. Please log in again.');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError('');
      try {
        // const response = await fetch(`http://localhost:9009/api/milk-entries/user/${email}`);
        const response = await fetch(`http://localhost:9009/api/milk-entries/user/email?email=${email}`);
        if (!response.ok) {
          throw new Error('Failed to fetch milk records');
        }
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching milk records:', error);
        setError('Failed to load milk records');
      } finally {
        setLoading(false);
      }
    };

    fetchMilkRecords();
  }, []);

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
          <h2>Milk Records</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {loading ? (
            <p>Loading milk records...</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Milk Type</th>
                  <th style={styles.th}>Quantity (ltr)</th>
                  <th style={styles.th}>Fat Content (%)</th>
                  <th style={styles.th}>snf (%)</th>
                  <th style={styles.th}>Price (ltr)</th>
                  <th style={styles.th}>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td style={{ ...styles.td, ...(index % 2 === 0 ? styles.even : {}) }}>
                      {transaction.date}
                    </td>
                    <td style={{ ...styles.td, ...(index % 2 === 0 ? styles.even : {}) }}>
                      {transaction.milkType}
                    </td>
                    <td style={{ ...styles.td, ...(index % 2 === 0 ? styles.even : {}) }}>
                      {transaction.quantity}
                    </td>
                    <td style={{ ...styles.td, ...(index % 2 === 0 ? styles.even : {}) }}>
                      {transaction.fatContent}
                    </td>
                    <td style={{ ...styles.td, ...(index % 2 === 0 ? styles.even : {}) }}>
                      {transaction.snf}
                    </td>
                    <td style={{ ...styles.td, ...(index % 2 === 0 ? styles.even : {}) }}>
                      {transaction.pricePerLitre}
                    </td>
                    <td style={{ ...styles.td, ...(index % 2 === 0 ? styles.even : {}) }}>
                      {transaction.totalPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
