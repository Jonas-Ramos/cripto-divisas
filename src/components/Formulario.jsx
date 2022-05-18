import React from 'react'
import styled from '@emotion/styled'


const InputSubmit = styled.input`
    width:100%;
    background-color: #9497ff;
    border: none;
    padding: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    font-size: 24px;
    border-radius: 5px;
    transition: background-color .1s;
    transition: font-size .1s;

    &:hover {
        background-color: #7a7dfe;
        font-size: 23px;
        cursor: pointer;
    }
    ` 

const formulario = () => {
  return (
    <form>
        <InputSubmit 
            type="submit" 
            value="Cotizar" />
    </form>
  )
}

export default formulario