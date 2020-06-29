import React, { useRef } from 'react'

const UseRef = () => {
  const test = useRef(0)
  const setTest = () => {
    test.current = test.current + 1
  }
  return (
    <>
      <div>{test.current}</div>
      <button
        onClick={() => {
          setTest()
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          alert(test.current)
        }}
      >
        변경 된 값
      </button>
    </>
  )
}

export default UseRef
