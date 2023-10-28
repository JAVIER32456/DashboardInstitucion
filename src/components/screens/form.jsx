import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './estilos.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'


const Form = () => {

  const {register, formState: { errors }, handleSubmit} = useForm();
  const [fecha, setFecha ] = useState(null);
  

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='container'>
        <h1>Registro de Estudiantes</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='campos'>
            <label htmlFor="">Nombre</label>
            <input type="text" {...register('nombre', {
              required: true,
              maxLength: 10
            })}/>
            {errors.nombre?.type === 'required' && <p>El campo es requerido</p>}
            {errors.nombre?.type === 'maxLength' && <p>El campo debe tener menos de 10 caracteres</p>}
          </div>

          <div className='campos'>
            <label htmlFor="">Apellido</label>
            <input type="text" {...register('apellido', {
              required: true,
              maxLength: 15,
            })}/>
            {errors.apellido?.type === 'required' && <p>El campo es requerido</p>}
            {errors.apellido?.type === 'maxLength' && <p>El campo debe tener menos de 15 caracteres</p>}
          </div>

          <div className='campos'>
            <label htmlFor="">Identificacion</label>
            <input type="number" {...register('id', {
              required: true,
              maxLength: 13,
            })}/>
            {errors.id?.type === 'required' && <p>El campo es requerido</p>}
            {errors.id?.type === 'maxLength' && <p>El campo debe tener menos de 13 caracteres</p>}
          </div>

          <div className='campos'>
            <label htmlFor="">Fecha Nacimiento</label>
            <DatePicker selected={fecha} onChange={(date) => setFecha(date)}/>
          </div>

          <div className='campos'>
            <label htmlFor="">Genero</label>
            <select {...register('genero')} className='genero'>
              <option value="Opcion">Seleccione una Opcion</option>
              <option value="Masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">otro</option>
            </select>
          </div>

          <div className='campos'>
            <label htmlFor="">Direccion</label>
            <input type="text" {...register('direccion', {
              required: true
            })}/>
          </div>

          <div className='campos'>
            <label htmlFor="">Email</label>
            <input type="text" {...register('email', {
              pattern: /\S+@\S+\.\S+/ 
              })}/>
              {errors.email?.type === 'pattern' && <p>El correo es invalido</p>}
          </div>

          <div className='campos'>
            <label htmlFor="">Pais</label>
            <input type='text' {...register('pais')}></input>
          </div>

          <div className='campos'>
            <label htmlFor="">Documento</label>
            <input type="file" {...register('archivo')} accept="application/pdf, image/*"></input>
          </div>

          <div className='boton'>
              <input className='submit' type="submit" value="enviar" />
          </div>
        </form>
    </div>
  )
}

export default Form;
