import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility to true after component mounts
    setIsVisible(true);
    
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
        <div className="bg-shape shape-4"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <i className="fas fa-code"></i>
            <span>React SPA Lab</span>
          </div>
          <div className="nav-time">
            <i className="fas fa-clock"></i>
            <span>{formatTime(currentTime)}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className={`profile-card ${isVisible ? 'fade-in' : ''}`}>
            <div className="profile-avatar">
              <div className="avatar-circle">
                <span className="avatar-text">AJ</span>
                <div className="avatar-ring"></div>
              </div>
            </div>
            <h1 className="profile-name">Abrar Junaid</h1>
            <p className="profile-title">Computer Science Student</p>
            <div className="profile-id">ID: 101505643</div>
            <div className="profile-date">
              <i className="fas fa-calendar"></i>
              <span>{formatDate(currentTime)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card course-card">
              <div className="card-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Course</h3>
              <p>COMP3104 - DevOps</p>
              <div className="card-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '85%'}}></div>
                </div>
                <span>85% Complete</span>
              </div>
            </div>
            
            <div className="info-card lab-card">
              <div className="card-icon">
                <i className="fab fa-react"></i>
              </div>
              <h3>Lab</h3>
              <p>React SPA Development</p>
              <div className="card-status">
                <i className="fas fa-check-circle"></i>
                <span>Completed</span>
              </div>
            </div>
            
            <div className="info-card status-card">
              <div className="card-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Status</h3>
              <p>App Running Successfully!</p>
              <div className="card-indicator">
                <div className="indicator-dot"></div>
                <span>Live</span>
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <h2>
              <i className="fas fa-tools"></i>
              Technologies Used
            </h2>
            <div className="tech-items">
              <div className="tech-item">
                <i className="fab fa-react"></i>
                <span>React</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-js-square"></i>
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-css3-alt"></i>
                <span>CSS3</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-html5"></i>
                <span>HTML5</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-git-alt"></i>
                <span>Git</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h2>
              <i className="fas fa-chart-line"></i>
              Project Statistics
            </h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Lab Completion</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Git Commits</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">GitHub Branch</div>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <i className="fab fa-react"></i>
              Learn React
            </a>
            <a href="https://github.com/AJ0521/COMP3104-Lab05" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
            <a href="mailto:abrar@example.com" className="btn btn-tertiary">
              <i className="fas fa-envelope"></i>
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Abrar Junaid - COMP3104 React SPA Lab</p>
          <div className="footer-links">
            <a href="https://github.com/AJ0521" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/abrar-junaid" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:abrar@example.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
