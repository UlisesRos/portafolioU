import { Button, Card, Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import coder from '../img/coder.png'
import numen from '../img/numen.jfif'
import p5 from '../img/p5.jfif'
import Swal from 'sweetalert2'
import certback from '../img/cert-back.png'
import certnumen from '../img/cert-numen.png'
import certp5 from '../img/cert-p5.png'
import certdata from '../img/cert-data.png'
import '../css/Cards.css'

function Cursos() {

  const cursos = [
    {
      img: coder,
      alt: 'cursos coder house',
      titulo: 'Programacion Backend',
      descripcion: 'Curso de programacion backend realizado con exito.',
      certificados: certback
    },
    {
      img: numen,
      alt: 'curso academia numen',
      titulo: 'Desarrollo Web Full Stack',
      descripcion: 'Curso de Desarrollo Web Full Stack realizado con exito.',
      certificados: certnumen
    },
    {
      img: p5,
      alt: 'curso plataforma 5',
      titulo: 'Curso Introductorio de Programacion',
      descripcion: 'Curso Introductorio de Programacion realizado con exito.',
      certificados: certp5
    },
    {
      img: coder,
      alt: 'curso coder house',
      titulo: 'Data Analytics',
      descripcion: 'Curso de Data Analytics realizado con exito.',
      certificados: certdata
    },
  ]

  const [visibleStates, setVisibleStates] = useState([false, false, false, false]);

  const handleMouseOver = (index) => {
      const newVisibleStates = [...visibleStates];
      newVisibleStates[index] = true;
      setVisibleStates(newVisibleStates);
  };

  const handleMouseOut = (index) => {
      const newVisibleStates = [...visibleStates];
      newVisibleStates[index] = false;
      setVisibleStates(newVisibleStates);
  };

  const modal = (cursos) => {
    Swal.fire({
      imageUrl: cursos.certificados,
      imageAlt: cursos.alt,
      customClass: {
        popup: 'custom-popup',
        confirmButton: 'custom-confirm-button',
        image: 'custom-image'
      }
    });
  }


  return (
    <Flex
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      >
        <Text
          fontFamily='mifuente'
          fontSize='2rem'
          marginBottom='20px'
          >
          Mis cursos realizados
        </Text>
        <Flex
          justifyContent='space-evenly'
          flexWrap='wrap'
          gap='60px'
          maxWidth='1200px'
          h='auto'
          margin='30px auto'
          >
          {
            cursos.map((cursos, index) => (
              <Card
                key={index}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => handleMouseOut(index)}
                boxShadow= '8px 8px 10px 6px rgba(0, 0, 0, 0.5)'
                borderRadius='10px'
                transition='transform 1s ease'
                _hover={{transform: 'scale(1.05)'}}
                margin={['0 30px 0 30px','0','0']}
                data-aos="zoom-in"
                >
                <Image
                  display={visibleStates[index] ? 'none' : 'block'}
                  src={cursos.img}
                  alt={cursos.alt}
                  w={['300px','400px','400px']}
                  h={['250px','300px','300px']}
                  borderRadius='10px'
                  />

                <Box
                  display={visibleStates[index] ? 'flex' : 'none'}
                  backgroundColor='#6E07F3'
                  borderRadius='10px'
                  flexDir='column'
                  alignItems='center'
                  justifyContent='space-evenly'
                  textAlign='center'
                  w={['300px','400px','400px']}
                  h={['250px','300px','300px']}
                  >
                    <Text
                      fontFamily='mifuente'
                      fontSize='1.5rem'
                      color='white'
                      >
                      {cursos.titulo}
                    </Text>
                    <Text
                      maxWidth='80%'
                      color='white'
                      >
                      {cursos.descripcion}
                    </Text>
                    <Button
                      onClick={() => modal(cursos)}
                      backgroundColor='#6E07F3'
                      border='1px solid white'
                      color='white'
                      _hover={{
                        backgroundColor: 'white',
                        color: '#6E07F3'
                      }}
                      >
                      Certificado
                    </Button>
                </Box>
              </Card>
            ))
          }
        </Flex>
    </Flex>
  )
}

export default Cursos