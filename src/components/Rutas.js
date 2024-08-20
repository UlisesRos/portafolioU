import { Box } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Conoceme from './Conoceme'
import Home from './Home'
import Cards from './Cards'
import Cursos from './Cursos'
import Proyectos from './Proyectos'
import NuevoP from './NuevoP'
import Footer from './Footer'
import WS from './WS'
import 'animate.css'

function Rutas() {  

    const [isAnimating, setIsAnimating] = useState(true);
    
    useEffect(() => {
            const timer = setTimeout(() => setIsAnimating(false), 1000);
            return () => clearTimeout(timer);
        }, []);

    return (
        <Box    
            className={isAnimating ? `animate__animated animate__fadeInLeft` : ''}
            >
            <NavBar />
            <Home />
            <Conoceme />
            <Cards />
            <Cursos />
            <Proyectos />
            <NuevoP />
            <Footer />
            <WS />         
        </Box>
    )
}

export default Rutas