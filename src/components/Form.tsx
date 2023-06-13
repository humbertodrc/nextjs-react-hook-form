import {useForm, SubmitHandler} from 'react-hook-form'
import React from 'react'

type Inputs = {
  firstName: string
  area: string
  freelance: string
  mail: string
}

export const Form = () => {

    // Tambien le podemos pasar un objeto con los valores iniciales

  const { register, handleSubmit, watch, reset,formState: { errors, isDirty, dirtyFields, touchedFields, isSubmitted, isSubmitSuccessful, isValid, isLoading } } = useForm<Inputs>(/* {
    defaultValues: {
      firstName: 'John',
      area: 'frontend',
      freelance: 'yes',
      mail: 'correo@correo.com'
    }
  } */);
  

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  

  // console.log(watch('firstName'));

  // Revisar que register('firstName') es un objeto y tiene varias propiedades
  // const firstName = register('firstName')
  // console.log(firstName)

  // Validar que no se hacen re-render de los componentes
  // console.log('render')
  console.log(errors);
  console.log(isDirty); // si ha escrito algo en el input
  console.log(dirtyFields); // cuales inputs han sido modificados
  console.log(touchedFields); // cuales inputs han sido tocados
  console.log(isSubmitted); // si el formulario ha sido enviado
  console.log(isSubmitSuccessful); // si el formulario ha sido enviado correctamente
  console.log(isValid); // si el formulario es valido
  console.log(isLoading); // si el formulario esta cargando

  const handleReset = () => {
    reset(/* {
      defaultValues: {
        firstName: 'John',
        area: 'frontend',
        freelance: 'yes',
        mail: 'correo@correo.com'
      }
    } */) // resetear el formulario
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id='firstName' type="text" {...register('firstName', { required: true, minLength: 3 })} />
        {errors.firstName && <span>Este campo es requerido</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id='mail' type="email" {...register('mail', { pattern: regex, required: true })} />
        {errors.mail && <span>Este campo es requerido</span>}
      </div>
      <div>
        <label htmlFor="area">Type</label>
        <select id="area" {...register('area')}>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
      </div>
      <div>
        <p>Freelance</p>
        <label htmlFor="yes">
          Yes
          <input id="yes" type="radio" value="yes" {...register('freelance')} />
        </label>
        <label htmlFor="no">
          No
          <input id="no" type="radio" value="no" {...register('freelance')} />
        </label>
      </div>
      <button type="submit">Enviar</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  )
}
