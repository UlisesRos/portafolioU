import React from 'react'
import { Card, CardBody, Heading, Text, Flex, Image, Box, UnorderedList, ListItem } from '@chakra-ui/react'
import backend from '../img/backend.png'
import diseño from '../img/diseño.png'
import frontend from '../img/frontend.png'

function Cards() {
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            minHeight='850px'
            >
            <Flex
                flexDir={['column', 'column', 'row']}
                textAlign='center'
                justifyContent='center'
                alignItems={['center','center','normal']}
                maxW={['80%','80%','80%']}
                borderRadius='10px'
                boxShadow= '10px 10px 15px 6px rgba(0, 0, 0, 0.5)'
                minHeight='700px'
                margin={['30px 0 30px 0', '30px 0 30px 0', '0']}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                >
                <Card 
                    borderRadius={['10px 10px 0 0','10px 10px 0 0','10px 0 0 10px']}
                    w={['100%','100%','33%']}
                    display='flex'
                    alignItems='center'
                    >
                    <Image 
                        src={frontend} 
                        alt='desarrollo frontend' 
                        maxW='80px'
                        maxH='80px'
                        margin='20px 0 20px 0'
                        />
                    <CardBody
                        display='flex'
                        flexDir='column'
                        justifyContent='space-between'
                        >
                        <Heading size='lg' fontFamily='mifuente'>Desarrollador Frontend</Heading>
                        <Text
                            marginTop={['20px', '20px', '0']}
                            >
                            Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.
                        </Text>
                        <Flex
                            flexDir='column'
                            justifyContent='center'
                            alignItems='center'
                            marginTop={['20px', '20px', '0']}
                            >
                            <Text
                                color='#6E07F3'
                                >
                                Idiomas que hablo:
                            </Text>
                            <Text>
                                HTML, CSS, Sass, Git, React.js, JavaScript, WordPress
                            </Text>
                        </Flex>
                        <Flex
                            flexDir='column'
                            justifyContent='center'
                            alignItems='center'
                            marginTop={['20px', '20px', '0']}
                            >
                            <Text
                                color='#6E07F3'
                                >
                                Herramientas de Desarrollo:
                            </Text>
                            <UnorderedList
                                listStyleType='none'
                                display='flex'
                                flexDir='column'
                                justifyContent='center'
                                alignItems='center'
                                m={0} p={0}
                                >
                                <ListItem>Chakra UI</ListItem>
                                <ListItem>GitHub</ListItem>
                                <ListItem>Bootstrap</ListItem>
                                <ListItem>Netlify</ListItem>
                                <ListItem>VS code</ListItem>
                                <ListItem>Material UI</ListItem>
                                <ListItem>Vercel</ListItem>
                            </UnorderedList>
                        </Flex>
                    </CardBody>
                </Card>
                <Card 
                    borderRadius='0'
                    w={['100%','100%','34%']}
                    display='flex'
                    alignItems='center'
                    >
                    <Image 
                        src={backend} 
                        alt='desarrollo backend' 
                        maxW='80px'
                        maxH='80px'
                        margin='20px 0 20px 0'
                        />   
                    <CardBody
                        display='flex'
                        flexDir='column'
                        justifyContent='space-between'
                        >
                        <Heading size='lg' fontFamily='mifuente'>Desarrollador Backend</Heading>
                        <Text
                            marginTop={['20px', '20px', '0']}
                            >
                            Me gusta complementar lo realizado en el desarrollo frontend con un buen backend. Esto me lleva a intentar crear aplicaciones completas
                        </Text>
                        <Flex
                            flexDir='column'
                            justifyContent='center'
                            alignItems='center'
                            marginTop={['20px', '20px', '0']}
                            >
                            <Text
                                color='#6E07F3'
                                >
                                Idiomas que hablo:
                            </Text>
                            <Text>
                                Express.js, JavaScript, Node,js
                            </Text>
                        </Flex>
                        <Flex
                            flexDir='column'
                            justifyContent='center'
                            alignItems='center'
                            marginTop={['20px', '20px', '0']}
                            >
                            <Text
                                color='#6E07F3'
                                >
                                Herramientas de Desarrollo:
                            </Text>
                            <UnorderedList
                                listStyleType='none'
                                display='flex'
                                flexDir='column'
                                justifyContent='center'
                                alignItems='center'
                                m={0} p={0}
                                >
                                <ListItem>Mongo DB</ListItem>
                                <ListItem>Postman</ListItem>
                                <ListItem>Web Socket</ListItem>
                                <ListItem>JWT</ListItem>
                                <ListItem>Test y Mocks</ListItem>
                                <ListItem>Railway</ListItem>
                            </UnorderedList>
                        </Flex>
                    </CardBody>
                </Card>
                <Card 
                    borderRadius={['0 0 10px 10px','0 0 10px 10px','0 10px 10px 0']}
                    w={['100%','100%','33%']}
                    display='flex'
                    alignItems='center'
                    >
                    <Image 
                        src={diseño} 
                        alt='diseñador' 
                        maxW='80px'
                        maxH='80px'
                        margin='20px 0 20px 0'
                        />
                    <CardBody
                        display='flex'
                        flexDir='column'
                        justifyContent='space-between'
                        >
                        <Heading size='lg' fontFamily='mifuente'>Diseñador</Heading>
                        <Text
                            marginTop={['20px', '20px', '0']}
                            >
                            Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones reflexivas.
                        </Text>
                        <Flex
                            flexDir='column'
                            justifyContent='center'
                            alignItems='center'
                            marginTop={['20px', '20px', '0']}
                            >
                            <Text
                                color='#6E07F3'
                                >
                                Cosas que disfruto diseñar:
                            </Text>
                            <Text>
                                UX, UI, Web, Aplicaciones
                            </Text>
                        </Flex>
                        <Flex
                            flexDir='column'
                            justifyContent='center'
                            alignItems='center'
                            marginTop={['20px', '20px', '0']}
                            >
                            <Text
                                color='#6E07F3'
                                >
                                Herramientas de Diseño:
                            </Text>
                            <UnorderedList
                                listStyleType='none'
                                display='flex'
                                flexDir='column'
                                justifyContent='center'
                                alignItems='center'
                                m={0} p={0}
                                >
                                <ListItem>Figma</ListItem>
                                <ListItem>Canva</ListItem>
                                <ListItem>Slack</ListItem>
                            </UnorderedList>
                        </Flex>
                    </CardBody>
                </Card>
            </Flex>
        </Box>
    )
}

export default Cards