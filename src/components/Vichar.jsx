import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Vichar = () => {
  return (
    <Box pb={"60px"} bgColor={"#EFE1D1"}>
        <div display={"flex"} align={"center"}>
            <Text fontSize={"50px"} fontWeight={"bold"} pt={"50px"}>आज का विचार</Text>
        </div>
        <div display={"flex"} align={"center"}>
           <Text color={"gray.600"} pt={"50px"}>"जिंदगी के सभी पलों को ध्यान से जियो। भविष्य की चिंता छोड़िए, गुजरते हुए पलों का आनंद उठाइए।"</Text>
        </div>
        
    </Box>
  )
}

export default Vichar