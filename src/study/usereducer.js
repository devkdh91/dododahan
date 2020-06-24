import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      return false
  }
}

function handleExampleNum(examNum, action) {
  switch (action.type) {
    case 'next':
      return examNum + 1
    case 'prev':
      return examNum - 1
    case 'num':
      return action.value
    default:
      return false
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 })
  const [examNum, setExamNum] = useReducer(handleExampleNum, 1)
  return (
    <>
      <button
        onClick={() => {
          setExamNum({ type: 'next' })
        }}
      >
        다음예제
      </button>
      <button
        onClick={() => {
          setExamNum({ type: 'prev' })
        }}
      >
        이전예제
      </button>
      {examNum === 1 && (
        <div>
          <p> 현재 값 : {state.value}</p>
          <button
            onClick={() => {
              dispatch({ type: 'INCREMENT' })
            }}
          >
            {' '}
            +1{' '}
          </button>
          <button
            onClick={() => {
              dispatch({ type: 'DECREMENT' })
            }}
          >
            {' '}
            -1{' '}
          </button>
        </div>
      )}
    </>
  )
}

export default UseReducer
