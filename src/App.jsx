import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [Page, setPage] = useState(() => Home)


  function PageButton({ content, href }) {
    return (
      <>
        <button onClick={() => setPage(() => href)}>{content}</button>
      </>
    )
  }

  function Home() {
    return (
      <>
        <header>
          <h1>owen roe</h1>
          <p>
            This is a test site, as I am learning. Learn more about my work and me below.
          </p>
        </header>
        <main>
          <div className="center-box">
            <h2>my things</h2>
            <ul>
              <li>
                programs: <PageButton href={Programs} content={"click"}/>
              </li>
              <p></p>
              <li>
                art: <PageButton href={Art} content={"click"}/>
              </li>
              <p></p>
              <li>
                other: <PageButton href={Other} content={"click"}/>
              </li>
            </ul>
          </div>
        </main>
        <footer>
          <p>
            Learn more about me: <PageButton href={About} content={"click"}/>
          </p>
          <p>This was made by Owen Roe for Owen Roe</p>
        </footer>
      </>
    )
  }

  function Programs() {
    return (
      <>
        <header>
          <h1>coding projects i've made</h1>
          <p>
            This page is dedicated to coding projects I have created in many different languages.
            Most of these are games, and most of them are half finished.
          </p>
        </header>
        <main>
          <div className="center-box">
            <ul>
              <p>
                <strong>¡WARNING!</strong> each link below opens multiple embedded projects,
                so if you have a bad computer, it may crash if the page is open for too long.
              </p>
              <li>
                p5.js: <PageButton href={P5Projects} content={"click"}/>
              </li>
              <p></p>
              <li>
                python: <a href="python.html">click</a>
              </li>
              <p></p>
              <li>
                other: <a></a>
              </li>
            </ul>
          </div>
        </main>
        <footer>
          <h4>
            Return to the home page: <PageButton href={Home} content={"click"}/>
          </h4>
          <p>This was made by Owen Roe for Owen Roe</p>
        </footer>
      </>
    )
  }
  
  function P5Projects() {
    return (
      <>
        <header>
          <h1>coding projects i've made in js</h1>
          <p>
            This page is to show projects I made in p5.js.
            I learned this after I began taking a course.
            Later I quit this course, but continued to learn.
            I made a few projects, not really following what I was supposed to be doing in the class.
            They are in no real order.
          </p>
        </header>
        <main>
          <div className="center-box">
            <section>
              <h2>personal projects</h2>
  
              <h3>the casino</h3>
              <iframe
                className="embed"
                src="https://editor.p5js.org/oroe28/full/bcexsFo2E"
              ></iframe>
              <p>
                This is probably one of my favorite games I have made.
                It is a casino, though currently it only has one game, blackjack.
                You can take out outrageous loans, pay them back, win money, randomly encounter people, and more.
                There is a small debug menu, and you can type.
                There are multiple softlocks right now, first, playing cave dice. There is no way to win or lose, so it goes on forever.
                Second, encountering Derek the Violent Vendor, also known as Derek the Dealer.
                I will fix these soon.
              </p>
  
              <h3>the chessboard</h3>
              <iframe
                style={{ width: '450px', height: '492px' }}
                src="https://editor.p5js.org/oroe28/full/stjDbBcDg"
              ></iframe>
              <p>
                This is what you would expect, just a chessboard.
                The pieces are all accounted for and have a way to render them at any square.
                The pieces, however, cannot move, so it is entirely non-functional.
              </p>
  
              <h3>the connect four board</h3>
              <iframe
                style={{ width: '350px', height: '342px' }}
                src="https://editor.p5js.org/oroe28/full/yvzwCrSN4"
              ></iframe>
              <p>
                This is probably the closest to a finished game I have, even though it is really unpolished and bad.
                The placing rules are all set, and it alternates who places each token.
                It is unable to detect a victory, and the game will never end until every space is filled up.
                It is basically a very unpolished game.
              </p>
  
              <h3>a bad wireframe renderer</h3>
              <iframe
                style={{ width: '500px', height: '542px' }}
                src="https://editor.p5js.org/oroe28/full/-OjU3K0fw"
              ></iframe>
              <p>
                This is a renderer I made one night because I thought this one would be different.
                It was another bad attempt, as when objects go behind you, they continue to render.
                I like the wireframe way this is made, but I wish you could actually move side to side,
                instead of the way it currently works.
              </p>
            </section>
  
            <section>
              <h2>school projects</h2>
  
              <h3>starry night</h3>
              <iframe
                className="embed"
                src="https://editor.p5js.org/oroe28/full/kzyrWPjI3"
              ></iframe>
              <p>
                This is one of my favorite projects, mainly because of the night sky.
                The daytime is cool I guess, but I don't really care about that too much.
                Also because the day time could have been coded by my dog.
                It is not difficult.
              </p>
  
              <h3>fading colors</h3>
              <iframe
                className="embed"
                src="https://editor.p5js.org/oroe28/full/ofwZmZPjL"
              ></iframe>
              <p>
                This is a simple, yet complex color changing screen.
                I really like this, because it forced me to learn specific details about how arrays work in JS.
                It is also just pretty cool in my opinion.
              </p>
  
              <h3>corrupted vision</h3>
              <iframe
                className="embed"
                src="https://editor.p5js.org/oroe28/full/ZMSNOUSs_"
              ></iframe>
              <p>
                This is a project I made with a partner, so he told me a lot of what he wanted to do.
                The shape colors change depending on the mouse position, some of them move, and the whole thing runs slowly.
              </p>
  
              <h3>stormy night</h3>
              <iframe
                className="embed"
                src="https://editor.p5js.org/oroe28/full/KN5_JqHGW"
              ></iframe>
              <p>
                This was version two of a project I had to make.
                We were supposed to make a cloud float across the sky and have trees growing like I did.
                I forgot to make the trees grow or to submit the assignment,
                so I quickly duplicated my past assignment, added trees, and turned it in.
                The storm isn't great, especially the first part where you can see the cloud, but I think it still looks cool.
              </p>
  
              <h3>a regular day</h3>
              <iframe
                style={{ width: '600px', height: '442px' }}
                src="https://editor.p5js.org/oroe28/full/4BuGTCXUu"
              ></iframe>
              <p>
                In this project we were supposed to make a backdrop and use emojis.
                I skipped ahead and added clouds, and also made it so the monkey could hide in the forest.
                I like this one, though it is very simple. It is calming.
              </p>
  
              <h3>staring cat</h3>
              <iframe
                className="embed"
                src="https://editor.p5js.org/oroe28/full/VOYJhCakQ"
              ></iframe>
              <p>
                This is an improved version of the first project I ever made in JS.
                It is very simple, with a cat staring at you and moving its tail.
                My teacher thought I cheated and used ChatGPT or something on this, but I did not.
              </p>
  
              <h3>colorful shapes</h3>
              <iframe
                className="embed"
                src="https://editor.p5js.org/oroe28/full/o-MyYCFhG"
              ></iframe>
              <p>
                This was just some project we did to get us to use variables.
                It was also with a partner, and he wanted me to make it flash, so I did that.
              </p>
            </section>
          </div>
        </main>
        <footer>
          <h4>
            Return to the coding page: <PageButton href={Programs} content={"click"}/>
          </h4>
          <h4>
            Return to the home page: <PageButton href={Home} content={"click"}/>
          </h4>
          <p>This was made by Owen Roe for Owen Roe</p>
        </footer>
      </>
    )
  }

  function About() {
    return (
      <>
        <header>
          <h1>about me</h1>
          <p>
            This is part of a test site as I am learning HTML and CSS.
            I enjoy exploring new technologies.
          </p>
        </header>
        <main>
          <div className="center-box">
            <h2>a few hobbies</h2>
            <ul>
              <li>coding</li>
              <p>
                I am able to code in Python (at least an old version) and JavaScript,
                I have limited C# and HTML knowledge.
              </p>
              <li>reading</li>
              <p>
                I like to read many books, but I have not read them all yet.
              </p>
              <li>games</li>
              <p>
                I am a fan of many videogames such as Hollow Knight and Dead Cells.
                I would not say I am good at them, however.
              </p>
              <li>jewlery</li>
              <p>
                I like to make jewlery, and have large plans for future projects.
              </p>
            </ul>
            <h2>dogs</h2>
            <p>
              I have two dogs, I love them very much. Their names are Cleo and Tucker.
            </p>
            <img src="cleo.jpeg" alt="cleo" />
            <img src="tucker.jpeg" alt="tucker" />
          </div>
        </main>
        <footer>
          <h4>
            Return to the home page: <PageButton href={Home} content={"click"}/>
          </h4>
          <p>This was made by Owen Roe for Owen Roe</p>
        </footer>
      </>
    )
  }

  function Art() {
    return (
      <>
        <header>
          <h1>art projects i've made</h1>
          <p>
            This is mostly to show off the jewelry and metalwork projects I made.
            There may be other products displayed, however.
          </p>
        </header>
        <main>
          <div className="center-box">
            <h3>the argent shaker</h3>
            <img src="/portfolio/silver-bowl-prong-ring.jpeg" alt="prong setting ring" />
            <p>
              This is a thick rounded disconnected textured silver lava rock bowl split prong setting ring.
              Its name comes from the fact that the prong setting is not tight, and the rock moves when shaken.
              It is not tight, because the rock is fragile and breaks when you try to tighten it.
              Argent just means silver, and I think this is a pretty good ring, though not the best I've made.
              The bottom design was taken from{" "}
              <a href="/portfolio/HK-inspiration.webp" target="_blank">
                the horns visible in the final bossfight of Hollow Knight
              </a>.
            </p>
  
            <h3>the sedentary liver</h3>
            <img src="/portfolio/silver-dog-signet-ring.jpeg" alt="signet ring" />
            <p>
              This is a large silver signet ring.
              This is one of my favorite pieces I have made, as it appears nearly flawless.
              It is a regular signet ring, which means it was made from a flat metal sheet, not wax.
              The plate depicts one of my dogs, Tucker, laying on his side asleep.
              It is black because it was stained with acid.
              It is polished highly and is very reflective, which I like. I wore it to my first ever mock trial competition.
            </p>
  
            <h3>the fallen watcher</h3>
            <img src="/portfolio/tree-bookmark.jpeg" alt="bent copper bookmark" />
            <p>
              This is a bent copper bookmark that shows a skeleton with a cape staring at a bee nest on a tree.
              There are many details I like on this piece from the bird up above to the fallen crown in the grass.
              The texturing was really highlighted here, and really took over, more than the shapes could convey.
            </p>
  
            <h3>the plant swinger</h3>
            <img src="/portfolio/frog-keychain.jpeg" alt="brass frog keychain" />
            <p>
              This is a frog-shaped textured brass keychain.
              The frog is supposed to be shown hanging off of the branch, resembling{" "}
              <a href="/portfolio/frog-inspiration.jpg" target="_blank">this photo</a>.
              This was the first thing I ever made, and I think it is very cool.
            </p>
          </div>
        </main>
        <footer>
          <h4>
            Return to the home page: <PageButton href={Home} content={"click"}/>
          </h4>
          <p>This was made by Owen Roe for Owen Roe</p>
        </footer>
      </>
    )
  }

  function Other() {
    return (
      <>
        <h1>other projects i've made</h1>
        <h4>
          Return to the home page: <PageButton href={Home} content={"click"}/>
        </h4>
        <p>This was made by Owen Roe for Owen Roe</p>
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
