import { useState } from 'react'
import './App.css'

function App() {

  const [Page, setPage] = useState(() => Home)


  function PageButton({ content, href }) {
    return (
      <>
        <button onClick={() => setPage(() => href)}>{content}</button>
      </>
    )
  }

  function Footer() {
    return (
      <>
        <footer>
          <p>© Owen Roe — Designed & Built by Owen Roe</p>
        </footer>
      </>
    )
  }

  function Header({ title, subtitle = '' }) {
    return (
      <>
        <header>
          <h1 className='title'>{title}</h1>
          <p className='subtitle'>{subtitle}</p>
        </header>
      </>
    )
  }


  function Home() {
    return (
      <>
        <Header title='Owen Roe' 
          subtitle='This is a test site, as I am learning. Learn more about my work and me below.'
        />
          
        <div className="nav">
          <PageButton href={About} content="About Me" />
        </div>
  
        <main>
          <section>
            <h2>My Projects</h2>
            <ul className="link-list">
              <li>
                <span>Programs:</span> <PageButton href={Programs} content="Click" />
              </li>
              <li>
                <span>Art:</span> <PageButton href={Art} content="Click" />
              </li>
              <li>
                <span>Other:</span> <PageButton href={Other} content="Click" />
              </li>
            </ul>
          </section>
        </main>

        <Footer />
      </>
    )
  }

  function Programs() {
    return (
      <>
        <Header title='Coding Projects' 
          subtitle='This page is dedicated to coding projects I’ve created in different languages. Many are games and most are half finished.'
        />
  
        <div className="nav">
          <PageButton href={Home} content="← Back to Home" />
        </div>
  
        <main>
          <section>
            <h2>Different Languages</h2>
  
            <ul className="link-list">
              <li>
                p5.js: <PageButton href={P5Projects} content="Click" />
              </li>
              <li>
                Python: <a href="python.html" className="text-link">Click</a>
              </li>
              <li>
                Other: <span className="text-muted">Coming soon</span>
              </li>
            </ul>
          </section>
        </main>
  
        <Footer />
      </>
    )
  }
  
  function P5Projects() {
    return (
      <>
        <Header title='p5.js Projects' 
          subtitle='These are some interactive programs I’ve made using the p5.js library, mostly experiments or assignments for class.'
        />
  
        <div className="nav">
          <PageButton href={Home} content="← Back to Home" />
        </div>

        <div className="nav">
          <PageButton href={Programs} content="← Back to Coding Projects" />
        </div>
  
        <main>
          <div className="gallery">
  
            <div className="art-card">
              <h3 className="art-title">The Floating Line</h3>
              <p>
                A line that moves like a wave, constantly shifting shape and amplitude.
                A simple introduction to sine motion and noise-driven randomness.
              </p>
              <iframe
                src="/portfolio/floating-line.html"
                title="Floating Line"
                className="embed-preview"
              />
            </div>
  
            <div className="art-card">
              <h3 className="art-title">Rainbow Runner</h3>
              <p>
                A colorful trail that follows the mouse, fading and morphing over time.
                Focuses on gradual transparency and continuous drawing.
              </p>
              <iframe
                src="/portfolio/rainbow-runner.html"
                title="Rainbow Runner"
                className="embed-preview"
              />
            </div>
  
            <div className="art-card">
              <h3 className="art-title">Gravity Drop</h3>
              <p>
                A physics-based simulation of falling circles affected by gravity and collision.
                It’s chaotic — but strangely satisfying.
              </p>
              <iframe
                src="/portfolio/gravity-drop.html"
                title="Gravity Drop"
                className="embed-preview"
              />
            </div>
  
          </div>
        </main>
  
        <Footer />
      </>
    )
  }

  function About() {
    return (
      <>
        <Header title='About Me' 
          subtitle='This website is a portfolio made to display my projects and demonstrate my skills.'
        />
  
        <div className="nav">
          <PageButton href={Home} content="← Back to Home" />
        </div>
  
        <main>
          <section>
            <h2>Hobbies</h2>
  
            <div className="hobby">
              <h3>Coding</h3>
              <p>
                I can code in Python and JavaScript, and I’m learning C# and HTML.
                I love building small projects, even when they don’t always work perfectly.
              </p>
            </div>
  
            <div className="hobby">
              <h3>Reading</h3>
              <p>
                I enjoy reading across genres — though I’ll admit, I haven’t finished every book I’ve started.
              </p>
            </div>
  
            <div className="hobby">
              <h3>Games</h3>
              <p>
                I love playing games like <em>Hollow Knight</em> and <em>Silksong</em>.
                I’m not great at them, but I love their design and atmosphere.
              </p>
            </div>
  
            <div className="hobby">
              <h3>Jewelry</h3>
              <p>
                I make jewelry and metalwork, often combining natural textures and personal symbolism.
              </p>
            </div>
          </section>
  
          <section>
            <h2>Dogs</h2>
            <p>I have two wonderful dogs — Cleo and Tucker. They inspire many of my works.</p>
            <div className="dog-gallery">
              <img src="/portfolio/cleo.jpeg" alt="Cleo" className="dog-img" />
              <img src="/portfolio/tucker.jpeg" alt="Tucker" className="dog-img" />
            </div>
          </section>
        </main>
  
        <Footer />
      </>
    )
  }

  function Art() {
    return (
      <>
        <Header title='Art Projects' 
          subtitle='This page showcases jewelry and metalwork projects I’ve created, with a few other art pieces included.'
        />

        <div className="nav">
          <PageButton href={Home} content="← Back to Home" />
        </div>

        <main>
          <div className="gallery">

            <div className="art-card">
              <h3>The Argent Shaker</h3>
              <img src="/portfolio/silver-bowl-prong-ring.jpeg" alt="Prong setting ring" className="art-img" />
              <p>
                A thick, rounded silver lava rock ring with a loose prong setting — the rock moves when shaken.
                Inspired by the horns visible in the final bossfight of <em>Hollow Knight</em>.
                <br />
                <a href="/portfolio/HK-inspiration.webp" target="_blank">View inspiration</a>
              </p>
            </div>

            <div className="art-card">
              <h3>The Sedentary Liver</h3>
              <img src="/portfolio/silver-dog-signet-ring.jpeg" alt="Silver dog signet ring" className="art-img" />
              <p>
                A large silver signet ring depicting one of my dogs, Tucker, asleep.
                Made from a flat silver sheet and stained with acid for contrast.
                Highly polished and reflective — one of my favorite pieces.
              </p>
            </div>

            <div className="art-card">
              <h3>The Fallen Watcher</h3>
              <img src="/portfolio/tree-bookmark.jpeg" alt="Bent copper bookmark" className="art-img" />
              <p>
                A bent copper bookmark showing a skeleton staring at a bee nest on a tree.
                Texturing plays a major role, emphasizing the depth of the shapes and the scene’s mood.
              </p>
            </div>

            <div className="art-card">
              <h3>The Plant Swinger</h3>
              <img src="/portfolio/frog-keychain.jpeg" alt="Brass frog keychain" className="art-img" />
              <p>
                A frog-shaped textured brass keychain inspired by 
                <a href="/portfolio/frog-inspiration.jpg" target="_blank"> this photo</a>.
                My very first project — and still one of the coolest to me.
              </p>
            </div>

          </div>
        </main>

        <Footer />
      </>
    )
  }
  
  function Other() {
    return (
      <>
        <Header title='Other Stuff' 
          subtitle='A collection of smaller or experimental projects that don’t fit into my main categories — but still deserve a place here.'
        />
  
        <div className="nav">
          <PageButton href={Home} content="← Back to Home" />
        </div>
  
        <main>
          <div className="gallery">
  
            <div className="art-card">
              <h3>Python Text Adventure</h3>
              <p>
                A small command-line game where you navigate a haunted mansion, 
                collect items, and escape through hidden passages.
              </p>
              <a href="https://github.com/yourusername/text-adventure" target="_blank">
                View Code
              </a>
            </div>
  
            <div className="art-card">
              <h3>Java Calculator</h3>
              <p>
                A simple calculator app built in Java with Swing. 
                Supports basic operations and a clean, minimal UI.
              </p>
              <a href="https://github.com/yourusername/java-calculator" target="_blank">
                View Code
              </a>
            </div>
  
            <div className="art-card">
              <h3>Pixel Pattern Generator</h3>
              <p>
                A mini tool that generates random pixel patterns using RGB noise. 
                It’s oddly mesmerizing to watch in action.
              </p>
              <iframe
                src="https://google.com"
                title="Pixel Pattern Generator"
                className="embed-preview"
              />
            </div>
  
          </div>
        </main>
  
        <Footer />
      </>
    )
  }
  
  
  
  

  return (
    <>
      <Page />
    </>
  )
}

export default App
