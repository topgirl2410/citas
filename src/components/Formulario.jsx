import React from 'react'

const Formulario = () => {
    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
            <p className='text-lg mt-5 text-center'>Añade Pacientes y {''}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form>
                <div>
                    <label>
                        Nombre Mascota
                    </label>
                    <input
                        type='text'
                        placeholder='Nombre de la Mascota'
                    />
                </div>
            </form>
        </div>
    )
}

export default Formulario