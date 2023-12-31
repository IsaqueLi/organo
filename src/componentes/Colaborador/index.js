import React from 'react'
import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    return (    
        <div className='colaborador'>
            <div style={{backgroundColor: corDeFundo}} className='cabecalho'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador