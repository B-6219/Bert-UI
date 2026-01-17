// src/pages/index.jsx
import { Link } from 'bertui/router';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home-container">
      <nav className="home-nav">
        <h2 className="home-logo">⚡ BertUI</h2>
        <div className="home-nav-links">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/server-islands" className="nav-link">Server Islands</Link>
        </div>
      </nav>

      <main className="home-main">
        <h1 className="home-title">
          Build Lightning-Fast
          <br />
          React Apps with BertUI
        </h1>

        <p className="home-subtitle">
          <strong>Bun + Elysia + React + Template + User Interface</strong>
          <br />
          494ms dev server • 265ms builds • Perfect SEO with Server Islands
        </p>

        <div className="home-cta">
          <Link to="/server-islands" className="btn btn-primary">
            Get Started →
          </Link>
          <Link to="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>

        <div className="home-features">
          <FeatureCard 
            icon="⚡"
            title="Lightning Fast"
            description="494ms dev server startup and 30ms HMR updates."
          />
          <FeatureCard 
            icon="📁"
            title="File-Based Routing"
            description="Create pages/about.jsx and get /about route automatically."
          />
          <FeatureCard 
            icon="🏝️"
            title="Server Islands"
            description="Add one line, get static HTML. Perfect SEO without complexity."
          />
        </div>

        <div className="home-stack">
          <h2>What is BertUI?</h2>
          <p><strong>B</strong>un - Fastest JavaScript runtime</p>
          <p><strong>E</strong>lysia - Lightning web framework</p>
          <p><strong>R</strong>eact - UI library (98% of BertUI is React!)</p>
          <p><strong>T</strong>emplate - This starter you're using</p>
          <p><strong>UI</strong> - Beautiful user interfaces</p>
        </div>

        <div className="home-start">
          <h2>Ready to build?</h2>
          <code className="home-start-code">bunx create-bertui my-app</code>
          <p>
            Full docs: <a href="https://bertui-docswebsite.vercel.app/" target="_blank" rel="noopener">bertui-docswebsite.vercel.app</a>
          </p>
        </div>
      </main>

      <footer className="home-footer">
        <p>Built with BertUI v1.1.0 • Created by Pease Ernest</p>
        <p>
          <a href="https://github.com/BunElysiaReact/BERTUI" target="_blank" rel="noopener">GitHub</a> • 
          <a href="https://bertui-docswebsite.vercel.app/" target="_blank" rel="noopener">Docs</a>
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}