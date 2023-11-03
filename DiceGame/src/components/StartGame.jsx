import React from 'react'
import styled from 'styled-components'

function StartGame({toggle}) {
  return (
    <Container>
        <div>
            <img src='/dices.png' />
        </div>
        <div className='heading'>
          <h1>DICE GAME</h1>
          <Button
          onClick={toggle}>Play Game</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1080px;
    height: 100vh;
    margin: 0 auto;
    align-items: center;
    display: flex;
   
  .heading{
    h1{
      font-size: 96px;
      white-space: nowrap;

    }
    Button{
      margin-left: 295px;
      font-size: 20px;
    }
  }

`

const Button = styled.button`
    background-color: black;
    color: white;
    width: 220px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 400ms ease-in ;

    &:hover{
      background-color: white;
      color: black;
      transition: all 300ms ease-in ;
    }
`

