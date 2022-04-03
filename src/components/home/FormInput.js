import React from 'react'
// import useInput from '../hooks/useInput'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const FormInput = () => {
//   const [title, bindTitle, resetTitle] = useInput()
//   const [content, bindContent, resetContent] = useInput()

  const validationSchema = Yup.object({
      title: Yup.string().required('Title is required').min(4, 'Input min 4 characters'),
      content: Yup.string().required('Content is required').min(4, 'Input min 4 characters'),

  })

  const onSubmit = async (values) => {
      const { ...data } = values;
      console.log(data)
      formik.resetForm()
  }

  const formik = useFormik({
    initialValues: {
        title: '',
        content: '',
    }, 
    enableReinitialize: true,
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  })
  return (
    <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
            <h2 className="card-title">Add Notes</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        name="title"
                        className={ formik.touched.title && formik.errors.title ? 'input input-bordered input-error' : 'input input-bordered' } 
                        placeholder="Input your note title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                    <span className="mt-1 text-error">
                        { formik.touched.title && formik.errors.title ? formik.errors.title : '' }
                    </span>
                </div>
                <div className="mt-4 form-control">
                    <label htmlFor="title">Content</label>
                    <textarea 
                        rows="5"
                        name="content"
                        className={formik.touched.content && formik.errors.content ? 'textarea textarea-bordered textarea-error' : 'textarea textarea-bordered'} 
                        placeholder="Input your note content"
                        value={formik.values.content}
                        onChange={formik.handleChange}
                    >
                    </textarea>
                    <span className="mt-2 text-error">
                        { formik.touched.content && formik.errors.content ? formik.errors.content : '' }
                    </span>
                </div>
                <div className="mt-4 form-control">
                    <button type="submit" className="btn btn-primary">Save Note</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormInput