import React from 'react'

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#eee', marginBottom: '2rem' }}>
    <a href="/" style={{ marginRight: '1rem' }}>Home</a>
    <a href="/about" style={{ marginRight: '1rem' }}>About</a>
    <a href="/contact">Contact</a>
  </nav>
);

const Footer = () => (
  <footer style={{ padding: '1rem', background: '#eee', marginTop: '2rem', textAlign: 'center' }}>
    &copy; {new Date().getFullYear()} Travel Anywhere
  </footer>
);

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div>home</div>
      <Footer />
    </>
  )
}

export default HomePage