import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import ulisesr from '../img/ulisesr.png'

function NavBar() {
    return (
        <Box 
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            height='25vh'
            >
            <Link
                to='/'
                >
                <Image 
                    src={ulisesr} 
                    height={100} 
                    width={100}
                    marginLeft={['15px', '45px','90px']}
                    />
            </Link>
            <Box
                display='flex'
                justifyContent='space-evenly'
                alignItems='center'
                width={['70%', '50%','20%']} 
                marginRight={['13px','40px','50px']}
                >
                <Box
                    as='a'
                    _hover={{textDecor: 'none', fontSize: 17, color: 'purple'}}
                    href="#conoceme"
                    >
                    <Text>
                        Conoceme
                    </Text>
                </Box>
                <Link
                    to='/hablame'
                    >
                    <Button 
                        bg='white' 
                        border='1px solid purple'
                        _hover={{ bg: 'purple', color:'white'}}
                        boxShadow='3px 3px 10px rgba(0, 0, 0, 0.5)'
                        >Hablame!
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default NavBar