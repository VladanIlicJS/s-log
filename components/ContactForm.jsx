import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

const ContactForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    message: Yup.string()
      .min(10, "Must be at least 10 characters")
      .required("Required"),
  })

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // Send form data to server here
    console.log(values)
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
      console.log(res)
    } catch (err) {
      console.log(err)
    }

    // Reset the form after successful submission
    resetForm()

    // Set submitting state to false
    setSubmitting(false)
  }

  return (
    <div className="w-full">
      <Formik
        initialValues={{ email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="">
            <div className="pb-4 flex flex-col gap-2 w-1/2">
              <label htmlFor="email" className="block text-sm pb-2 text-white">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="p-2 rounded-md focus:border-[#a1a5ff] border-2 focus:ring-[#a1a5ff] outline-none"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="p" className="text-sm text-red-500" />
            </div>

            <div className="pb-4 flex flex-col gap-2 w-1/2">
              <label htmlFor="message" className="block pb-2 text-sm w-full text-white">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                className="p-2 rounded-md border-[#a1a5ff] border-2  focus:ring-[#a1a5ff] outline-none h-32"
                placeholder="Write your message"
              />
              <ErrorMessage component="p" name="message" className="text-sm text-red-500" />
            </div>

            <button
              className="lg:text-[18px] text-[12px] bg-[#a1a5ff] w-1/4 text-white pt-[12px] pb-[12px] rounded-md font-[400] transition duration-300 ease-out px-5 cursor-pointer hover:bg-[#8387f9]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
