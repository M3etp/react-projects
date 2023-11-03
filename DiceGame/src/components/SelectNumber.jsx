import React, { useState } from 'react'
import styled from 'styled-components'

const numbersArray = [1,2,3,4,5,6]

function SelectNumber({isSelected, setIsSelected, error, setError}) {
  function handleSelect(value){
      setError("");
      setIsSelected(value)
  }
  return (
    <ContainerNumberSelect>
      <p className='error'>{error}</p>
    <Flex>
        {numbersArray.map((value, i)=>(
            <Box 
            isActive = {value===isSelected}
            onClick={()=>handleSelect(value)}
            key={i}>{value}</Box>
        ))}
    </Flex>
    <p>Select Number</p>
    </ContainerNumberSelect>
  )
}

export default SelectNumber

const ContainerNumberSelect = styled.div`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1px;
  p{
    text-align: end;
  }
  .error{
    color: red;
    font-size: 24px;
  }
`

const Flex = styled.div`
  display: flex;
  gap: 25px;
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props)=> props.isActive ? "black" : "white"};
    color: ${(props)=> props.isActive ? "white" : "black"};
    transition: all 200ms ease;
`