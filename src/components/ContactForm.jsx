import React from 'react'
import './ContactForm.css'
import { useFormik } from 'formik'
import { contactSchema } from '../utilities/Schema'

const initialValues = {
  name: '',
  email: '',
  message: ''
}

function ContactForm () {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactSchema,
      onSubmit: (values, action) => {
        action.resetForm()
      }
    })
  return (
    <div className='contact-form' style={{ backgroundColor: '#F5F5F5' }}>
      <h1>Contact Us</h1>
      <form action='' className='form' onSubmit={handleSubmit}>
        <div
          className={`input-block ${
            errors.name && touched.name ? 'error' : ''
          }`}
        >
          <label htmlFor=''>Name</label>
          <input
            type='text'
            name='name'
            id=''
            placeholder='enter your name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className='form-error'>{errors.name}</p>
          ) : null}
        </div>
        <div
          className={`input-block ${
            errors.email && touched.email ? 'error' : ''
          }`}
        >
          <label htmlFor=''>Email</label>
          <input
            type='text'
            name='email'
            id=''
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className='form-error'>{errors.email}</p>
          ) : null}
        </div>
        <div
          className={`input-block ${
            errors.message && touched.message ? 'error' : ''
          }`}
        >
          <label htmlFor=''>Message</label>
          <textarea
            name='message'
            id='message'
            cols='15'
            rows='5'
            placeholder='Leave your message'
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.message && touched.message ? (
            <p className='form-error'>{errors.message}</p>
          ) : null}
        </div>
        <div className='center-button'>
          <button type='submit' className='submit-button'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
