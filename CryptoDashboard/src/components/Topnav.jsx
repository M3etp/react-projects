import {Heading, Menu, MenuButton, MenuItem, HStack, MenuList, Box, Icon } from '@chakra-ui/react'
import React from 'react'
import {FaRegUserCircle} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'


function Topnav({title, onOpen}) {
  return (
    <Box px={4} background={"white"}>
      <HStack mx={"auto"} maxW={"60rem"}  height={16} justifyContent={"space-between"}>
        <Icon as={FaBars} display={{base: 'block', lg: 'none'}}  onClick={onOpen}/>
        <Heading fontSize={"28px"}>{title}</Heading>
        <Menu>
        <MenuButton>
            <Icon as={FaRegUserCircle} fontSize={"24px"} />
        </MenuButton>
        <MenuList>

            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
        </MenuList>
        </Menu> 
    </HStack>
    </Box>
  )
}

export default Topnav