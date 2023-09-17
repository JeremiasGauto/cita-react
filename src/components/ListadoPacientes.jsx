import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes({ pacientes }) {
  


  return (

    <div className="sm:w-2/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className='font-black text-3xl text-center'>Listado pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
          Administra tus{' '}
          <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
      </p>

      {pacientes.map((paciente) => (
        <Paciente paciente={ paciente } />
      ))}
      
      


    </div>
  )
}

export default ListadoPacientes
