import React from 'react';
import './Home.css';

// Icon components
const DatabaseIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 8c-3.866 0-7-1.79-7-4s3.134-4 7-4 7 1.79 7 4-3.134 4-7 4z"/>
    <path d="M5 12c0 2.21 3.134 4 7 4s7-1.79 7-4"/>
    <path d="M5 12v6c0 2.21 3.134 4 7 4s7-1.79 7-4v-6"/>
    <path d="M5 12v-6c0-2.21 3.134-4 7-4s7 1.79 7 4v6"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const ZapIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const FileIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <path d="M14 2v6h6"/>
    <path d="M16 13H8"/>
    <path d="M16 17H8"/>
    <path d="M10 9H8"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <path d="m9 11 3 3L22 4"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

const Home = () => {
  return (
    <div className="home">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <ZapIcon />
            <h2>FUSION</h2>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="#solutions" className="nav-link">Solutions</a>
            </li>
            <li className="nav-item">
              <a href="#resources" className="nav-link">Resources</a>
            </li>
            <li className="nav-item">
              <a href="#documentation" className="nav-link">Documentation</a>
            </li>
            <li className="nav-item">
              <a href="#support" className="nav-link">Support</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>Enterprise Data Platform</span>
            </div>
            <h1 className="hero-title">
              Transform Financial Data into <span className="highlight">Unified Intelligence</span>
            </h1>
            <p className="hero-subtitle">
              FUSION consolidates disparate financial data sources into a single, trusted client portfolio view.
              Automate your data ingestion and transformation with our enterprise-grade pipeline.
            </p>
            <div className="hero-buttons">
              <button className="btn primary">
                <span>Get Started</span>
                <ArrowRightIcon />
              </button>
              <button className="btn secondary">View Demo</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Data Formats</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Processing</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="data-flow-card">
              <div className="flow-header">
                <div className="flow-title">Data Pipeline Flow</div>
                <div className="flow-status">
                  <div className="status-dot"></div>
                  <span>Live</span>
                </div>
              </div>
              <div className="flow-content">
                <div className="source-column">
                  <div className="column-title">Sources</div>
                  <div className="file-cards">
                    <div className="file-card csv">
                      <FileIcon />
                      <span>CSV Files</span>
                    </div>
                    <div className="file-card excel">
                      <FileIcon />
                      <span>Excel Sheets</span>
                    </div>
                    <div className="file-card json">
                      <FileIcon />
                      <span>JSON APIs</span>
                    </div>
                  </div>
                </div>
                <div className="processing-column">
                  <div className="processing-arrow">
                    <ArrowRightIcon />
                  </div>
                  <div className="fusion-engine">
                    <div className="engine-glow"></div>
                    <ZapIcon />
                    <span>FUSION Engine</span>
                  </div>
                  <div className="processing-arrow">
                    <ArrowRightIcon />
                  </div>
                </div>
                <div className="output-column">
                  <div className="column-title">Output</div>
                  <div className="golden-record">
                    <CheckCircleIcon />
                    <span>Golden Record</span>
                    <div className="record-badge">Trusted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="problem-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Data Challenge</h2>
            <p className="section-subtitle">Financial institutions face complex data integration problems that impact decision-making and operational efficiency.</p>
          </div>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">
                <DatabaseIcon />
              </div>
              <h3>Multi-Format Complexity</h3>
              <p>Financial data arrives in various formats (CSV, Excel, JSON) from different providers, creating integration headaches and data silos.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">
                <ClockIcon />
              </div>
              <h3>Processing Delays</h3>
              <p>Manual transformation and consolidation of data into a trusted view consumes valuable time and delays critical insights.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">
                <ShieldIcon />
              </div>
              <h3>Data Integrity Risks</h3>
              <p>Inconsistent, messy data requires extensive cleaning and validation before it can be trusted for compliance and decision-making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="solution-section" id="solutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Intelligent Data Transformation</h2>
            <p className="section-subtitle">FUSION's automated pipeline transforms raw financial data into actionable intelligence.</p>
          </div>
          <div className="solution-steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Universal Ingestion</h3>
                <p>Seamlessly ingest data from multiple sources in various formats including CSV, Excel, APIs, and legacy systems.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Smart Transformation</h3>
                <p>AI-powered cleaning, normalization, and enrichment processes ensure data quality and consistency across all sources.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Unified Portfolio View</h3>
                <p>Consolidate all data into one trusted golden record for comprehensive portfolio analysis and reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise-Grade Features</h2>
            <p className="section-subtitle">Built for financial institutions requiring reliability, security, and performance.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FileIcon />
              </div>
              <h3>Multi-Format Support</h3>
              <p>Handle CSV, Excel, JSON, XML, and proprietary financial data formats with intelligent parsers and validators.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldIcon />
              </div>
              <h3>Enterprise Security</h3>
              <p>Bank-grade encryption, compliance frameworks, and audit trails to meet financial industry regulations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <ClockIcon />
              </div>
              <h3>Real-time Processing</h3>
              <p>Stream data through our pipeline for near real-time portfolio updates and immediate insights.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <DatabaseIcon />
              </div>
              <h3>Data Lineage</h3>
              <p>Complete visibility into data lineage and transformation history for compliance and debugging purposes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Data Infrastructure?</h2>
            <p>Join leading financial institutions using FUSION to unify their data sources and drive better decisions.</p>
            <div className="cta-buttons">
              <button className="btn primary large">
                <span>Request Demo</span>
                <ArrowRightIcon />
              </button>
              <button className="btn secondary large">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <ZapIcon />
                <span>FUSION</span>
              </div>
              <p>Unifying Financial Data Intelligence</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#solutions">Solutions</a>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#documentation">Documentation</a>
                <a href="#api">API</a>
                <a href="#blog">Blog</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <a href="#help">Help Center</a>
                <a href="#contact">Contact</a>
                <a href="#status">Status</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 FUSION. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
