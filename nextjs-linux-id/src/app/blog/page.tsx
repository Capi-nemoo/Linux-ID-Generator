import TopBar from '../components/TopBar';

export default function Blog() {
  return (
    <div className="terminal-container">
      <TopBar />
      <div className="terminal-content">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="prompt-symbol">$</span> cat blog.md
            <span className="cursor"></span>
          </div>
          
          <h1>📝 Blog</h1>
          
          <div className="blog-posts">
            <article className="blog-post">
              <h2>🚀 Building the Future of Terminal UIs</h2>
              <div className="post-meta">
                <span className="date">2024-01-15</span>
                <span className="tags">#terminal #ui #development</span>
              </div>
              <p>
                Exploring the intersection of classic terminal aesthetics and modern web development. 
                How ASCII art and TUI design principles can create engaging user experiences.
              </p>
              <a href="#" className="read-more">Read more →</a>
            </article>

            <article className="blog-post">
              <h2>🐧 Linux ID Generation: A Deep Dive</h2>
              <div className="post-meta">
                <span className="date">2024-01-10</span>
                <span className="tags">#linux #security #automation</span>
              </div>
              <p>
                Understanding the technical implementation behind automated Linux ID generation systems. 
                From algorithms to security considerations.
              </p>
              <a href="#" className="read-more">Read more →</a>
            </article>

            <article className="blog-post">
              <h2>🎨 ASCII Art in Modern Web Design</h2>
              <div className="post-meta">
                <span className="date">2024-01-05</span>
                <span className="tags">#ascii #art #design</span>
              </div>
              <p>
                How retro ASCII aesthetics are making a comeback in contemporary web design. 
                Techniques, tools, and creative applications.
              </p>
              <a href="#" className="read-more">Read more →</a>
            </article>
          </div>

          <div className="terminal-footer">
            <span className="prompt-symbol">$</span> echo "More posts coming soon..."
            <div className="cursor"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
