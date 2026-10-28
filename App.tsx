import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleHelp,
  FileText, HeartPulse, Menu, MessageCircle, Network, QrCode, ShieldCheck,
  Sparkles, UsersRound, X, ListChecks, FolderLock, LockKeyhole,
} from 'lucide-react'

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.savemom.alloconnect'
const APPLE_STORE = 'https://apps.apple.com/id/app/allokonnect/id6756619577'

const features = [
  { icon: QrCode, number: '01', title: 'Connect in a scan', desc: 'Share your personal QR code and make new connections without the back-and-forth.', color: 'violet' },
  { icon: MessageCircle, number: '02', title: 'Conversations, together', desc: 'Keep direct messages and group discussions in one organized place.', color: 'blue' },
  { icon: UsersRound, number: '03', title: 'Find your community', desc: 'Discover and manage communities and organizations that matter to you.', color: 'mint' },
  { icon: HeartPulse, number: '04', title: 'Family, thoughtfully organized', desc: 'Coordinate family groups, appointments and health-related records in one place.', color: 'rose' },
  { icon: Sparkles, number: '05', title: 'Meet Allobot', desc: 'Get help with general questions from your in-app AI companion.', color: 'amber' },
  { icon: FolderLock, number: '06', title: 'Your essentials, close by', desc: 'Keep personal files and everyday to-dos organized when you need them.', color: 'cyan' },
]



function Brand() {
  return (
    <a
      className="brand"
      href="#home"
      aria-label="AlloKonnect home"
    >
      <span className="brand-mark">
        <span />
        <span />
        <span />
        <span />
      </span>

      <span>
        Allo<span className="brand-light">Konnect</span>
      </span>
    </a>
  );
}



