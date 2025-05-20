import React from 'react'

const lis = (props) => {
    const{item ,index,children}= props
  return (
    <>
    <li key = {index}>{item}</li>
    <div>{children}</div>

    </>
  )
}

export default lis
 