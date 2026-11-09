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

// ─── Sidebar Layout ───────────────────────────────────────────────────────────
// items:        flat array of { id, title, ... }
// groups:       optional [{ label, ids[] }] — renders section headings in the list
// renderDetail: fn(item) => JSX shown in the right panel
// thumbFn:      optional fn(item) => image src for the thumbnail
function SidebarLayout({ items, groups, renderDetail, thumbFn, sidebarClass = '', detailClass = '' }) {
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    if (items && items.length > 0) setSelectedId(items[0].id)
  }, [items])

  if (!items) return <p className="loading">Loading…</p>

  const selected   = items.find(it => it.id === selectedId)
  const byId       = Object.fromEntries(items.map(it => [it.id, it]))

  function SidebarItem({ item }) {
    return (
      <button
        className={`sidebar__item ${selectedId === item.id ? 'sidebar__item--active' : ''}`}
        onClick={() => setSelectedId(item.id)}
      >
        {thumbFn && (
          <img className="sidebar__thumb" src={thumbFn(item)} alt={item.title} />
        )}
        <span className="sidebar__label">
          {item.title}
          {item.badge && <span className="sidebar__badge">{item.badge}</span>}
        </span>
      </button>
    )
  }

  return (
    <div className="sidebar-layout">
      <aside className={`sidebar ${sidebarClass}`}>
        {groups
          ? groups.map(group => (
              <div key={group.label} className="sidebar__group">
                <div className="sidebar__group-label">{group.label}</div>
                {group.ids.map(id => byId[id] && <SidebarItem key={id} item={byId[id]} />)}
              </div>
            ))
          : items.map(item => <SidebarItem key={item.id} item={item} />)
        }
      </aside>

      <section className={`detail-panel ${detailClass}`}>
        {selected ? renderDetail(selected) : <p className="loading">Select an item</p>}
      </section>
    </div>
  )
}

