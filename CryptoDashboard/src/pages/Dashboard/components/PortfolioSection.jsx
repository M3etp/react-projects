import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import {TbInfoSquareRoundedFilled} from 'react-icons/tb'

function PortfolioSection() {
  return (
    <HStack bg={"white"} borderRadius={"xl"} p={6} alignItems={{lg: "center", base: "flex-start"}} justifyContent={{lg: "space-between", base: "center"}} flexDir={{
      base: "column",
      lg: "row"
    }}>
        <HStack spacing={{base: 0, md: 16}} alignItems={{lg: "center", base: "flex-start"}} justifyContent={{lg: "space-between", base: "center"}} flexDir={{
      base: "column",
      md: "row",
      lg: "row"
    }}>
        <Stack>
            <HStack color={"black.80"}>
            <Text fontSize={"14px"}>Total Portfolio Value</Text>
            <Icon as={TbInfoSquareRoundedFilled} />
            </HStack>
            <Text textStyle={"h2"} fontWeight={"medium"}>$ 112,312.24</Text>
        </Stack>
        <Stack>
            
            <Text fontSize={"14px"} color={"black.80"}>Wallet Balance</Text>
            <HStack spacing={{base: 0, md:4}} flexDirection={{base: "column", sm: "row"}} alignItems={{base: "flex-start", sm: "flex-start"}}>
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>22.39501000</Text><Tag colorScheme='gray'>BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>$ 1300</Text><Tag colorScheme='gray'>INR</Tag>
            </HStack>
            </HStack>
        </Stack>
        </HStack>

        <HStack>
          <Button>Deposit</Button>
          <Button>Withdraw</Button>
        </HStack>
    </HStack>
  )
}

export default PortfolioSection