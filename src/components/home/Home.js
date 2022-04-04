import React from 'react'
import FormInput from './FormInput'
import { useSelector } from 'react-redux'
import { useFirebaseConnect } from 'react-redux-firebase'

const Home = () => {
  // useFirebaseConnect([{
  //   collection: 'notes',
  //   orderBy: ['createdAt', 'desc']
  // }])

  // const notes = useSelector((state) => state.firestore.ordered.notes)
  // console.log(notes)

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