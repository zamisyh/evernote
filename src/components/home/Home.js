import React from 'react'
import FormInput from './FormInput'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import NotesList from '../notes/NotesList'
import LoadingSkeleton from '../layouts/LoadingSkeleton'

const Home = () => {
  useFirestoreConnect([{
    collection: 'notes',
    orderBy: ['createdAt', 'desc']
  }])

  const notes = useSelector((state) => state.firestore.ordered.notes)

  return (
    <div className="container max-w-screen-xl mt-10">
        <div className="flex-wrap justify-center md:flex">
            <div className="ml-10 md:ml-0">
                <FormInput />
            </div>
            <div className="mt-5 ml-10 md:mt-0">
                { notes ? <NotesList notes={notes} /> : <LoadingSkeleton/> }
                
            </div>
        </div>
    </div>
  )
}

export default Home