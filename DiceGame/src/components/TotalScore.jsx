import React from 'react'
import styled from 'styled-components'

function TotalScore({score}) {
  return (
    <TotalScoreBox>
        <h1>{score}</h1>
        <p>Total Score</p>
    </TotalScoreBox>
  )
}

export default TotalScore

const TotalScoreBox = styled.div`
    width: 200px;
    text-align: center;
    line-height: 1px;
    h1{
        font-size: 100px;

    }
    p{
        font-size: 22px;
        font-weight: 600;
    }
`