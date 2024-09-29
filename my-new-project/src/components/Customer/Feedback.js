import React, { useState } from 'react';

// Internal CSS as JavaScript objects
const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  emojiRating: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
  },
  emojiLabel: {
    margin: '0 5px',
    cursor: 'pointer',
    fontSize: '2em',
  },
  emojiInput: {
    display: 'none',
  },
  textArea: {
    width: '100%',
    height: '120px',
    padding: '10px',
    resize: 'vertical',
    textAlign: 'center',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    marginTop: '20px',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    justifyContent: 'center',
  },
  submitButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  submitButtonContainer1: {
    textAlign: 'center',
  },
  emojiInputChecked: {
    transform: 'scale(1.2)',
    filter: 'drop-shadow(0 0 5px #007bff)',
  },
  thankYouText: {
    textAlign: 'center',
    marginTop: '20px',
  },
  backLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const feedbackText = event.target.feedbackText.value;

    // Send feedback data (rating, feedbackText) to your server (e.g., using fetch or axios)
    // Example:
    // fetch('/api/feedback', {
    //   method: 'POST',
    //   body: JSON.stringify({ rating, feedbackText })
    // })
    // .then(...)

    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h1>Share Your Experience</h1>

      {!submitted ? (
        <form id="feedbackForm" onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px', marginRight: '100px' }}>
            <div style={styles.emojiRating}>
              <label htmlFor="bad" style={styles.emojiLabel}>
                <input
                  type="radio"
                  id="bad"
                  name="experience"
                  value="bad"
                  onChange={() => setRating("bad")}
                  style={styles.emojiInput}
                />
                <span role="img" aria-label="Bad">☹️</span>
              </label>
              <label htmlFor="neutral" style={styles.emojiLabel}>
                <input
                  type="radio"
                  id="neutral"
                  name="experience"
                  value="neutral"
                  onChange={() => setRating("neutral")}
                  style={styles.emojiInput}
                />
                <span role="img" aria-label="Neutral">😐</span>
              </label>
              <label htmlFor="good" style={styles.emojiLabel}>
                <input
                  type="radio"
                  id="good"
                  name="experience"
                  value="good"
                  onChange={() => setRating("good")}
                  style={styles.emojiInput}
                />
                <span role="img" aria-label="Good">🙂</span>
              </label>
            </div>
          </div>
          <textarea
            id="feedbackText"
            name="feedbackText"
            placeholder="Tell us what you think..."
            style={styles.textArea}
          ></textarea>
          <div style={styles.submitButtonContainer}>
            <button type="submit" style={styles.submitButton}>
              Submit Feedback
            </button>
          </div>
        </form>
      ) : (
        <div id="thankYou" style={styles.thankYouText}>
          <h2>Thank you for your feedback!</h2>
          <h3>Your input is valuable to us.</h3>
          <div style={styles.submitButtonContainer}>
            <a href="/client" style={styles.backLink}>
              <button style={styles.submitButton}>Back</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feedback;