// ─── Nav Bar ─────────────────────────────────────────────────────────────────
function NavBar({ current, setPage, pages }) {
  return (
    <nav className="navbar">
      <span className="navbar__logo" onClick={() => setPage('Home')}>Owen Roe</span>
      <div className="navbar__tabs">
        {pages.map(p => (
          <button
            key={p.id}
            className={`navbar__tab ${current === p.id ? 'navbar__tab--active' : ''}`}
            onClick={() => p.href ? window.open(p.href, '_blank') : setPage(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState('Home')

  const NAV_PAGES = [
    { id: 'Home',        label: 'Home' },
    { id: 'BigProjects', label: 'Big Projects' },
    { id: 'Programs',    label: 'Coding' },
    { id: 'Art',         label: 'Art' },
  ]

  // ─── Home ──────────────────────────────────────────────────────────────────
  function Home() {
    const about = useJson('/data/about.json')
    return (
      <>
        <header className="hero">
          <h1 className="hero__name">Owen Roe</h1>
          <p className="hero__sub">
            This website is a portfolio made to display my projects and demonstrate my skills.
          </p>
        </header>

        <main className="home-main">
          <h2 className="section-title">About Me</h2>
          {!about ? <p className="loading">Loading…</p> : (
            <>
              <div className="hobbies-grid">
                {about.hobbies.map(h => (
                  <div className="hobby-card" key={h.id}>
                    <h3>{h.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: h.description }} />
                  </div>
                ))}
              </div>

              <div className="dogs-block">
                <h3>My Dogs</h3>
                <p>I have two wonderful dogs, Cleo and Tucker. They inspire many of my works and help me relax after school.</p>
                <div className="dog-gallery">
                  {about.dogs.map(dog => (
                    <img key={dog.name} src={dog.src} alt={dog.alt} className="dog-img" />
                  ))}
                </div>
              </div>

              <div className="engineering-link">
                <a href="https://sites.google.com/punahou.edu/owen-engineering-portfolio/home" target="_blank" rel="noreferrer">
                  View my Engineering Portfolio →
                </a>
              </div>
            </>
          )}
        </main>
      </>
    )
  }

  // ─── Art ───────────────────────────────────────────────────────────────────
  function Art() {
    const items = useJson('/data/art.json')
    return (
      <>
        <div className="app  art-page">
          <div className="page-header">
            <h1>Art Projects</h1>
            <p>Jewelry, metalwork, and other art pieces I've created.</p>
          </div>
          <SidebarLayout
            items={items}
            sidebarClass="sidebar--wide"
            detailClass="detail-panel--paper"
            thumbFn={item => item.images?.[0]?.src}
            renderDetail={item => (
              <div className="detail">
                <h2 className="detail__title">{item.title}</h2>
                <div className="detail__images">
                  {item.images.map((img, i) => (
                    <img key={i} src={img.src} alt={img.alt} className="detail__img" />
                  ))}
                </div>
                <p className="detail__desc" dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            )}
          />
        </div>
      </>
    )
  }

  // ─── Programs ──────────────────────────────────────────────────────────────
  function Programs() {
    const p5 = useJson('/data/p5projects.json')
    const py = useJson('/data/python.json')
    const gj = useJson('/data/gamejams.json')

    // Merge all items into one flat list once all three have loaded
    const allLoaded = p5 && py && gj
    const allItems  = allLoaded ? [...(gj), ...(p5), ...(py)] : null

    const groups = allLoaded
      ? [
          { label: 'Game Jams', ids: gj.map(i => i.id) },
          { label: 'p5.js',     ids: p5.map(i => i.id) },
          { label: 'Python',    ids: py.map(i => i.id) },
        ]
      : null

    return (
      <>
        <div className="page-header">
          <h1>Coding Projects</h1>
          <p>Games, experiments, and programs in various languages.</p>
        </div>
        <SidebarLayout
          items={allItems}
          groups={groups}
          renderDetail={item => (
            <div className="detail">
              <h2 className="detail__title">
                {item.title}
                {item.badge && <span className="detail__badge">{item.badge}</span>}
              </h2>
              <p className="detail__desc" dangerouslySetInnerHTML={{ __html: item.description }} />
              {item.embedSrc && (
                <div className="detail__embed">
                  <iframe
                    src={item.embedSrc}
                    width={item.embedWidth}
                    height={item.embedHeight}
                    frameBorder="0"
                    allowFullScreen
                    title={item.title}
                  />
                </div>
              )}
              {item.links && item.links.map((link, i) => (
                <a key={i} className="detail__link" href={link.href} target="_blank" rel="noreferrer">
                  {link.label} →
                </a>
              ))}
            </div>
          )}
        />
      </>
    )
  }

  // ─── Big Projects ──────────────────────────────────────────────────────────
  function BigProjects() {
    const projects = useJson('/data/bigprojects.json')
    return (
      <>
        <div className="page-header">
          <h1>Larger Projects</h1>
          <p>Polished, substantial projects I've dedicated real time to.</p>
        </div>
        <SidebarLayout
          items={projects}
          renderDetail={proj => (
            <div className="detail">
              <h2 className="detail__title">{proj.title}</h2>
              <p className="detail__subtitle">{proj.subtitle}</p>
              {proj.liveUrl && (
                <a className="detail__link detail__link--featured" href={proj.liveUrl} target="_blank" rel="noreferrer">
                  Visit the live site →
                </a>
              )}
              {proj.sections.map((sec, i) => (
                <div key={i} className="detail__section">
                  <h4>{sec.heading}</h4>
                  <p dangerouslySetInnerHTML={{ __html: sec.content }} />
                </div>
              ))}
            </div>
          )}
        />
      </>
    )
  }

  // ─── Render ────────────────────────────────────────────────────────────────
  const PAGES = { Home, Art, Programs, BigProjects }
  const CurrentPage = PAGES[page] ?? Home

  return (
    <div className="app">
      <NavBar current={page} setPage={setPage} pages={NAV_PAGES} />
      <CurrentPage />
      <footer className="footer">
        <p>© Owen Roe</p>
      </footer>
    </div>
  )
}