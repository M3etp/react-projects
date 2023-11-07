import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'
import Topnav from './Topnav'
import Sidedrawer from './Sidedrawer'

function DashboardLayout({title, children}) {
    const {isOpen, onClose, onOpen} = useDisclosure()
  return (
    <Box>
        <Flex>
            <Box display={{
                base: "none",
                lg: 'flex'
            }}>
            <SideNav />
            </Box>
        <Sidedrawer isOpen={isOpen} onClose={onClose}/>
        <Box flexGrow={1}>
         <Topnav title={title} onOpen={onOpen}/>
         <Container maxW={"60rem"}>
            {children}
        </Container>
        </Box>
        
      </Flex>
      
    </Box>
  )
}

export default DashboardLayout