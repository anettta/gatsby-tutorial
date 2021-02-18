import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'

//wraps all my pages

const layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default layout
