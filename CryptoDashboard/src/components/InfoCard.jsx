import React from 'react'
import { CustomCard } from '../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'
import { withTheme } from '@emotion/react'

function InfoCard({imgUrl, tagText, inverted}) {
  return (
    <CustomCard 
    bgColor={inverted? 'white' : 'p.purpul'}
    bgImage={imgUrl} bgSize={'cover'} bgRepeat={'no-repeat'}>
         <Tag bg={inverted ?'p.purpul':'white'} borderRadius={"full"} color={inverted ? "white" : 'black'}>
            {tagText}
        </Tag>
        <Text textStyle={"h5"} mt={4} fontWeight={"medium"} color={inverted ? 'black' : 'white'}>Lorem ipsum dolor sit amet consectetur,dolorum eum harum! Possimus, vero necessitatibus.</Text>
    </CustomCard>
  )
}

export default InfoCard