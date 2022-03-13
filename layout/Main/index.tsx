import React from 'react'
import Container from '../../components/Container'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const Layout: React.FC = ({ children }) => (
  <div className="w-full h-full flex flex-col">
    <Nav />
    <Container className="p-6 flex-1">
      <article className="w-full py-16 prose prose-gray dark:prose-invert">
        {children}
      </article>
    </Container>
    <Footer />
  </div>
)

export default Layout
