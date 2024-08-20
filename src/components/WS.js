import { Box, Image, Link } from '@chakra-ui/react'
import React from 'react'
import whatsapp from '../img/whatsapp.png'

function WS() {
    return (
        <Box
            position='fixed'
            bottom='30px'
            right='50px'
            zIndex='1000'
            >
            <Link
                href="https://api.whatsapp.com/send?phone=3417539870&text=Hola! Te hablo porque vi tu portafolio Web!. Gracias!&nbspme&nbsppueden&nbspayudar?"
                target='_blank'
                >
                <Image src={whatsapp} alt='whatsapp' />
            </Link>
        </Box>
    )
}

export default WS