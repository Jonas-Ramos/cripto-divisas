import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'



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
    margin-top: 30px;
    &:hover {
        background-color: #7a7dfe;
        font-size: 23px;
        cursor: pointer;
    }
    ` 

const Formulario = () => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige la moneda', monedas)
    const [ criptomoneda, SelectCriptomonedas ] = useSelectMonedas('Elige la Criptomoneda', criptos)

    useEffect(() => {
      const consultarApi = async() => {
        const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        
        const respuesta = await fetch(URL)
        const resultado = await respuesta.json()
        

        const arrayCriptos = resultado.Data.map( cripto => {

           const objeto = {
             id: cripto.CoinInfo.Name,
             nombre: cripto.CoinInfo.FullName
           }   

          return objeto
        })
        setCriptos(arrayCriptos)
      }
      consultarApi()
    }, [])

      const handleSubmit = e => {
        e.preventDefault()

        if([moneda, criptomoneda].includes('')){
          setError(true)
          return
        }
        setError(false)
      }
    return (
      <>
          { error && <Error>
              Todos los campos son obligatorios
            </Error> }
          <form
              onSubmit={handleSubmit}
              >

              <SelectMonedas/>
              <SelectCriptomonedas/>
              
                <InputSubmit 
                    type="submit" 
                    value="Cotizar" 
                />
          </form>
      </>
  )
}

export default Formulario