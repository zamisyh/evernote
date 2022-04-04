import React from 'react'
import FormInput from './FormInput'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import NotesList from '../notes/NotesList'

const Home = () => {
  useFirestoreConnect([{
    collection: 'notes',
    orderBy: ['createdAt', 'desc']
  }])

  const notes = useSelector((state) => state.firestore.ordered.notes)

  return (
    <div className="container max-w-screen-xl mt-10">
        <div className="flex justify-center">
            <div className="">
                <FormInput />
            </div>
            <div className="ml-10">
                <NotesList notes={notes} />
            </div>
        </div>
    </div>
  )
}

export default Home