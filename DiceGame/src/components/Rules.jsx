import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>
        <h3>How to Play Dice Game:</h3>

        <div className='instructions'>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    
    max-width: 794px;
    margin: 20px auto;
    padding: 20px;
    background-color: #FBF1F1;
    line-height: 12px;
    font-weight: 700;
    .instructions{
        margin-top: 24px;
    }

    p{
        font-size: 16px;
        line-height: 8px;
        font-weight: 500;
    }
`