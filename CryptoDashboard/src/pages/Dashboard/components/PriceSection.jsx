import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Box, Button, Flex, HStack, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'

function PriceSection() {
  const timestamp = ["8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 AM",]
  return (
    <CustomCard>
       <Flex justifyContent={"space-between"} align={"start"}>
       <Stack>
            
            <Text fontSize={"14px"} color={"black.80"}>Wallet Balance</Text>
            <HStack spacing={{base: 0, md:4}} flexDirection={{base: "column", sm: "row"}} alignItems={{base: "flex-start", sm: "flex-start"}}>
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>22.39501000</Text>
              <Text fontSize={"sm"} fontWeight={"medium"} color={"green.400"}>20%</Text>
            </HStack>
            </HStack>
        </Stack>

        <HStack>
          <Button>Buy</Button>
          <Button>Sell</Button>
        </HStack>
       </Flex>
       <Tabs variant='unstyled' colorScheme='gray'>
        <TabList display={'flex'} justifyContent={'flex-end'} >
        <Box borderRadius={"lg"} marginRight={0} p={1} bg={'gray.200'} display={'flex'} justifyContent={'flex-end'}>
        
          {
            ["1Yr", "1Mo", "1W", "1Day"].map((data)=>(
                <Tab borderRadius={"lg"}  bg={'gray.200'} w={10} fontSize={"sm"} _selected={{ fontWeight: 'bold', bg: 'white' }} key={data}>{data}</Tab>
            ))
          }
        </Box>
        </TabList>
        <TabPanels>
          <TabPanel >
            
          </TabPanel>
          <TabPanel>
            
          </TabPanel>
          <TabPanel>
            
          </TabPanel>
          <TabPanel>
            <Image w={"full"} src='/Graph.svg' mt={"48px"} />
            <HStack justifyContent={"space-between"}>
              {
                timestamp.map((time)=>(
                  <Text key={time} fontSize={"sm"} color={"black.80"}>{time}</Text>
                ))
              }
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
       
    </CustomCard>
  )
}

export default PriceSection