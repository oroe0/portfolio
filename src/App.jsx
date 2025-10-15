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
          subtitle='This page mainly showcases jewelry and metalwork projects I’ve created, but any other art pieces would also be included here.'
        />

        <div className="nav">
          <PageButton href={Home} content="← Back to Home" />
        </div>

        <main>
          <div className="gallery">

            <div className="art-card">
              <h3>The Argent Shaker</h3>
              <img src="/portfolio/silver-bowl-prong-ring.jpeg" alt="Prong setting ring"/>
              <p>
                A thick, rounded silver lava rock ring with a loose prong setting the rock shakes when moved.
                Inspired by <a href="/portfolio/HK-inspiration.webp" target="_blank">the horns</a> visible in the final bossfight of <em>Hollow Knight</em>.
              </p>
            </div>

            <div className="art-card">
              <h3>The Sedentary Liver</h3>
              <img src="/portfolio/silver-dog-signet-ring.jpeg" alt="Silver dog signet ring"/>
              <p>
                A large silver signet ring depicting one of my dogs, Tucker, asleep.
                Made from a flat silver sheet and stained with acid for contrast.
                Highly polished and reflective — one of my favorite pieces.
              </p>
            </div>

            <div className="art-card">
              <h3>The Ethereal Ouroboros</h3>
              <img src="/portfolio/dainty-ring.jpeg" alt="Thin brass ring"/>
              <p>
                Multiple people asked me for a small dainty ring made out of brass, so I made a few.
                They don't take long to make, but they are very low quality. Brass is not a great material, unfortunately.
              </p>
            </div>

            <div className="art-card">
              <h3>The Verdant Crag</h3>
              <img src="/portfolio/leaf-band-prong-ring.jpeg" alt="Rock set in ring"/>
              <p>
                One time I decided to make my sister a birthday gift, and this is what it was.
                It contains a quartz rock from her trip to Mexico, and the band features a leaf design, as requested.
              </p>
            </div>

            <div className="art-card">
              <h3>The Clandestine Assemblage</h3>
              <img src="/portfolio/thick-band-ring.jpeg" alt="Thick brass ring"/>
              <p>
                This was an upgrade to the first simple ring I made. It uses an extra thick piece of brass.
                The outside truly was polished a lot, but the jewelry guard covers that up. The edges are not sanded.
              </p>
            </div>

            <div className="art-card">
              <h3>The Ameliorated Morsel</h3>
              <img src="/portfolio/copper-jank-inlay-ring.jpeg" alt="Brass with copper inlay ring"/>
              <p>
                I had heard about inlay rings, and I wanted to test them out, but only quickly without too much effort.
                This resulted in me using scrap metal, so the result looks really bad. Personally, I do not hate it as much as it looks bad.
              </p>
            </div>

            <div className="art-card">
              <h3>The Coral Bauble</h3>
              <img src="/portfolio/gemstone-signet-ring.jpeg" alt="Silver signet ring with pink rock"/>
              <p>
                For Christmas, I made my mother a silver signet ring with a pink gemstone bezel set on top. 
                Personally, I think this thing looks fantastic.
              </p>
            </div>

            <div className="art-card">
              <h3>The Fallen Watcher</h3>
              <img src="/portfolio/tree-bookmarkFRONT.jpeg" alt="Bent copper bookmark"/>
              <img src='/portfolio/tree-bookmarkABOVE.jpg' alt='Skeleton under a tree'/>
              <p>
                A bent copper bookmark showing a skeleton staring at a bee nest on a tree.
                Texturing plays a major role, emphasizing the depth of the shapes and the scene’s mood.
              </p>
            </div>

            <div className="art-card">
              <h3>The Trembling Shruber</h3>
              <img src="/portfolio/frog-keychain.jpeg" alt="Brass frog keychain"/>
              <p>
                A frog-shaped textured brass keychain inspired by 
                <a href="/portfolio/frog-inspiration.jpg" target="_blank"> this photo</a>.
                My very first project — and still one of the coolest to me.
              </p>
            </div>

            <div className="art-card">
              <h3>The Perpetual Perspicacity</h3>
              <img src="/portfolio/spider-castL.jpeg" alt="Bronze cast spider left view"/>
              <img src="/portfolio/spider-castR.jpeg" alt="Bronze cast spider right view"/>
              <p>
                As part of my first lost wax casting, I made a spider. Although a few limbs did not fully attach, I was able to replace them. 
                I really like how this guy turned out. 
              </p>
            </div>

            <div className="art-card">
              <h3>The Anamnestic Anamnestic</h3>
              <img src="/portfolio/tree-clockABOVE.jpeg" alt="Bronze clock falling on tree"/>
              <img src="/portfolio/tree-clockFRONT.jpeg" alt="Bronze tree stretching branches"/>
              <p>
                As part of my first lost wax casting assignment, I replicated <a href='/portfolio/dalí-clock-inspiration.jpg'>The Persistence of Memory</a> by Salvador Dalí. 
                It was supposed to be a charm to help me be more efficient with my time.
              </p>
            </div>

            <div className="art-card">
              <h3>The Exuviating Polliwog</h3>
              <img src="/portfolio/silver-frogL.jpeg" alt="Small silver frog from left view"/>
              <img src="/portfolio/silver-frogR.jpeg" alt="Small silver frog from right view"/>
              <p>
                As part of jewelry II, we had to make two additional lost wax casting, one out of soft wax, one out of hard wax. 
                This was the soft wax one and I made it for a <a href='https://edhrec.com/commanders/grolnok-the-omnivore'>MTG croak counter</a>.
              </p>
            </div>

            <div className="art-card">
              <h3>The Fathomless Ward</h3>
              <img src="/portfolio/card-holder.jpeg" alt="Brass card holder"/>
              <p>
                I wanted to make a special card holder for a <a href='https://magic.wizards.com/en/formats/commander'>MTG commander</a>, so I made this. 
                It works as intended and it is pretty nice.
              </p>
            </div>

            <div className="art-card">
              <h3>The Sterling Lagomorph</h3>
              <img src="/portfolio/silver-bunny-castL.jpeg" alt="Small silver bunny"/>
              <img src="/portfolio/silver-bunny-castSIDE.jpeg" alt="Small silver bunny"/>
              <p>
                I made a small silver cast rabbit for my sister at Christmas. She likes bunnies, so I made one for her.
              </p>
            </div>

            <div className="art-card">
              <h3>The Revolving Aureole</h3>
              <img src="/portfolio/spinning-ringOPEN.jpeg" alt="A spinning perfection of craft, in full form"/>
              <img src="/portfolio/spinning-ringREST.jpeg" alt="A spinning perfection of craft, spinning"/>
              <img src="/portfolio/spinning-ringSIT.jpeg" alt="A spinning perfection of craft, on the ground"/>
              <img src="/portfolio/spinning-ringSTAND.jpeg" alt="A spinning perfection of craft, standing"/>
              <p>
                I wanted to make this, because I thought it would be epic. I wanted to have something to play with in class, because class can be boring, and spinning rings are fun. 
                I was sort of inspired by the <a href='/portfolio/time-turner-inspiration.webp'>time turner</a> from <em>Harry Potter</em>, but I did come up with most of this on my own.
                It was my idea and my work that made it come to reality.
              </p>
            </div>

            <div className="art-card">
              <h3>The Crimson Poltroon</h3>
              <img src="/portfolio/silver-chicken-ringFRONT.jpeg" alt="Large chicken ring with ruby set, front view"/>
              <img src="/portfolio/silver-chicken-ringL.jpeg" alt="Large chicken ring with ruby set, left view"/>
              <img src="/portfolio/silver-chicken-ringR.jpeg" alt="Large chicken ring with ruby set, right view"/>
              <img src="/portfolio/silver-chicken-ringSIDE.jpeg" alt="Large chicken ring with ruby set, side view"/>
              <p>
                For my grandmother, I made a silver chicken ring with a ruby in a prong setting. She loves chickens so I made the entire ring into a chicken sitting on your finger.
                In front and behing the chicken are two roses, because they are my grandmother's favortite flower. Her birthstone is a ruby, so there is a large ruby prong set in the center of the chicken.
                This was a very fun project, and carved out of hard wax. It taught me patience and how to carve hard wax. I like the way it turned out, but many people could not recognize it as a chicken.
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
