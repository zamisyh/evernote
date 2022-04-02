import React from 'react'
import useInput from '../hooks/useInput'
import * as yup from 'yup'
import { useFormik } from 'formik'

const Form = () => {
  const [title, bindTitle, resetTitle] = useInput()
  const [content, bindContent, resetContent] = useInput()

  const onSubmit = (values) => {
      const [ ...data ] = values
      console.log(data)
      
      resetContent()
      resetTitle()
  }

  const formik = useFormik({
      initialValues: {
          title: '',
          content: ''
      },
      validateOnBlur: true,
      onSubmit
  })

  return (
    <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
            <h2 className="card-title">Add Notes</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label forName="title">Title</label>
                    <input 
                        className="input input-bordered" 
                        placeholder="Input your note title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        {...bindTitle}

                    />
                </div>
                <div className="form-control">
                    <label forName="title">Content</label>
                    <textarea 
                        rows="5"
                        className="textarea textarea-bordered" 
                        placeholder="Input your note content"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        {...bindContent}
                    >
                    </textarea>
                </div>
                <div className="form-control">
                    <button type="submit" className="btn btn-primary">Save Note</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form