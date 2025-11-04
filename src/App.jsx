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

  function SubHeader({ title, subtitle = '' }) {
    return (
      <>
        <div className='sub-header'>
          <h1 className='title'>{title}</h1>
          <p className='subtitle'>{subtitle}</p>
        </div>
      </>
    )
  }


  function Home() {
    return (
      <>
        <Header title='Owen Roe' 
          subtitle='This website is a portfolio made to display my projects and demonstrate my skills.'
        />
          
        <div className="nav">
          <PageButton href={About} content="About Me" />
        </div>
  
        <main>
          <section>
            <h2>My Projects</h2>
            <ul className="link-list">
              <li>
                <PageButton href={BigProjects} content="Big Projects" />
              </li>
              <li>
                <PageButton href={Programs} content="Programing Creations" />
              </li>
              <li>
                <a href='https://sites.google.com/punahou.edu/owen-engineering-portfolio/home'><button>Engineering Portfolio</button></a>
              </li>
              <li>
                <PageButton href={Art} content="Art Projects" />
              </li>
              <li>
                <span>Other Stuff:</span> <span className="text-muted">Coming soon</span>
              </li>
            </ul>
          </section>
        </main>

        <Footer />
      </>
    )
  }


  function Programs() {
    const [SubPage, setSubPage] = useState(() => GameJams)
    function SubPageButton({ content, href }) {
      return (
        <>
          <button onClick={() => setSubPage(() => href)}>{content}</button>
        </>
      )
    }

    return (
      <>
        <Header title='Coding Projects' 
          subtitle='This page is dedicated to coding projects I’ve created in different languages and for different things. Many are games and most are half finished.'
        />
  
        
        <div className='sub-nav-bg'>
          <div className="nav">
            <PageButton href={Home} content="← Back to Home" />
          </div>
          <div className='sub-nav'>
            <SubPageButton href={P5Projects} content="p5.js" />
            <SubPageButton href={Python} content="Python" />
            <SubPageButton href={GameJams} content="Game Jams" />
          </div>
        </div>
        

        <span>
          <SubPage />
        </span>
  
        <Footer />
      </>
    )
  }
  
  function P5Projects() {
    return (
      <>
        <SubHeader title='p5.js Projects' 
          subtitle='These are some interactive programs I’ve made using the p5.js library, mostly experiments or assignments for class.'
        />

        <main>
          <div className="code-gallery">
  
            <div className="embed-card">
              <h3>The Geometry Game</h3>
              <p>
                This is based on constructions you might do in geometry. This is a very good game, as it allows for lots of fun things. 
                It has an infitely large worspace, and can actually handle large numbers of points, just don't go too far with it.
                <br />
                CIRCLE TOOL: Click on one point to set the center of the circle, then click on another to set the radius. <br />
                LINE TOOL: Connect two points with a line. <br />
                REMOVE CIRCLES: Remove all the circles attached to one point. <br />
                REMOVE POINT: Delete a point, also removes all circles and lines attached to that point. <br />
                CREATE POINT: Creates a point wherever you click. <br />

                WASD to move, and have fun!
              </p>
              <iframe src="https://editor.p5js.org/oroe28/full/1BuF1XlF8" width="400" height="442"></iframe>
            </div>
  
            <div className="embed-card">
              <h3>Casino</h3>
              <p>
                I made a half finished casino game. It currently has fully functional black jack and loans. 
                You can change your bet amount, and change what kind of loans you get, but they do not have good interest rates.
                Black jack is missing a few features, such as splitting, but other than that it works wondefully.
                There are also random encounters, which can give you special rewards.
              </p>
              <iframe src="https://editor.p5js.org/oroe28/full/bcexsFo2E" width="400" height="442"></iframe>
            </div>
  
            <div className="embed-card">
              <h3>Connect Four</h3>
              <p>
                The classic connect four experience, except there is no win detection.
                I will add this soon, because I should know how to do that.
              </p>
              <iframe src="https://editor.p5js.org/oroe28/full/yvzwCrSN4" width="350" height="342"></iframe>
            </div>

            <div className='embed-card'>
              <h3>Wireframe 3D Rendering</h3>
              <p>
                This was just another attempt to render 3d objects. any object that is behind you still gets rendered because of how negative values are handled.
                This is probably better than my python versions, but it still is not good.
              </p>
              <iframe src="https://editor.p5js.org/oroe28/full/-OjU3K0fw" width="400" height="442"></iframe>
            </div>
  
          </div>
        </main>
      </>
    )
  }

  function Python() {
    return(
      <>
        <SubHeader title='Python Programs'
          subtitle='This page contains a few python programs I wrote. I am not very good at python, but I might learn more in the future.'
        />

        <main>
          <div className="code-gallery">
  
            <div className="embed-card">
              <h3>Slimer</h3>
              <p>
                This is an attempt at a 2D clone of slime rancher. I wanted to make a game where everything was a box in an array, and I think it works.
                I do believe it is very unoptimized, but that is okay. It is pretty cool I think, but a bit boring. Move with WASD, start vacuuming with V, stop with B.
              </p>
              <iframe src="https://trinket.io/embed/python/f55a8f96da76?outputOnly=true&runOption=run&showInstructions=true" width="402" height="435" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            </div>

            <div className="embed-card">
              <h3>Rendering System</h3>
              <p>
                I wanted to make a 3D rendering system, without the knowledge of the math and stuff required. 
                Because I did not know how to make it well, I tried to simplify it, and make the map 2D, but look 3D. 
                This was one of many attempts to do this, but the walls always curved and looked wierd.
                Despite how bad this looks, I believe this is the best one I made.
                <br></br>
                Move with WASD, look with arrow keys.
              </p>
              <iframe src="https://trinket.io/embed/python/e5137b465e?outputOnly=true&runOption=run&showInstructions=true" width="402" height="435" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            </div>

            <div className="embed-card">
              <h3>Array Testing</h3>
              <p>
                I wanted to find a way to make a bunch of words out of letters and was playing around with arrays. It did not end up working.
                The program is way too slow and thus cannot get to 5 letter words.
              </p>
              <iframe src="https://trinket.io/embed/python/1d9d939cc790?toggleCode=true&runOption=run&showInstructions=true" width="402" height="435" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            </div>

            <div className="embed-card">
              <h3>Dungeon Maker</h3>
              <p>
                This is a dungeon genertator that I made, but it does not work well, in fact, it goes on forever. Best not to run it I think.
                It was fun to make, and I love the concept, but it goes over itself and because it repeats forever, it just is no fun.
              </p>
              <iframe src="https://trinket.io/embed/python/e08f9eee622a?outputOnly=true&runOption=run&showInstructions=true" width="402" height="435" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            </div>

          </div>
        </main>
      </>
    )
  }

  function GameJams() {
    return(
      <>
        <SubHeader title='Game Jams'
          subtitle='This page has the game jams that I particpated in. I have done game jams in various softwares. '
        />

        <main>
          <div className="code-gallery">
            <div className='embed-card'>
              <h3>High School Game Jam</h3>
              <p>
                This was the first game jam that I ever did. Our team made the project in Unity, but we had some issues with the submission. 
                In the end, it was fine and I learned a lot from this experience. It taught me how to be a better programmer and how to work under pressure. 
                I knew that I would be unable to make the project as well as I wanted, but it was okay. We ended up with a gameboard type game that was not too bad.
                We uploaded the project to itch <a href='https://lbaldwin26.itch.io/minute-party' target='_blank'>here</a>.
              </p>
            </div>

            <div className='embed-card'>
              <h3>Ultimate Mini Golf Game Jam</h3>
              <p>
                This was a fun game jam I did using 8th Wall. I had very little experience with 8th Wall in the past, so this allowed me to truly understand how to use it and helped improve my skills a lot.
                We made two minigolf holes for this game jam, one was more professional, and one was all about the theming. It was quite enjoyable. 
                You can play both at <a href='https://neals.8thwall.app/golf-for-money' target='_blank'>this website</a>.
                The first 2 holes were not created by us, but the last 2 were.
              </p>
            </div>

            <div className='embed-card'>
              <h3>Garfield Goobers</h3>
              <p>
                The 'Enehana Computer Science Club ran a game jam. For our game, we made a platformer where you have to avoid cannon balls and spike as a beach ball to collect a key. 
                If you can survive to unlock the treasure chest, then you become a rocket, and must avoid the octo-guards in the cave blocking the ending.
                You can play the game at <a href='https://8th.io/46krt' target='_blank'>this website</a>.
                The slideshow we presented is attached <a  href='/portfolio/garfield-goobers.pdf' target='_blank'>here</a>.
                <br />
                Our team was the Garfield Goobers and we won first place in this game jam.
              </p>

            </div>
          </div>
        </main>
      </>
    )
  }


  function BigProjects() {
    const [SubPage, setSubPage] = useState(() => MTOT)
    function SubPageButton({ content, href }) {
      return (
        <>
          <button onClick={() => setSubPage(() => href)}>{content}</button>
        </>
      )
    }


    return (
      <>
        <Header title='Larger Projects' 
          subtitle='This page is dedicated to some of the big projects I’ve dedicated a lot of time to. These are much more polished projects that I really love.'
        />

        <div className='sub-nav-bg'>
          <div className="nav">
            <PageButton href={Home} content="← Back to Home" />
          </div>
          <div className='sub-nav'>
            <SubPageButton href={MTOT} content="The Mock Trial Online Trainer" />
            <button>Coming Soon</button>
          </div>
        </div>
        

        <span>
          <SubPage />
        </span>
  
        <Footer />

      </>
    )
  }

  function MTOT() {
    return (
      <>
        <SubHeader title="The Mock Trial Online Trainer" 
          subtitle='The Mock Trial Online Trainer (MTOT) was a project I worked on for a long time, and it turned out very nice.' 
        />
        
        <h1 style={{width: "100%", marginTop: "4rem", textAlign: "center"}}><a href='https://mtot-five.vercel.app' target='_blank'>The MTOT is currently available</a></h1>
        

        <main>
          <div>
            <section>
              <h2>Learning</h2>
              <p>
                From the MTOT, I learned a lot about app creation. 
                I learned how to use API calls and manage API keys, because I implemented multiple other tools into the MTOT. 
                These tools included authentication with <a href='https://firebase.google.com/'>Google Firebase</a>, data storage with <a href='https://www.mongodb.com/'>MongoDB</a>, and AI responses with <a href='>https://groq.com/'>Groq</a>. 
                In addition to these tools, I had to host the website. 
                Because the MTOT uses API calls, it is not a static site, so it cannot be hosted on GitHub pages, which was the main way I hosted my websites in the past. 
                In order to host the MTOT, I used <a href='https://vercel.com/'>Vercel</a>, which is a free web hosting server.
              </p>
            </section>

            <section>
              <h2>Challenges</h2>
              <p>
                I faced many challenges while creating this app, but I was able to persevere 
              </p>
            </section>
          </div>
          <div>
            <section>
              <h2>Reasons for the MTOT</h2>
              <p>
                I wanted to make this app for many different reasons, but mainly to help my club. 
                When I created the MTOT, I was a captain of the Punahou Mock Trial team, and I saw that our team had a lack of resources for improving their skills. 
                It is for this reason that I made the MTOT, to help our team improve and win states. I saw the key issues that we were struggling with, and made sure that they were incorporated into the app.
              </p>
            </section>
            <section>
              <h2>Submissions</h2>
              <p>
                I submitted the MTOT to multiple different competitions, including the Congressional App Challenge and the National STEM Festival. 
                I originally designed the MTOT just to have fun, to learn, and to help my club, but I realized that with this very polished app, it would be a great opportunity to submit it into many different competitions. 
                h
              </p>

            </section>
          </div>
          
          

        </main>
      </>
    )
  }


  function About() {
    return (
      <>
        <Header title='About Me' 
          subtitle='This shows some of the other things I do and enjoy.'
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
                I can code in Python, JavaScript, and React. I am working on many projects and am always trying to get better at coding.
              </p>
            </div>
  
            <div className="hobby">
              <h3>Games</h3>
              <p>
                I love playing video games like <em>Hollow Knight</em> and <em>Silksong</em>. However, I don't usually have time to play them.
              </p>
            </div>
  
            <div className="hobby">
              <h3>Jewelry</h3>
              <p>
                I make jewelry and metalwork, often trying to make more practical things. I also love little mechanical creations, hinges and stuff.
              </p>
            </div>

            <div className='hobby'>
              <h3>MTG</h3>
              <p>
                I love to play Magic: The Gathering and I have a large collection. I enjoy commander the most, because it is the easiest format for me.
              </p>
            </div>
          </section>
  
          <section>
            <h2>Dogs</h2>
            <p>I have two wonderful dogs, Cleo and Tucker. They inspire many of my works and help me relax after school.</p>
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
              <h3>The Anamnestic Arbol</h3>
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
                I wanted to make a special card holder for a <a href='https://magic.wizards.com/en/formats/commander' target="_blank">MTG commander</a>, so I made this. 
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
                I was sort of inspired by the <a href='/portfolio/time-turner-inspiration.webp' target="_blank">time turner</a> from <em>Harry Potter</em>, but I did come up with most of this on my own.
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
              <h3>Placeholder card</h3>
              <p>
                A small command-line game where you navigate a haunted mansion, 
                collect items, and escape through hidden passages.
              </p>
              <a href="https://github.com/yourusername/text-adventure" target="_blank">
                View
              </a>
            </div>
  
            <div className="art-card">
              <h3>Placeholder</h3>
              <p>
                A simple calculator app built in Java with Swing. 
                Supports basic operations and a clean, minimal UI.
              </p>
              <a href="https://github.com/yourusername/java-calculator" target="_blank">
                View Code
              </a>
            </div>
  
            <div className="art-card">
              <h3>Why are you still here?</h3>
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
