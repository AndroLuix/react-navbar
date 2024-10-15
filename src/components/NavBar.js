import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../logo.jpg'
import { links, SocialBar } from '../link'

const NavBar = () => {
    const [show, setShow] = useState(false);

    const linkContainerRef = useRef(null);
    const linkListRef = useRef(null);

    // questo use effect permette di incrementare (solo da smartphone) la lunghezza del 
    // menu navbar impostando la lunghezza precisamente 'ul.nav-links' in modo automatico
    // ritorna quindi la luughezza seondo gli elementi inseriti 

    // return string (pixel)
    
    //Per verificare l'efficienza della funzione vai su 'src/link.js' e decommenta la parte di id:5 e id:6

    
    useEffect(() => {
        console.log(linkListRef)
      
        if (show && linkListRef.current) {
            const linkHeight = linkListRef.current.getBoundingClientRect().height;
            if (linkContainerRef.current) {
                linkContainerRef.current.style.height = `${linkHeight}px`;
                console.log(linkHeight)
            }
        } else if (linkContainerRef.current) {
            linkContainerRef.current.style.height = '0px';
        }
    }, [show])




    return (
        <nav className="nav">
            <header className='nav-header'>

                <div className="nav-brand">
                    <img src={logo} alt="logo" className='nav-logo' />
                    <h4>
                        DevBar
                    </h4>
                    <button className="btn nav-toggler" onClick={() => setShow(!show)}>
                        <FaBars className='nav-icon' />
                    </button>
                </div>

            </header>

            <div className={`links-container ${show ? linkContainerRef : "hidden"}`} ref={linkContainerRef}>

                {show ? (
                    <ul className='nav-links' ref={linkListRef}>                            {
                        links.map(el => {
                            return (<li key={el.id} >
                                <a href={el.url} target={el.target} alt={el.text} rel="noreferrer">
                                    {el.text}
                                </a>
                            </li>)

                        })
                    }
                    </ul>
                ) : ('')
                }


            </div>


            <div className="social-links">
                <SocialBar />
            </div>
        </nav>
    )
}

export default NavBar