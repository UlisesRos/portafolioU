import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import CardsProyectos from './CardsProyectos'

function Proyectos() {
    return (
        <Flex
            flexDir='column'
            justifyContent='center'
            >
            <Box
                display='flex'
                flexDir='column'
                alignItems='center'
                textAlign='center'
                backgroundColor='#6E07F3'
                color='white'
                padding='100px 0 40px 0'
                >
                <Text
                    fontFamily='mifuente'
                    fontSize='2.5rem'
                    data-aos="fade-up-right"
                    >
                    Mis Proyectos
                </Text>
                <Text
                    marginTop='30px'
                    fontSize='1.5rem'
                    w='70%'
                    data-aos="fade-up-right"
                    >
                    Me encanta pasar el tiempo delante de mi computadora codeando y creando paginas web. Aqui les dejo algunos de los proyectos que fui creando a lo largo de los cursos realizados.
                </Text>
            </Box>
            <Box
                display='flex'
                justifyContent='space-evenly'
                alignItems='start'
                flexWrap='wrap'
                backgroundColor='#6E07F3'
                h='auto'
                >
                <CardsProyectos />
            </Box>
        </Flex>
    )
}

export default Proyectos