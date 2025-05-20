import React from 'react'
import Lis from './lis'
import { useState } from 'react'
import My from './my'

const map = () => {
    const vara = ['apple','banana','orange','grape']


    
  return (
    <>
    <ul> 
        {vara.map(
            (item, index) =>{

                return(
                  <Lis
                   key = {index}

                   >
                    <h1>{items}</h1>
                    
                   </Lis>
                   
                )
            })}
          </ul>
          
    <My/>
    
</>
)}
export default map;
