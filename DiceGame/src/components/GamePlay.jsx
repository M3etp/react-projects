import React, { useState } from 'react'
import TotalScore from './TotalScore'
import SelectNumber from './SelectNumber'
import styled from 'styled-components'
import RollDice from './RollDice'
import Rules from './Rules'

function GamePlay() {
  const [isSelected, setIsSelected] = useState()
  const [currentDiceCount, setCurrentDiceCount] = useState(1)
  const [score, setScore] = useState(0)
  const [error, setError] = useState("")
  const [rulesShown, setRulesShown] = useState(false)

  function rolldice(){
    if(isSelected===undefined){
      setError("Please Select the Number")
      return;
    }
    let randomNum = Math.floor(Math.random()*6 + 1);
    setCurrentDiceCount(randomNum)
    if(isSelected===randomNum){
      setScore(prev => prev + randomNum)
    } else setScore(prev => prev-2)

    setIsSelected(undefined)
}
function reset (){
  setScore(0)
}

  return (
    <MainContainer>
      <div className='topSection'>
        <TotalScore score={score}/>
        <SelectNumber isSelected={isSelected} setIsSelected={setIsSelected} error={error} setError={setError}/>
        </div>
        <RollDice currentDiceCount={currentDiceCount} setCurrentDiceCount={setCurrentDiceCount} rolldice={rolldice}/>
        <div className='btns'>
        <Button onClick={reset}>Reset Score</Button>
        <Button onClick={()=>setRulesShown(prev=>!prev)}>Show Rules</Button>
        </div>
        {rulesShown?<Rules />:null}

    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
.topSection{
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin: 10px auto;
  max-width: 1280px;}

  .btns{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
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
