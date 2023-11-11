import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, TabIndicator, Tag, flexbox } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import {AiOutlineDownload} from 'react-icons/ai'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable'
import {FiSearch} from 'react-icons/fi'

function TransactionPage() {

  const tabs = [
    {
      name: "All",
      count: 354
    },
    {
      name: "Deposits",
      count: 52
    },
    {
      name: "Withdraw",
      count: 114
    },
    {
      name: "Trade",
      count: 50
    },
  ]
  return (
    <DashboardLayout title={"Transaction"}>
      <Flex justify={"flex-end"} mt={6} mb={3}>
      <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>

      </Flex>
      <Card>
          <Tabs borderRadius={4} position="relative" variant="unstyled">
            <TabList pt={4} display={"flex"} justifyContent={'space-between'}>
             <HStack>
             {tabs.map((tab)=>(
                <Tab key={tab.name}>{tab.name}<Tag fontSize={"sm"} colorScheme='gray' ml={2} borderRadius={"full"}>{tab.count}</Tag></Tab>
              ))}

             </HStack>
          <InputGroup maxW={'200px'} mr={6}>
              <InputLeftElement pointerEvents='none'>
                <Icon as={FiSearch} color='gray.300' />
              </InputLeftElement>
              <Input type='tel' placeholder='Search...' />
            </InputGroup>

            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
              <TransactionTable />
              </TabPanel>
              <TabPanel>
              <TransactionTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
      </Card>

    </DashboardLayout>
  )
}

export default TransactionPage