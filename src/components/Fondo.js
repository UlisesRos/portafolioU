import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import '../css/Boton.css'
import fron from '../img/fondopantalla.jpg'
import 'animate.css'

function Fondo() {

    return (
        <Flex
            w='100%'
            h='100vh'
            justifyContent='center'
            alignItems='center'
            backgroundImage={fron}
            backgroundSize='cover'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            >
                <Link
                    to='/rutas'
                    >
                    <button
                        className='boton'
                        >
                            START
                    </button>
                </Link>
        </Flex>
    )
}

export default Fondo