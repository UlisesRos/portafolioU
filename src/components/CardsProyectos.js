import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, Box, Link } from '@chakra-ui/react'
import fuerzaintegral from '../img/fuerzaintegral.jfif'
import store from '../img/Store.png'
import mercadolibre from '../img/mercadolibre.jpg'
import fron from '../img/fron.jpg'
import portafolio from '../img/portafolio.jpg'
import ecommerce from '../img/ecommerce.jpg'
import '../css/Cards.css'


function CardsProyectos() {

    const trabajos = [
        {
            img: fuerzaintegral,
            titulo: 'Fuerza Integral',
            descripcion: 'Pagina Web de un gimnasio ubicado en la ciudad de Rosario.',
            link: 'https://fuerza-integral.vercel.app/',
            botonLink: 'fuerza-integral.vercel.app/',
            gitHub: 'https://github.com/UlisesRos/pefManuelMartino.git'
        },
        {
            img: store,
            titulo: 'Pine Apple Store',
            descripcion: 'E-commerce realizado en el proyecto final del curso de Academia Numen.',
            link: 'https://storepineapple.vercel.app/',
            botonLink: 'storepineapple.vercel.app/',
            gitHub: 'https://github.com/UlisesRos/Proyecto-Final-React.git'
        },
        {
            img: mercadolibre,
            titulo: 'Tarjetas Mercado Libre',
            descripcion: 'Creacion de una copia de las Tarjetas que utiliza la Web de Mercado Libre.',
            link: 'https://tarjetasml.netlify.app/',
            botonLink: 'tarjetasml.netlify.app/',
            gitHub: 'https://github.com/UlisesRos/Trabajo-MercadoLibre.git'
        },
        {
            img: fron,
            titulo: 'Proyecto Frontend',
            descripcion: 'Creacion de un frontend para una pagina web.',
            link: 'https://trabajofront.netlify.app/',
            botonLink: 'trabajofront.netlify.app/',
            gitHub: 'https://github.com/UlisesRos/Proyecto.git'
        },
        {
            img: portafolio,
            titulo: 'Portafolio Personal',
            descripcion: 'Portafolio personal creado solo con HTML, CSS y JavaScript. Sin ninguna libreria.',
            link: 'https://ulisesros-portafolio.netlify.app/',
            botonLink: 'UlisesRos Portafolio',
            gitHub: 'https://github.com/UlisesRos/PortafolioEnPuro.git'
        },
        {
            img: ecommerce,
            titulo: 'Backend E-Commerce',
            descripcion: 'En este caso realice un proyecto para el curso de backend donde cree el backend de un E-commerce.',
            link: 'https://github.com/UlisesRos/ProyectoCoderHouse.git',
            botonLink: 'ProyectoCoderHouse.git',
            gitHub: 'https://github.com/UlisesRos/ProyectoCoderHouse.git'
        }
        
        
    ]

    return (
        <Box
            w='100%'
            display='flex'
            flexDir={['column', 'column', 'row']}
            justifyContent={['start','start','space-evenly']}
            rowGap={['70px', '70px', '70px']}
            flexWrap='wrap'
            alignItems={['center','center','start']}
            h='auto'
            backgroundColor='#6E07F3'
            className='cardsProyecto'
            >
        {
            trabajos.map(t => (
            <Card
                w={['90%', 'sm', 'sm']}
                boxShadow= '8px 8px 10px 6px rgba(0, 0, 0, 0.5)'
                textAlign='center'
                h={['auto','500px','500px']}
                flex='1 1 1 33%'
                data-aos="flip-left"
                >
                <CardBody>
                    <Image  
                        w='500px'
                        h='150px'
                        src={t.img}
                        alt='logo de fuerza integral'
                        borderRadius='lg'
                        />
                    <Stack mt='6' spacing='3'>
                        <Heading 
                            size='lg'
                            fontFamily='mifuente'
                            >
                            {t.titulo}
                        </Heading>
                        <Text
                            marginTop='20px'
                            >
                            {t.descripcion}
                        </Text>
                        <Link
                            _hover={{textDecor: 'none'}}
                            fontSize='0.8rem'
                            >
                            {t.gitHub}
                        </Link>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter
                    display='flex'
                    justifyContent='center'
                    >
                    <Link href={t.link} target='_blank'>
                        <Button
                            variant='ghost' 
                            colorScheme='blue'
                            color='#6E07F3'
                            border='1px solid #6E07F3'
                            _hover={{color: 'white', backgroundColor: '#6E07F3'}}
                            >
                            {t.botonLink}
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
            ))
        }
        </Box>
    )
}

export default CardsProyectos