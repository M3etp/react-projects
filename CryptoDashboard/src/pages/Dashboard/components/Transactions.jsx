import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import {AiFillDollarCircle} from 'react-icons/ai'
import {BiLogoBitcoin} from 'react-icons/bi'

function Transactions() {
  const transactions = [
    {
      id: 1,
      icon: AiFillDollarCircle,
      text: "INR Deposit",
      timestamp: "2022-06-09 7:06 PM",
      amount: "+ $81,123.58"
    },
    {
      id: 2,
      icon: BiLogoBitcoin,
      text: "BTC Sell",
      timestamp: "2022-05-27 12:32 PM",
      amount: "- 12.024846518  BTC"
    },
    {
      id: 3,
      icon: AiFillDollarCircle,
      text: "INR Deposit",
      timestamp: "2022-06-09 7:06 PM",
      amount: "+ $81,123.58"
    },
  ]
  return (
    <CustomCard height={"full"}>
      <Text mb={6} color={"black.80"} fontSize={"sm"}>Recent Transaction</Text>
      <Stack spacing={4}>
        {
          transactions.map((trans,i)=>(
            <Fragment key={trans.id} >
              {i !== 0 && <Divider />}
              <Flex gap={1}>
              <Box bg={"blackAlpha.50"} boxSize={10} borderRadius={"full"} display={"grid"} placeItems={"center"}>
              
                <Icon as={trans.icon} width={6} height={6}/>
                
              </Box>
              <Flex justify={"space-between"} w={'full'}>
                <Stack spacing={0}>
                  <Text textStyle={"h6"}>{trans.text}</Text>
                  <Text fontSize={'sm'} color={'black.40'}>{trans.timestamp}</Text>
                </Stack>
                <Text textStyle={"h6"}>{trans.amount}</Text>
              </Flex>
            </Flex>
            </Fragment>
          ))
        }
      </Stack>
      <Button mt={6} width={"full"} colorScheme='gray'>View All Transaction</Button>
    </CustomCard>
  )
}

export default Transactions