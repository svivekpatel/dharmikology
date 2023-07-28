import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import Navbar from '../components/Navbar';

const Tirth = () => {
  return (
    <Box bg={"#FAF0D7"}>
        <Navbar/>
        <Box>
            <Text textAlign={"center"} fontSize={"50px"} fontWeight={"bold"} p={"50px"}>भारत के प्रमुख तीर्थ स्थल</Text>
        </Box>
        <Box>
            <Box>
                चार धाम
            </Box>
            <Flex gap={"20px"} pl={"100px"} pr={"100px"}>
                <Box>
                   <Image w={"2000px"} h={"400px"} src='badrinath.jpg'/>
                   <Text textAlign={"center"}>बद्रीनाथ धाम</Text>
                </Box>
                <Box>
                   <Image w={"2000px"} h={"400px"} src='dwarka.jpg'/>
                   <Text textAlign={"center"}>द्वारका धाम</Text>
                </Box>
                <Box>
                  <Image w={"2000px"} h={"400px"} src='jagannath.jpg'/>
                  <Text textAlign={"center"}>जगन्नाथ धाम</Text>
                </Box>
                <Box>
                  <Image w={"2000px"} h={"400px"} src='rameshwaram.jfif'/>
                  <Text textAlign={"center"}>रामेश्वरम</Text>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default Tirth;