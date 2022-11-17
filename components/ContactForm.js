import React, { useState } from 'react'
import { useForm } from '@formspree/react'
import Thanks from './Thanks'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FormValError from './FormValError'

const contactSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[a-zA-Z ]*$/, 'Only letters and spaces are allowed')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name cannot be empty'),
  email: Yup.string().email('Invalid email').required('Email cannot be empty'),
  message: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!'),
  companyName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  companyWebsite: Yup.string().url('Invalid URL'),
  services: Yup.array(),
})

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mrgdrgjp')
  const [showThanks, setShowThanks] = useState(false)

  if (state.succeeded) {
    return <Thanks />
  }

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        // companyName: '',
        // companyWebsite: '',
        // services: [],
        // message: '',
      }}
      validationSchema={contactSchema}
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
              htmlFor="fullName"
              className="mb-3 block text-base md:text-lg font-medium text-[#1C1C1C]"
            >
              Full Name
            </label>
            <Field
              type="text"
              name="fullName"
              placeholder="Full name"
              min="0"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full appearance-none rounded-lg border border-[#1C1C1C] bg-white p-2 xl:p-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
            />
            <FormValError>
              {errors.fullName && touched.fullName && errors.fullName}
            </FormValError>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base md:text-lg font-medium text-[#1C1C1C]"
            >
              Email Address
            </label>
            <Field
              type="email"
              name="email"
              placeholder="Email address"
              min="0"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full appearance-none rounded-lg border border-[#1C1C1C] bg-white p-2 xl:p-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
            />
            <FormValError>
              {errors.email && touched.email && errors.email}
            </FormValError>
          </div>
          {/* <div className="mb-5">
            <label
              htmlFor="companyName"
              className="mb-3 block text-base md:text-lg font-medium text-[#1C1C1C]"
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
              className="w-full appearance-none rounded-lg border border-[#1C1C1C] bg-white p-2 xl:p-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
            />
            <FormValError>
              {errors.companyName && touched.companyName && errors.companyName}
            </FormValError>
          </div> */}
          {/* <div className="mb-5">
            <label
              htmlFor="companyWebsite"
              className="mb-3 block text-base md:text-lg font-medium text-[#1C1C1C]"
            >
              Company Website
            </label>
            <Field
              type="text"
              name="companyWebsite"
              placeholder="Company website"
              min="0"
              value={values.companyWebsite}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full appearance-none rounded-lg border border-[#1C1C1C] bg-white p-2 xl:p-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
            />
            <FormValError>
              {errors.companyWebsite &&
                touched.companyWebsite &&
                errors.companyWebsite}
            </FormValError>
          </div> */}
          {/* <div className="mb-5">
            <label
              htmlFor="contactService"
              className="mb-3 block text-base md:text-lg font-medium text-[#1C1C1C]"
            >
              Choose the services that best fits your need.
            </label>

            <div
              className="grid grid-col-1 md:grid-cols-2 grid-rows-3 gap-4"
              role="group"
              aria-labelledby="checkbox-group"
            >
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  value="UI/UX Design"
                  name="services"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="contactService1"
                  className="ml-2 w-full text-base md:text-lg font-normal text-[#1C1C1C]"
                >
                  UI/UX Design
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  value="Marketing & Content"
                  name="services"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="contactService2"
                  className="ml-2 w-full text-base md:text-lg font-normal text-[#1C1C1C]"
                >
                  Marketing & Content
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  value="Web Development"
                  name="services"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="contactService3"
                  className="ml-2 w-full text-base md:text-lg font-normal text-[#1C1C1C]"
                >
                  Web Development
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  value="User Research Workshop"
                  name="services"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="contactService4"
                  className="ml-2 w-full text-base md:text-lg font-normal text-[#1C1C1C]"
                >
                  User Research Workshop
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  value="Brand Strategy"
                  name="services"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="contactService5"
                  className="ml-2 w-full text-base md:text-lg font-normal text-[#1C1C1C]"
                >
                  Brand Strategy
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  value="Other"
                  name="services"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="contactService6"
                  className="ml-2 w-full text-base md:text-lg font-normal text-[#1C1C1C]"
                >
                  Other
                </label>
              </div>
            </div>
            <FormValError>
              {errors.services && touched.services && errors.services}
            </FormValError>
          </div> */}

          {/* <div className="mb-3">
            <label
              htmlFor="message"
              className="mb-3 block text-base md:text-lg font-medium text-[#1C1C1C]"
            >
              Message
            </label>
            <Field
              as="textarea"
              rows={5}
              name="message"
              placeholder="Type your message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full appearance-none rounded-lg border border-[#1C1C1C] bg-white p-2 xl:p-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
            />
            <FormValError>
              {errors.message && touched.message && errors.message}
            </FormValError>
          </div> */}

          <div className="pb-5">
            <button
              type="submit"
              className="hover:shadow-form rounded-lg bg-gray-900 py-2 px-16 text-center text-lg font-semibold text-white outline-none"
            >
              Get Proposal
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
