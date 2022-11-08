import React, { useState, useEffect } from 'react'
import IconButton from './IconButton'
import { useForm } from '@formspree/react'
import Thanks from './Thanks'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import FormValError from './FormValError'

const HeroForm = () => {
  const [state, handleSubmit] = useForm('xgeqrepg')
  const [showThanks, setShowThanks] = useState(false)

  const heroFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name cannot be empty'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email cannot be empty'),
    companyName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    mobileNumber: Yup.string().required('Mobile Number cannot be empty'),
    message: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!'),
  })

  if (state.succeeded && showThanks) {
    return <Thanks />
  }

  return (
    <div className="flex flex-col justify-center items-start relative bg-white rounded-xl justify-self-center w-full md:max-w-md lg:max-w-lg  xl:max-w-xl ml-auto px-6 xl:px-12 md:px-8 py-6 xl:py-6 drop-shadow-xl">
      <h3 className="uppercase lg:text-xl xl:text-2xl font-bold text-gray-900 text-center w-full pb-4">
        Get in Touch
      </h3>
      <Formik
        initialValues={{
          name: '',
          email: '',
          companyName: '',
          mobileNumber: '',
          message: '',
        }}
        validationSchema={heroFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values)
          setSubmitting(false)
          setShowThanks(true)
          setTimeout(() => {
            setShowThanks(false)
          }, 7000)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit} className="w-full">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 text-base md:text-xl hidden font-medium text-[#1C1C1C]"
              >
                Full Name
              </label>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                min="0"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-2 px-2 xl:py-3 xl:px-3 text-base font-medium text-[#6D6969] outline-none focus:border-[#1C1C1C] focus:shadow-md placeholder-[#6D6969]"
              />
              <FormValError>
                {errors.name && touched.name && errors.name}
              </FormValError>
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 text-base md:text-xl hidden font-medium text-[#1C1C1C]"
              >
                Email Address
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                min="0"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-2 px-2 xl:py-3 xl:px-3 text-base font-medium text-[#6D6969] outline-none focus:border-[#1C1C1C] focus:shadow-md placeholder-[#6D6969]"
              />
              <FormValError>
                {errors.email && touched.email && errors.email}
              </FormValError>
            </div>
            <div className="mb-5">
              <label
                htmlFor="companyName"
                className="mb-3 text-base md:text-xl hidden font-medium text-[#1C1C1C]"
              >
                Company Name
              </label>
              <Field
                type="text"
                name="companyName"
                placeholder="Company name"
                min="0"
                value={values.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-2 px-2 xl:py-3 xl:px-3 text-base font-medium text-[#6D6969] outline-none focus:border-[#1C1C1C] focus:shadow-md placeholder-[#6D6969]"
              />
              <FormValError>
                {errors.companyName &&
                  touched.companyName &&
                  errors.companyName}
              </FormValError>
            </div>
            <div className="mb-5">
              <label
                htmlFor="mobileNumber"
                className="mb-3 text-base md:text-xl hidden font-medium text-[#1C1C1C]"
              >
                Mobile Number
              </label>
              <Field
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                min="0"
                value={values.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-2 px-2 xl:py-3 xl:px-3 text-base font-medium text-[#6D6969] outline-none focus:border-[#1C1C1C] focus:shadow-md placeholder-[#6D6969]"
              />
              <FormValError>
                {errors.mobileNumber &&
                  touched.mobileNumber &&
                  errors.mobileNumber}
              </FormValError>
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 text-base md:text-xl hidden font-medium text-[#1C1C1C]"
              >
                Message
              </label>
              <Field
                as="textarea"
                rows={3}
                name="message"
                placeholder="Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-2 px-2 xl:py-3 xl:px-3 text-base font-medium text-[#6D6969] outline-none focus:border-[#1C1C1C] focus:shadow-md placeholder-[#6D6969]"
              />
              <FormValError>
                {errors.message && touched.message && errors.message}
              </FormValError>
            </div>

            <div className="px-2 py-1 w-fit mx-auto">
              <IconButton icon="/icons/arrow_right.svg" order={2} type="submit">
                Send Message
              </IconButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default HeroForm
