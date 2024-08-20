import React from 'react'
import avatar from '../img/avatar.svg'
import diseño from '../img/diseño.svg'
import { Box, Flex, Text, Image } from '@chakra-ui/react'

function Home() {
    return (
        <Flex
            flexDir='column'
            justifyContent='space-between'
            alignItems='center'
            textAlign='center'
            h='900px'
            >
            <Box
                display='flex'
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                marginTop='50px'
                >
                <Text
                    fontSize={['1.8rem','2rem','2.5rem']}
                    fontWeight='bold'
                    letterSpacing='1px'
                    fontFamily='mifuente'
                    >
                    Diseñador y Desarrollador frontend y backend
                </Text>
                <Text
                    fontSize={['1.3rem','1.5rem','1.5rem']}
                    paddingTop='20px'
                    >
                    Diseño y codifico cosas maravillosamente simples, y me encanta lo que hago.
                </Text>
            </Box>
            <Image src={avatar} alt='avatar'/>
            <Image 
                src={diseño} 
                alt='Diseño del home'
                w='70%'
                />
        </Flex>
    )
}

export default Home