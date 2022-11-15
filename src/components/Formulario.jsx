import {useState} from 'react'
import useClima from  '../hooks/useClima'

const Formulario = () => {

    const {busqueda, datosBusqueda, consultarAPI} = useClima()
    const { ciudad, pais } = busqueda
    const [ alerta, setAlerta ] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()

        if (Object.values(busqueda).includes('') ) {
            setAlerta('Todos los campos son Obligatorios')
            return
        }
        setAlerta('')
        consultarAPI(busqueda)
    }

    return (
        <div className='contenedor'>
            {alerta && <p> {alerta} </p> }
            <form onSubmit={ handleSubmit }>
                <div className='campo'>
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        value={ciudad}
                        onChange={datosBusqueda}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="pais">País</label>
                    <select
                        name="pais"
                        id="pais"
                        value={pais}
                        onChange={datosBusqueda}
                    >
                        <option value='' > --Seleccione--  </option>
                        <option value="US">Estados Unidos</option>
                        <option value="MC">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">Espana</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <input type="submit" value="Consultar Clima" />
            </form>

        </div>
    )
}

export default Formulario