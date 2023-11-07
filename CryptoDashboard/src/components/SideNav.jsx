import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {MdOutlineDashboard} from 'react-icons/md'
import {AiOutlineTransaction} from 'react-icons/ai'
import {BiSupport} from 'react-icons/bi'
function SideNav() {
    const navLinks = [
        {
            icon: MdOutlineDashboard,
            text: "Dashboard",
            link: '/'
        },
        {
            icon: AiOutlineTransaction,
            text: "Transaction",
            link: '/transaction'
        }
    ]
  return (
    <Stack justifyContent={"space-between"} boxShadow={{base: "", lg: "lg"}} width={{base: 'full', lg: '16rem'}} height="100vh" 
    >
        <Box>
        <Heading pt={"56px"} textAlign={"center"} fontSize={"20px"}>Meet's Market</Heading>
        <Box mt={6} mx={"12px"}>
        {navLinks.map((nav)=>(
            <HStack key={nav.text} py={3} px={4} _hover={{
                bg: "#F3F3F7",
                color: "black",

            }}
            color={"#797E82"} borderRadius={"10px"}>
                <Icon as={nav.icon} />
                <Text fontSize={"14px"} fontWeight={"medium"}>{nav.text}</Text>
            </HStack>
        ))}
        </Box>
        </Box>
        <Box my={6} mx={"12px"}>
        <HStack py={3} px={4} _hover={{
                bg: "#F3F3F7",
                color: "black",
            }}
            color={"#797E82"} borderRadius={"10px"}>
                <Icon as={BiSupport} />
                <Text fontSize={"14px"} fontWeight={"medium"}>Support</Text>
        </HStack>
        </Box>
    </Stack>
  )
}

export default SideNav