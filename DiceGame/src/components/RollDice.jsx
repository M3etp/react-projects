import React, { useState } from 'react'
import styled from 'styled-components'

function RollDice({currentDiceCount, rolldice}) {


    

   


  return (
    <DiceContainer>
        <div className='dice-div'>
            <img 
            className='dice-img'
            onClick={rolldice}
            src={`/dice_${currentDiceCount}.png`} />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    .dice-img{
        cursor: pointer;
    }
    p{
        font-size: 24px;
        font-weight: 600;
    }
`