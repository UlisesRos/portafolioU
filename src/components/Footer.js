import { Box, Flex, Heading, Text, Image, Link } from '@chakra-ui/react'
import React from 'react'
import instagram from '../img/logotipo-de-instagram.png'
import gmail from '../img/gmail.png'
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import chakra from '../img/chakra.png'

function Footer() {
    return (
        <Flex
            flexDir='column'
            alignItems='center'
            rowGap='50px'
            marginBottom='50px'
            >
            <Box
                display='flex'
                flexDir='column'
                alignItems='center'
                textAlign='center'
                rowGap='30px'
                fontFamily='mifuente'
                fontSize='1.7rem'
                >
                <Link
                    _hover={{
                        textDecor: 'none'
                    }}
                    href='/'
                    >
                    <Heading
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        fontSize='3rem'
                        color='white'
                        backgroundColor='#6E07F3'
                        w='65px'
                        h='70px'
                        borderRadius='100px'
                        >
                        U
                    </Heading>
                </Link>
                <Text
                    color='#6E07F3'
                    w='60%'
                    >
                    Vivir, aprender y mejorar un día a la vez.
                </Text>
            </Box>
            <Box
                display='flex'
                columnGap='50px'
                rowGap='10px'
                justifyContent='center'
                alignItems='center'
                w={['95%','80%','50%']}
                backgroundColor='#6E07F3'
                padding='20px 30px'
                borderRadius='10px'
                flexWrap='wrap'
                >   
                <Link
                    href='https://www.instagram.com/ulisess12/'
                    target='_blank'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='100%'
                    h={['40px','45px','60px']}
                    w={['40px','45px','60px']}
                    border='2px solid black'
                    _hover={{
                        backgroundColor: 'white',
                        transform: 'scale(1.02)',
                        border:'none'
                    }}
                    >
                    <Image src={instagram} alt='instagram' w={['20px','25px','32px']} h={['20px','25px','32px']}/>
                </Link>
                <Link
                    href='https://www.linkedin.com/in/ulises-ros/'
                    target='_blank'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='100%'
                    h={['40px','45px','60px']}
                    w={['40px','45px','60px']}
                    border='2px solid black'
                    _hover={{
                        backgroundColor: 'white',
                        transform: 'scale(1.02)',
                        border:'none'
                    }}
                    >
                    <Image src={linkedin} alt='linkedin' w={['20px','25px','32px']} h={['20px','25px','32px']}/>
                </Link>
                <Link
                    href='https://github.com/UlisesRos'
                    target='_blank'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='100%'
                    h={['40px','45px','60px']}
                    w={['40px','45px','60px']}
                    border='2px solid black'
                    _hover={{
                        backgroundColor: 'white',
                        transform: 'scale(1.02)',
                        border:'none'
                    }}
                    >
                    <Image src={github} alt='github' w={['20px','25px','32px']} h={['20px','25px','32px']}/>
                </Link>
                <Link
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='100%'
                    h={['40px','45px','60px']}
                    w={['40px','45px','60px']}
                    border='2px solid black'
                    _hover={{
                        backgroundColor: 'white',
                        transform: 'scale(1.02)',
                        border:'none'
                    }}
                    href='mailto:ulisesros70@gmail.com?subject=Hola!%20Me%20quiero%20comunicar%20con%20Ulises%20Ros!'
                    >
                    <Image src={gmail} alt='gmail' w={['20px','25px','32px']} h={['20px','25px','32px']}/>
                </Link>
            </Box>
            <Box
                display='flex'
                rowGap='20px'
                flexDir='column'
                alignItems='center'
                color='#6E07F3'
                >
                <Heading
                    fontSize='1rem'
                    fontFamily='mifuente'
                    >Hecho a mano por mi Ⓒ </Heading>
                <Flex
                    flexDir='column'
                    alignItems='center'         
                    >
                    <Text
                        fontSize='1rem'
                        fontFamily='mifuente'
                        >
                        made in
                    </Text>
                    <Link href='https://v2.chakra-ui.com/' target='_blank'>
                        <Image src={chakra} alt='chakra ui' w='100px' h='20px'/>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Footer