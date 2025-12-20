import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
      
      <Reason />
    </>
)

function Header() {
  return (
    <header className="header">
        <img src="/src/assets/react.svg" alt="React logo" className="react-logo"/>
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </header>
  )
}

function MainContent() {
  return (
      <main>
        <h1>Reasons to learn React</h1>
        <ol>
          <li>It's popular</li>
          <li>It's easy to learn</li>
          <li>It's actively maintained</li>
          <li>It's versatile</li>
          <li>It's backed by a strong community</li>
        </ol>
      </main>
  )
}

function Footer() {
  return (
      <footer className='footer'>
        <small className='footer-item'>© 2025 React Facts. All rights reserved.</small>
      </footer>
  )
}

function Reason() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      
    </>
  )
}