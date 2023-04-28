import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Ultimos Articulos</h1>
        <div className='cards__container'>
            <div className='cardds__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-9.jpg'
                    text='Aqui se perdio mi tio'
                    label='Adventure'
                    path='/services' 
                    />
                    <CardItem
                    src='images/img-2.jpg'
                    text='Si ves el agua azul es porque eres furro'
                    label='Vacaciones'
                    path='/services' 
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-3.jpg'
                    text='Yo no vengo por aqui porque me da miedo lo negro'
                    label='Satanas'
                    path='/services' 
                    />
                    <CardItem
                    src='images/img-4.jpg'
                    text='El poderosisimo Santos Laguna vs El Poderosisimo Rebaño Sagrado de las Omnipotentes Chivas Rayadas del Guadalajara'
                    label='Madre mia'
                    path='/services' 
                    />
                    <CardItem
                    src='images/img-8.jpg'
                    text='Ven a visitar Torreon Coahuila esta Navidad!'
                    label='Vacaciones'
                    path='/services' 
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards