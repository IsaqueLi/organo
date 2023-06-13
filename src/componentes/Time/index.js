import React from 'react'
import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={props.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
} 

export  default Time