import React from 'react'
import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'

function NuevoP() {
    return (
        <Box
            >
            <Box
                h='200px'
                backgroundColor='#6E07F3'
                >
            </Box>
            <Flex
                justifyContent='center'
                alignItems='center'
                w='100%'
                position='absolute'
                bottom={['600px','540px','600px']}
                >
                <Box
                    display='flex'
                    flexDir={['column', 'column', 'row']}
                    justifyContent='space-evenly'
                    alignItems='center'
                    w='90%'
                    backgroundColor='#141C3A'
                    border='1px solid none'
                    borderRadius='10px'
                    h={['250px','250px','180px']}
                    color='white'
                    >
                        <Heading
                            textAlign='center'
                            fontFamily='mifuente'
                            fontSize={['md', '1.6rem', '1.9rem']}
                            >
                            Iniciar un proyecto
                        </Heading>
                        <Text
                            w={['80%','80%','30%']}
                            textAlign='center'
                            fontSize={['sm', 'md', 'md']}
                            >
                            ¿Te interesa trabajar juntos? Deberíamos fijar una hora para charlar. Yo invito el café.
                        </Text>
                        <Link
                            href="https://api.whatsapp.com/send?phone=3417539870&text=Hola! Te hablo porque vi tu portafolio Web!. Gracias!&nbspme&nbsppueden&nbspayudar?"
                            target='_blank'
                            >
                            <Button
                                borderRadius='20px'
                                backgroundColor='#141C3A'
                                border='1px solid white'
                                color='white'
                                w='auto'
                                h='8vh'
                                fontSize={['sm','sm','lg']}
                                _hover={{
                                    backgroundColor: '#6E07F3',
                                    border: '1px solid #6E07F3',
                                    transform: 'scale(1.10)'
                                }}
                                >
                                🤘 Vamos a hacer esto
                            </Button>
                        </Link>
                </Box>
            </Flex>
            <Box
                backgroundColor='white'
                height='200px'
                >
            </Box>
        </Box>
    )
}

export default NuevoP