function ProductPreview() {
  return <div className="preview-scene" aria-label="Illustration of the AlloKonnect app interface">
    <div className="orb orb-one" /><div className="orb orb-two" />
    <div className="float-chip chip-top"><span className="chip-dot green" /> Your people, connected</div>
    <div className="float-chip chip-bottom"><Sparkles size={15} /> A little more organized</div>
    <div className="phone-shadow" />
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-status"><span>9:41</span><span>● ● ▰</span></div>
      <div className="phone-content">
        <div className="phone-brand"><span className="mini-mark"><i /><i /><i /><i /></span> AlloKonnect</div>
        <div className="welcome-line"><div><small>GOOD MORNING</small><h3>Your world,<br />in one place.</h3></div><div className="avatar">A</div></div>
        <div className="search-fake"><CircleHelp size={14} /> What would you like to do?</div>
        <div className="phone-grid">
          <div className="phone-tile tile-lilac"><QrCode /><span>Connect</span></div><div className="phone-tile tile-blue"><MessageCircle /><span>Messages</span></div>
          <div className="phone-tile tile-green"><UsersRound /><span>Community</span></div><div className="phone-tile tile-peach"><HeartPulse /><span>Family</span></div>
        </div>
        <div className="activity-head"><b>Quick access</b><span>View all</span></div>
        <div className="activity-row"><span className="activity-icon ai-purple"><Sparkles /></span><div><b>Ask Allobot</b><small>Your AI companion</small></div><ArrowUpRight size={15} /></div>
        <div className="activity-row"><span className="activity-icon ai-green"><ListChecks /></span><div><b>Today planner</b><small>Keep your day on track</small></div><ArrowUpRight size={15} /></div>
        <div className="activity-row"><span className="activity-icon ai-blue"><FileText /></span><div><b>Personal files</b><small>Your documents, organized</small></div><ArrowUpRight size={15} /></div>
        <div className="phone-nav"><span className="active"><Network />Home</span><span><MessageCircle />Chats</span><span><UsersRound />Groups</span><span><Menu />More</span></div>
      </div>
    </div>
    <div className="mini-card qr-card"><div className="qr-art"><QrCode size={37} /></div><div><b>Meet. Connect.</b><small>One quick scan.</small></div><ArrowUpRight size={16} /></div>
    <div className="mini-card message-card"><div className="bubble-avatar">S</div><div><b>Connection made</b><small>You’re all set ✨</small></div><span className="online-dot" /></div>
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [email, setEmail] = useState('')
  const [notice, setNotice] = useState('')

  const closeMenu = () => setMenuOpen(false)
  const submitEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNotice(email.trim() ? 'Thanks! This demo form is ready to connect to a mailing-list service.' : 'Please enter a valid email address.')
  }

  return <div className="site-shell" id="home">
    <div className="announcement"><span className="announcement-pill">A simpler way to connect</span><span>Meet your everyday connection space.</span><ArrowRight size={14} /></div>
    <header className="header"><div className="container nav-wrap"><Brand />
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        <a href="#features" onClick={closeMenu}>Features</a><a href="#about" onClick={closeMenu}>Why AlloKonnect</a><a href="#faq" onClick={closeMenu}>FAQs</a>
        <a className="nav-download" href="#download" onClick={closeMenu}>Get the app <ArrowUpRight size={15} /></a>
      </nav>
    </div></header>

    <main>
      <section className="hero section-pad"><div className="container hero-grid">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-star"><Sparkles size={13} /></span> YOUR CONNECTION SPACE</div>
          <h1>Good connections.<br /><span>Less complication.</span></h1>
          <p className="hero-lead">Meet AlloKonnect — a simpler space for your people, conversations, communities and everyday essentials.</p>
          <div className="hero-actions"><a className="btn btn-primary" href={PLAY_STORE} target="_blank" rel="noreferrer">Explore AlloKonnect <ArrowRight size={17} /></a><a className="text-link" href="#features">Discover what’s inside <ArrowDownRight size={17} /></a></div>
          <div className="hero-proof"><div className="proof-icon"><ShieldCheck size={17} /></div><div><b>Designed around clarity and control</b><span>Connections, organized your way</span></div></div>
        </div>
        <ProductPreview />
      </div><div className="hero-bottom container"><span>ONE APP, MORE ROOM FOR WHAT MATTERS</span><div className="hero-bottom-line" /><span className="scroll-cue">SCROLL TO EXPLORE ↓</span></div></section>

      <section className="ticker" aria-label="AlloKonnect features"><div className="ticker-track">{['QR connections','Conversations','Communities','Family tools','Allobot AI','Personal files','Everyday planning','QR connections','Conversations','Communities','Family tools','Allobot AI'].map((item, i) => <span key={`${item}-${i}`}><i />{item}</span>)}</div></section>

      <section className="features section-pad" id="features"><div className="container"><div className="section-heading"><div><div className="eyebrow">A PLACE FOR YOUR EVERYDAY</div><h2>Everything feels better<br /><span>when it’s in its place.</span></h2></div><p>From the first hello to the little things you need to remember, keep more of your digital day feeling clear and connected.</p></div>
        <div className="feature-grid">{features.map(({ icon: Icon, number, title, desc, color }) => <article className="feature-card" key={number}><div className={`feature-icon ${color}`}><Icon size={23} strokeWidth={1.8} /></div><div className="feature-number">{number}</div><h3>{title}</h3><p>{desc}</p><a href="#download" aria-label={`Learn about ${title}`} className="card-arrow"><ArrowUpRight size={18} /></a></article>)}</div>
      </div></section>

      <section className="manifesto section-pad" id="about"><div className="container manifesto-grid"><div className="manifesto-visual"><div className="manifesto-glow" /><div className="big-orbit orbit-a" /><div className="big-orbit orbit-b" /><div className="manifesto-center"><span className="manifesto-logo"><span /><span /><span /><span /></span><b>AlloKonnect</b><small>Connections, simplified.</small></div><div className="orbit-label label-one"><QrCode size={17} /> Connect</div><div className="orbit-label label-two"><MessageCircle size={17} /> Communicate</div><div className="orbit-label label-three"><UsersRound size={17} /> Belong</div><div className="orbit-label label-four"><Sparkles size={17} /> Get things done</div></div>
        <div className="manifesto-copy"><div className="eyebrow">THE ALL OKAY KIND OF CONNECTED</div><h2>More connection.<br /><span>Less digital clutter.</span></h2><p>Life happens across people, groups and plans. AlloKonnect brings practical tools into one structured experience, so you can spend less time switching around and more time on what matters.</p><div className="benefit-list"><div><span><Check size={14} /></span><div><b>Made to feel intuitive</b><small>A clean, approachable experience.</small></div></div><div><span><Check size={14} /></span><div><b>Keep control in your hands</b><small>Manage your connections and profile.</small></div></div><div><span><Check size={14} /></span><div><b>Useful beyond messaging</b><small>Communities, files and daily tools.</small></div></div></div><a className="btn btn-dark" href={PLAY_STORE} target="_blank" rel="noreferrer">Meet AlloKonnect <ArrowUpRight size={17} /></a></div>
      </div></section>

      <section className="privacy-band"><div className="container privacy-inner"><div className="privacy-symbol"><LockKeyhole size={22} /></div><div><b>Your information deserves thoughtful handling.</b><p>Explore the app’s privacy information and choose the features that work for you.</p></div><a href="https://savemom.in/products/alloconnect" target="_blank" rel="noreferrer">Read about the app <ArrowUpRight size={16} /></a></div></section>

      <section className="faq-section section-pad" id="faq"><div className="container faq-grid"><div><div className="eyebrow">GOOD TO KNOW</div><h2>A few things<br /><span>you might wonder.</span></h2><p className="faq-intro">A quick introduction to the AlloKonnect experience.</p><div className="faq-contact">Still curious? <a href="https://savemom.in/products/alloconnect" target="_blank" rel="noreferrer">Visit the official product page <ArrowUpRight size={14} /></a></div></div><div className="faq-list">{[
        { q: 'What is AlloKonnect?', a: 'AlloKonnect is a digital platform for QR-based connections, messaging, communities and everyday productivity tools.' },
        { q: 'How do QR connections work?', a: 'The app lets users share or scan a personal QR code to connect without manually exchanging contact details.' },
        { q: 'What is Allobot?', a: 'Allobot is the in-app AI assistant for general questions and interactions. It is not a substitute for professional or medical advice.' },
        { q: 'Can I organize family information?', a: 'The app includes family groups and tools to organize health-related information, appointments and records. Health features are for organization and awareness, not diagnosis or treatment.' },
      ].map((faq, i) => <div className={`faq-item ${faqOpen === i ? 'faq-active' : ''}`} key={faq.q}><button onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}><span>{faq.q}</span><span className="faq-toggle">{faqOpen === i ? <X size={16} /> : <ChevronDown size={17} />}</span></button>{faqOpen === i && <p>{faq.a}</p>}</div>)}</div></div></section>

      <section className="download-section section-pad" id="download"><div className="container download-card"><div className="download-decoration deco-one" /><div className="download-decoration deco-two" /><div className="download-content"><div className="eyebrow"><span className="eyebrow-star"><Sparkles size={13} /></span> YOUR NEXT HELLO STARTS HERE</div><h2>Make room for<br /><span>better connections.</span></h2><p>Take a look at AlloKonnect and find a more organized way to connect, communicate and manage your everyday essentials.</p><div className="store-buttons"><a href={PLAY_STORE} target="_blank" rel="noreferrer" className="store-btn"><span className="store-glyph play-glyph">▶</span><span><small>GET IT ON</small><b>Google Play</b></span><ArrowUpRight size={15} /></a><a href={APPLE_STORE} target="_blank" rel="noreferrer" className="store-btn"><span className="store-glyph apple-glyph">●</span><span><small>DOWNLOAD ON THE</small><b>App Store</b></span><ArrowUpRight size={15} /></a></div><span className="store-note">Official app-store links · Opens in a new tab</span></div><div className="download-art"><div className="download-ring ring-one" /><div className="download-ring ring-two" /><div className="download-phone"><div className="download-notch" /><span className="download-mark"><span /><span /><span /><span /></span><b>AlloKonnect</b><small>Connections, simplified.</small><div className="download-tiles"><i><QrCode /></i><i><MessageCircle /></i><i><UsersRound /></i><i><Sparkles /></i></div><div className="download-line" /><div className="download-line short" /></div><div className="sparkle s-one">✳</div><div className="sparkle s-two">✦</div></div></div></section>

      <section className="newsletter"><div className="container newsletter-inner"><div><div className="eyebrow">STAY IN THE LOOP</div><h3>Good things start with a hello.</h3><p>Join the conversation when you’re ready.</p></div><form onSubmit={submitEmail} className="newsletter-form"><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" value={email} onChange={e => { setEmail(e.target.value); setNotice('') }} required /><button type="submit" aria-label="Submit email"><ArrowRight size={19} /></button>{notice && <span className="form-notice" role="status">{notice}</span>}</form></div></section>
    </main>

    <footer className="footer"><div className="container footer-main"><div className="footer-brand"><Brand /><p>A little less complication.<br />A little more connection.</p></div><div className="footer-links"><div><b>Explore</b><a href="#features">Features</a><a href="#about">Why AlloKonnect</a><a href="#faq">FAQs</a></div><div><b>Get the app</b><a href={PLAY_STORE} target="_blank" rel="noreferrer">Google Play <ArrowUpRight size={13} /></a><a href={APPLE_STORE} target="_blank" rel="noreferrer">App Store <ArrowUpRight size={13} /></a><a href="https://savemom.in/products/alloconnect" target="_blank" rel="noreferrer">Official website <ArrowUpRight size={13} /></a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} AlloKonnect. Landing page concept for an internship project.</span><span className="footer-note">Independent redesign concept · Not an official company website</span></div></footer>
  </div>
}

export default App
