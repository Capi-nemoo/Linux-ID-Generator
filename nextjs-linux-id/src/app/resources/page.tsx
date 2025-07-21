import TopBar from '../components/TopBar';

export default function Resources() {
  return (
    <div className="terminal-container">
      <TopBar />
      <div className="terminal-content">
        <div className="resources-page">
          
          <div className="resources-ascii">
            <pre className="resources-title">{`
██████╗ ███████╗███████╗ ██████╗ ██╗   ██╗██████╗  ██████╗ ███████╗███████╗
██╔══██╗██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██╔════╝██╔════╝██╔════╝
██████╔╝█████╗  █████╗  ██║   ██║   ██║██████╔╝██║     █████╗  █████╗  
██╔══██╗██╔══╝  ╚════██║██║   ██║   ██║██╔══██╗██║     ██╔══╝  ╚════██║
██║  ██║███████╗███████║╚██████╗╚██████╔╝██║  ██║╚██████╗███████╗███████║
╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚══════╝╚══════╝`}</pre>
          </div>

          <div className="resources-intro">
            <pre className="intro-text">{`
 > CURATED COLLECTION OF DEVELOPMENT TOOLS AND RESOURCES

   Essential tools, libraries, and utilities for terminal enthusiasts
   Click on any resource to explore and enhance your workflow`}</pre>
          </div>
          
          <div className="resources-categories">
            <div className="resource-category">
              <div className="category-title">
                <pre>{`
██╗     ██╗███╗   ██╗██╗   ██╗██╗  ██╗    ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
██║     ██║████╗  ██║██║   ██║╚██╗██╔╝    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
██║     ██║██╔██╗ ██║██║   ██║ ╚███╔╝        ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
██║     ██║██║╚██╗██║██║   ██║ ██╔██╗        ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
███████╗██║██║ ╚████║╚██████╔╝██╔╝ ██╗       ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝`}</pre>
              </div>
              <ul className="resource-list">
                <li>
                  <a href="https://github.com/ohmyzsh/ohmyzsh" className="resource-link">
                    <span className="resource-icon">⚡</span>
                    <span className="resource-title">Oh My Zsh</span>
                    <span className="resource-desc">Framework for managing Zsh configuration</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/romkatv/powerlevel10k" className="resource-link">
                    <span className="resource-icon">🚀</span>
                    <span className="resource-title">Powerlevel10k</span>
                    <span className="resource-desc">Fast and flexible Zsh theme</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/starship/starship" className="resource-link">
                    <span className="resource-icon">⭐</span>
                    <span className="resource-title">Starship</span>
                    <span className="resource-desc">Cross-shell prompt customization</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="resource-category">
              <div className="category-title">
                <pre>{`
 █████╗ ███████╗ ██████╗██╗██╗    ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
██╔══██╗██╔════╝██╔════╝██║██║    ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
███████║███████╗██║     ██║██║    ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
██╔══██║╚════██║██║     ██║██║    ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
██║  ██║███████║╚██████╗██║██║    ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝╚═╝    ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝`}</pre>
              </div>
              <ul className="resource-list">
                <li>
                  <a href="https://github.com/patorjk/figlet.js" className="resource-link">
                    <span className="resource-icon">🔤</span>
                    <span className="resource-title">Figlet.js</span>
                    <span className="resource-desc">ASCII art text generator</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/sindresorhus/cli-boxes" className="resource-link">
                    <span className="resource-icon">📦</span>
                    <span className="resource-title">CLI Boxes</span>
                    <span className="resource-desc">Boxes for use in the terminal</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/chalk/chalk" className="resource-link">
                    <span className="resource-icon">🌈</span>
                    <span className="resource-title">Chalk</span>
                    <span className="resource-desc">Terminal string styling</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="resource-category">
              <div className="category-title">
                <pre>{`
██████╗ ███████╗██╗   ██╗    ████████╗ ██████╗  ██████╗ ██╗     ███████╗
██╔══██╗██╔════╝██║   ██║    ╚══██╔══╝██╔═══██╗██╔═══██╗██║     ██╔════╝
██║  ██║█████╗  ██║   ██║       ██║   ██║   ██║██║   ██║██║     ███████╗
██║  ██║██╔══╝  ╚██╗ ██╔╝       ██║   ██║   ██║██║   ██║██║     ╚════██║
██████╔╝███████╗ ╚████╔╝        ██║   ╚██████╔╝╚██████╔╝███████╗███████║
╚═════╝ ╚══════╝  ╚═══╝         ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝╚══════╝`}</pre>
              </div>
              <ul className="resource-list">
                <li>
                  <a href="https://github.com/neovim/neovim" className="resource-link">
                    <span className="resource-icon">📝</span>
                    <span className="resource-title">Neovim</span>
                    <span className="resource-desc">Hyperextensible Vim-based text editor</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tmux/tmux" className="resource-link">
                    <span className="resource-icon">🖥️</span>
                    <span className="resource-title">Tmux</span>
                    <span className="resource-desc">Terminal multiplexer</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/sharkdp/fd" className="resource-link">
                    <span className="resource-icon">🔍</span>
                    <span className="resource-title">fd</span>
                    <span className="resource-desc">Simple, fast alternative to find</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="resource-category">
              <div className="category-title">
                <pre>{`
██╗    ██╗███████╗██████╗     ██████╗ ███████╗██╗   ██╗
██║    ██║██╔════╝██╔══██╗    ██╔══██╗██╔════╝██║   ██║
██║ █╗ ██║█████╗  ██████╔╝    ██║  ██║█████╗  ██║   ██║
██║███╗██║██╔══╝  ██╔══██╗    ██║  ██║██╔══╝  ╚██╗ ██╔╝
╚███╔███╔╝███████╗██████╔╝    ██████╔╝███████╗ ╚████╔╝ 
 ╚══╝╚══╝ ╚══════╝╚═════╝     ╚═════╝ ╚══════╝  ╚═══╝`}</pre>
              </div>
              <ul className="resource-list">
                <li>
                  <a href="https://nextjs.org/" className="resource-link">
                    <span className="resource-icon">⚛️</span>
                    <span className="resource-title">Next.js</span>
                    <span className="resource-desc">React framework for production</span>
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="resource-link">
                    <span className="resource-icon">🎨</span>
                    <span className="resource-title">Tailwind CSS</span>
                    <span className="resource-desc">Utility-first CSS framework</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/catppuccin/catppuccin" className="resource-link">
                    <span className="resource-icon">🎭</span>
                    <span className="resource-title">Catppuccin</span>
                    <span className="resource-desc">Soothing pastel theme</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="resource-category">
              <h2>📖 Learning</h2>
              <ul className="resource-list">
                <li>
                  <a href="https://github.com/jlevy/the-art-of-command-line" className="resource-link">
                    <span className="resource-icon">🎯</span>
                    <span className="resource-title">The Art of Command Line</span>
                    <span className="resource-desc">Master the command line in one page</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/alebcay/awesome-shell" className="resource-link">
                    <span className="resource-icon">🐚</span>
                    <span className="resource-title">Awesome Shell</span>
                    <span className="resource-desc">Curated list of shell tools</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/sindresorhus/awesome-nodejs" className="resource-link">
                    <span className="resource-icon">💚</span>
                    <span className="resource-title">Awesome Node.js</span>
                    <span className="resource-desc">Delightful Node.js packages</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="terminal-footer">
            <span className="prompt-symbol">$</span> echo "Bookmark these for later!"
            <div className="cursor"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
