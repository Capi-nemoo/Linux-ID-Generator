import TopBar from './components/TopBar';

export default function Home() {
  return (
    <div className="terminal-container">
      <TopBar />
      <div className="terminal-content">
        <div className="home-page">
          
          <div className="welcome-ascii">
            <pre className="welcome-title">{`
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝`}</pre>
          </div>

          <div className="intro-section">
            <pre className="intro-text">{`
 > PERSONAL SPACE FOR PROJECTS, ART, AND MORE

   This terminal interface showcases my digital portfolio
   Navigate through directories to explore different sections`}</pre>
          </div>

          <div className="directories-section">
            <div className="section-title">
              <pre>{`
██████╗ ██╗██████╗ ███████╗ ██████╗████████╗ ██████╗ ██████╗ ██╗███████╗███████╗
██╔══██╗██║██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██║██╔════╝██╔════╝
██║  ██║██║██████╔╝█████╗  ██║        ██║   ██║   ██║██████╔╝██║█████╗  ███████╗
██║  ██║██║██╔══██╗██╔══╝  ██║        ██║   ██║   ██║██╔══██╗██║██╔══╝  ╚════██║
██████╔╝██║██║  ██║███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║██║███████╗███████║
╚═════╝ ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝`}</pre>
            </div>
            
            <div className="directory-list">
              <pre>{`
   [📁] linux-id/        Generate your own Linux ID card!
   [📁] art/             My digital and traditional artworks
   [📁] media/           Gallery of favorite photos and moments
   [📁] manifestos/      Thoughts, philosophies, and manifestos
   [📄] about.txt        Learn more about me and this site
   [📄] contact.txt      Get in touch with me`}</pre>
            </div>
          </div>

          <div className="status-section">
            <div className="status-title">
              <pre>{`
███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗    ███████╗████████╗ █████╗ ████████╗██╗   ██╗███████╗
██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║    ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██║   ██║██╔════╝
███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║    ███████╗   ██║   ███████║   ██║   ██║   ██║███████╗
╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║    ╚════██║   ██║   ██╔══██║   ██║   ██║   ██║╚════██║
███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║    ███████║   ██║   ██║  ██║   ██║   ╚██████╔╝███████║
╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝`}</pre>
            </div>
            
            <div className="status-info">
              <pre>{`
   SERVER    ████████████████████████ ONLINE
   UPTIME    ████████████████████████ 99.9%
   LOAD      ████████████░░░░░░░░░░░░ LOW
   MEMORY    ████████████████░░░░░░░░ 67%
   
   LAST UPDATED: ${new Date().toLocaleString()}`}</pre>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
