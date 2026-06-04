import { useState, useEffect } from 'react'
import './App.css'

// ─── Data fetching hook ───────────────────────────────────────────────────────
function useJson(path) {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(import.meta.env.BASE_URL + path.replace(/^\//, ''))
      .then(r => r.json())
      .then(setData)
      .catch(err => console.error(`Failed to load ${path}:`, err))
  }, [path])
  return data
}

// ─── Shared layout components ─────────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <p>© Owen Roe — Designed & Built by Owen Roe</p>
    </footer>
  )
}

function Header({ title, subtitle = '' }) {
  return (
    <header>
      <h1 className='title'>{title}</h1>
      {subtitle && <p className='subtitle'>{subtitle}</p>}
    </header>
  )
}

function SubHeader({ title, subtitle = '' }) {
  return (
    <div className='sub-header'>
      <h1 className='title'>{title}</h1>
      {subtitle && <p className='subtitle'>{subtitle}</p>}
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [Page, setPage] = useState(() => Home)

  function PageButton({ content, href }) {
    return (
      <button onClick={() => setPage(() => href)}>{content}</button>
    )
  }

  // ─── Home ──────────────────────────────────────────────────────────────────
  function Home() {
    return (
      <>
        <Header
          title='Owen Roe'
          subtitle='This website is a portfolio made to display my projects and demonstrate my skills.'
        />

        <div className="nav">
          <PageButton href={About} content="About Me" />
        </div>

        <main>
          <section>
            <h2>My Projects</h2>
            <ul className="link-list">
              <li><PageButton href={BigProjects} content="Big Projects" /></li>
              <li><PageButton href={Programs} content="Programming Creations" /></li>
              <li>
                <a href='https://sites.google.com/punahou.edu/owen-engineering-portfolio/home' target='_blank' rel='noreferrer'>
                  <button>Engineering Portfolio</button>
                </a>
              </li>
              <li><PageButton href={Art} content="Art Projects" /></li>
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

  // ─── About ─────────────────────────────────────────────────────────────────
  function About() {
    const data = useJson('/data/about.json')

    if (!data) return <p style={{ padding: '2rem' }}>Loading…</p>

    return (
      <>
        <Header
          title='About Me'
          subtitle='This shows some of the other things I do and enjoy.'
        />

        <div className="nav">
          <PageButton href={Home} content="← Back to Home" />
        </div>

        <main>
          <section>
            <h2>Hobbies</h2>
            {data.hobbies.map(hobby => (
              <div className="hobby" key={hobby.id}>
                <h3>{hobby.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: hobby.description }} />
              </div>
            ))}
          </section>

          <section>
            <h2>Dogs</h2>
            <p>I have two wonderful dogs, Cleo and Tucker. They inspire many of my works and help me relax after school.</p>
            <div className="dog-gallery">
              {data.dogs.map(dog => (
                <img key={dog.name} src={dog.src} alt={dog.alt} className="dog-img" />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </>
    )
  }

  // ─── Art ───────────────────────────────────────────────────────────────────
  function Art() {
    const items = useJson('/data/art.json')

    return (
      <>
        <Header
          title='Art Projects'
          subtitle="This page mainly showcases jewelry and metalwork projects I've created, but any other art pieces would also be included here."
        />

        <div className="nav">
          <PageButton href={Home} content="← Back to Home" />
        </div>

        <main>
          {!items ? (
            <p style={{ padding: '2rem' }}>Loading…</p>
          ) : (
            <div className="gallery">
              {items.map(item => (
                <div className="art-card" key={item.id}>
                  <h3>{item.title}</h3>
                  {item.images.map((img, i) => (
                    <img key={i} src={img.src} alt={img.alt} />
                  ))}
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              ))}
            </div>
          )}
        </main>

        <Footer />
      </>
    )
  }

  // ─── Programs (with sub-nav) ───────────────────────────────────────────────
  function Programs() {
    const [SubPage, setSubPage] = useState(() => GameJams)

    function SubPageButton({ content, href }) {
      return <button onClick={() => setSubPage(() => href)}>{content}</button>
    }

    return (
      <>
        <Header
          title='Coding Projects'
          subtitle="This page is dedicated to coding projects I've created in different languages and for different things. Many are games and most are half finished."
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

        <span><SubPage /></span>

        <Footer />
      </>
    )
  }

  function P5Projects() {
    const items = useJson('/data/p5projects.json')

    return (
      <>
        <SubHeader
          title='p5.js Projects'
          subtitle="These are some interactive programs I've made using the p5.js library, mostly experiments or assignments for class."
        />
        <main>
          {!items ? <p style={{ padding: '2rem' }}>Loading…</p> : (
            <div className="code-gallery">
              {items.map(item => (
                <div className="embed-card" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <iframe
                    src={item.embedSrc}
                    width={item.embedWidth}
                    height={item.embedHeight}
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          )}
        </main>
      </>
    )
  }

  function Python() {
    const items = useJson('/data/python.json')

    return (
      <>
        <SubHeader
          title='Python Programs'
          subtitle='This page contains a few Python programs I wrote. I am not very good at Python, but I might learn more in the future.'
        />
        <main>
          {!items ? <p style={{ padding: '2rem' }}>Loading…</p> : (
            <div className="code-gallery">
              {items.map(item => (
                <div className="embed-card" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <iframe
                    src={item.embedSrc}
                    width={item.embedWidth}
                    height={item.embedHeight}
                    frameBorder="0"
                    marginWidth="0"
                    marginHeight="0"
                    allowFullScreen
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          )}
        </main>
      </>
    )
  }

  function GameJams() {
    const items = useJson('/data/gamejams.json')

    return (
      <>
        <SubHeader
          title='Game Jams'
          subtitle='This page has the game jams that I participated in. I have done game jams in various software.'
        />
        <main>
          {!items ? <p style={{ padding: '2rem' }}>Loading…</p> : (
            <div className="code-gallery">
              {items.map(item => (
                <div className="embed-card" key={item.id}>
                  <h3>
                    {item.title}
                    {item.badge && <span style={{ marginLeft: '0.5rem', fontSize: '0.85em' }}>{item.badge}</span>}
                  </h3>
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  {item.links && item.links.map((link, i) => (
                    <a key={i} href={link.href} target={link.external ? '_blank' : undefined} rel='noreferrer'>
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </main>
      </>
    )
  }

  // ─── Big Projects (with sub-nav) ───────────────────────────────────────────
  function BigProjects() {
    const projects = useJson('/data/bigprojects.json')
    const [activeId, setActiveId] = useState(null)

    // Default to first project once loaded
    useEffect(() => {
      if (projects && projects.length > 0 && activeId === null) {
        setActiveId(projects[0].id)
      }
    }, [projects, activeId])

    const active = projects?.find(p => p.id === activeId)

    return (
      <>
        <Header
          title='Larger Projects'
          subtitle="This page is dedicated to some of the big projects I've dedicated a lot of time to. These are much more polished projects that I really love."
        />

        <div className='sub-nav-bg'>
          <div className="nav">
            <PageButton href={Home} content="← Back to Home" />
          </div>
          {projects && (
            <div className='sub-nav'>
              {projects.map(p => (
                <button key={p.id} onClick={() => setActiveId(p.id)}>{p.title}</button>
              ))}
              <button disabled>Coming Soon</button>
            </div>
          )}
        </div>

        {active && (
          <>
            <SubHeader title={active.title} subtitle={active.subtitle} />

            <h1 style={{ width: '100%', marginTop: '4rem', textAlign: 'center' }}>
              <a href={active.liveUrl} target='_blank' rel='noreferrer'>
                {active.title} is currently available
              </a>
            </h1>

            <main>
              <div>
                {active.sections.map((sec, i) => (
                  <section key={i}>
                    <h2>{sec.heading}</h2>
                    <p dangerouslySetInnerHTML={{ __html: sec.content }} />
                  </section>
                ))}
              </div>
            </main>
          </>
        )}

        <Footer />
      </>
    )
  }

  // ─── Render ────────────────────────────────────────────────────────────────
  return <Page />
}

export default App