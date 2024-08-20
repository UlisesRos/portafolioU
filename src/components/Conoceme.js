import { Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'

function Conoceme() {
    return (
        <Box
            id='conoceme'
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
            backgroundColor='#6E07F3'
            w='100%'
            >
            <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                margin='80px 0 80px 0'
                >
                <Text
                    color='white'
                    textAlign='center'
                    fontSize={['19px', '21px','32px']}
                    marginBottom='3%'
                    w='60%'
                    fontFamily='mifuente'
                    data-aos="fade-up-right"
                    >
                    Hola, soy Ulises! Un placer conocerte.
                </Text>
                <Text
                    color='white'
                    textAlign='center'
                    fontSize={['15px','17px','18px']}
                    w={['90%','80%','70%']}
                    data-aos="fade-up-right"
                    >
                    Soy nuevo en el mundo del desarrollo web, pero he estado dedicando tiempo y esfuerzo para aprender y crecer en esta área. He completado con éxito tres cursos que me han proporcionado una sólida base en tecnologías y buenas prácticas. Estoy muy entusiasmado por aplicar todo lo que he aprendido y llevarlo a la práctica en proyectos reales. Mi objetivo es ganar experiencia trabajando y seguir desarrollando mis habilidades en el campo. Estoy comprometido y motivado para contribuir y aprender en un entorno profesional, y estoy listo para enfrentar nuevos desafíos en el desarrollo web.
                </Text>
                <Text borderBottom='1px solid white' w='80%' paddingTop='50px'></Text>
                <Text
                    color='white'
                    textAlign='center'
                    fontSize={['19px', '21px','32px']}
                    marginBottom='3%'
                    marginTop='50px'
                    w='60%'
                    fontFamily='mifuente'
                    data-aos="fade-up-left"
                    >
                    Hello, I'm Ulises! Pleased to meet you.
                </Text>
                <Text
                    color='white'
                    textAlign='center'
                    fontSize={['15px','17px','18px']}
                    w={['90%','80%','70%']}
                    marginBottom='50px'
                    data-aos="fade-up-left"
                    >
                    I'm new to the world of web development, but I have been putting in time and effort to learn and grow in this area. I have successfully completed three courses that have provided me with a solid foundation in technologies and good practices. I am very excited to apply everything I have learned and put it into practice in real projects. My goal is to gain experience working and continue developing my skills in the field. I am committed and motivated to contribute and learn in a professional environment, and I am ready to take on new challenges in web development.
                </Text>
            </Flex>
        </Box>
    )
}

export default Conoceme