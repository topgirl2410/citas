import React from 'react'

const Paciente = () => {
    return (

        <div className="m-3 bg-white shadow-md px-5 py-5 rounded-xl">
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>Hook</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre del Propietario: {''}
                <span className='font-normal normal-case'>María</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>correo@correo.com</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de Alta: {''}
                <span className='font-normal normal-case'>25/08/2022</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
                <span className='font-normal normal-case'>Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Blanditiis non impedit alias suscipit,
                    tempora sint dolor odit maxime quaerat pariatur cupiditate repellat
                    ut veniam est deleniti porro. Distinctio, ea sit?</span>
            </p>
        </div>


    )
}

export default Paciente
