
import './App.css'
import { useReducer } from 'react'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'

}

const INTAGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})

function formatOperand(operand){
  if(operand==null) {return}
  const [intager, decimal] = operand.split('.')
  if(decimal==null) {return INTAGER_FORMATTER.format(intager)}
  return `${INTAGER_FORMATTER.format(intager)}.${decimal}`
}

function reducer (state, {type, payload}){
    switch(type){
      case ACTIONS.ADD_DIGIT:
        if(state.currentOperand==null && payload.digit==="."){
            return{
              ...state,
              currentOperand: `0${payload.digit}`
            }
        }
        if(state.overwrite){
          return{
            ...state,
            overwrite: false,
            currentOperand: `${payload.digit}`,
            previousOperand: null
          }
        }
        if(state.currentOperand === '0' && payload.digit==='0'){
          return state
        }
        if(payload.digit==='.' && state.currentOperand.includes('.')){
          return state
        }
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`
        }
      case ACTIONS.CLEAR:
        return{
          
        }
      case ACTIONS.CHOOSE_OPERATION:
        if(state.currentOperand==null && state.previousOperand==null)return state
        if(state.overwrite){
          return{
            ...state,
            overwrite: false,
            previousOperand: state.currentOperand,
            currentOperand: null,
            operation: `${payload.operation}`
          }
        }
        if(state.previousOperand==null){
        return{
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: null,
          operation: `${payload.operation}`
        }
      }
      if(state.currentOperand == null){return{...state, operation:payload.operation}}
      return{
        ...state,
        previousOperand: evaluate(state),
        operation: `${payload.operation}`,
        currentOperand: null

      }
      case ACTIONS.EVALUATE:
        if(state.currentOperand == null || state.previousOperand == null || state.operation == null){
          return state
        }
        return{
          ...state,
          overwrite: true,
          currentOperand : evaluate(state),
          previousOperand: `${state.previousOperand} ${state.operation} ${state.currentOperand}`,
          operation: null
        }
      case ACTIONS.DELETE_DIGIT:
        if(state.currentOperand==null) return state
        return{
          ...state,
          currentOperand: `${state.currentOperand.slice(0,-1)}`
        }
    }
}

function evaluate({previousOperand, currentOperand, operation}){
  const prev = parseFloat(previousOperand)
  const curr =parseFloat(currentOperand)
 
  if(isNaN(prev) || isNaN(curr)){return ""}
  let result = ""
  switch(operation){
    case "+":
      result = prev + curr
      break
    case "-":
      result = prev -curr
      break
    case "/":
      result = prev / curr
      break
    case "*":
      result = prev * curr
      break
  }
  return result.toString()
}
function App() {

const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer,{})

// dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit: 1}})

  return (
    <>
     <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operation}</div>
        <div className='current-operand'>{formatOperand(currentOperand)}</div>
      </div>
      <button className='span-two' onClick={()=>dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button onClick={()=>dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
      <OperationButton operation="/" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button className='span-two' onClick={()=>dispatch({type: ACTIONS.EVALUATE})}>=</button>
     </div>
    </>
  )
}

export default App
