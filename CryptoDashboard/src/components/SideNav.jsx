import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {MdOutlineDashboard} from 'react-icons/md'
import {AiOutlineTransaction} from 'react-icons/ai'
import {BiSupport} from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
function SideNav() {
    const location = useLocation()
     
    function isActive(link) {
        return location.pathname === link;
    }

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
    backgroundColor={"white"}
    >
        <Box>
        <Heading pt={"56px"} textAlign={"center"} fontSize={"20px"}>Meet's Market</Heading>
        <Box mt={6} mx={"12px"}>
        {navLinks.map((nav)=>(
            <Link to={nav.link}>
            <HStack key={nav.text} py={3} px={4}
            bg={isActive(nav.link)? '#F3F3F7' : '' }
            color={isActive(nav.link)? 'black' : '#797E82' }
            _hover={{
                bg: "#F3F3F7",
                color: "black",

            }}
            borderRadius={"10px"}>
                <Icon as={nav.icon} />
                <Text fontSize={"14px"} fontWeight={"medium"}>{nav.text}</Text>
            </HStack>
            </Link>
        ))}
        </Box>
        </Box>
        <Box my={6} mx={"12px"}>
            <Link to='/support'>
        <HStack 
        bg={isActive('/support')? '#F3F3F7' : '' }
        color={isActive('/support')? 'black' : '#797E82' }
        py={3} px={4} _hover={{
                bg: "#F3F3F7",
                color: "black",
            }}borderRadius={"10px"}>
                <Icon as={BiSupport} />
                <Text fontSize={"14px"} fontWeight={"medium"}>Support</Text>
        </HStack>
        </Link>
        </Box>
    </Stack>
  )
}

export default SideNav