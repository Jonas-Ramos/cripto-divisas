import { useEffect } from 'react'
import styled from '@emotion/styled'
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

  const monedas = [
    {id: 'USD', nombre: 'Dólar de EEUU'},
    {id: 'COP', nombre: 'Peso colombiano'},
    {id: 'EUR', nombre: 'Euro'},
    {id: 'GBP', nombre: 'Libra Esterlina'}
  ]

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige la moneda', monedas)

    useEffect(() => {
      const consultarApi = async() => {
        const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        
        const respuesta = await fetch(URL)
        const resultado = await respuesta.json()
        console.log(resultado.Data)
      }
      consultarApi()
    }, [])
    return (
      <form>

        <SelectMonedas/>
        
          <InputSubmit 
              type="submit" 
              value="Cotizar" />
      </form>
  )
}

export default Formulario