import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'

function Sidedrawer({isOpen, onClose}) {
    return (
        <>
          
          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              
    
              <DrawerBody>
                <SideNav />
              </DrawerBody>
    
              
            </DrawerContent>
          </Drawer>
        </>
      )
    
}

export default Sidedrawer