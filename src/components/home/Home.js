import React from 'react'
import FormInput from './FormInput'

const Home = () => {
  return (
    <div className="container max-w-screen-xl mt-10">
        <div className="flex justify-center">
            <div className="">
                <FormInput />
            </div>
            <div className="ml-10">
                Notelist
            </div>
        </div>
    </div>
  )
}

export default Home