import React from 'react'
import FormInput from './FormInput'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import NotesList from '../notes/NotesList'
import LoadingSkeleton from '../layouts/LoadingSkeleton'

const Home = () => {
  useFirestoreConnect([{
    collection: 'notes',
    orderBy: ['createdAt', 'desc']
  }])

  const notes = useSelector((state) => state.firestore.ordered.notes)
  const notesMarkup = !isLoaded(notes) ? (
    <div className="container max-w-screen-xl mt-10">
        <div className="flex-wrap justify-center md:flex">
            <div className="ml-10 md:ml-0">
                <FormInput />
            </div>
            <div className="mt-5 ml-10 md:mt-0">
                <LoadingSkeleton/> 
            </div>
        </div>
    </div>
  ) : isEmpty(notes) ? (
      <div className="container max-w-screen-xl mt-10">
        <div className="flex-wrap justify-center md:flex">
          <div className="ml-10 md:ml-0">
              <FormInput />
          </div>
          <div className="mt-5 ml-10 md:mt-0">
             Note is empty          
          </div>
        </div>
      </div>
  ) : (
    <div className="container max-w-screen-xl mt-10">
        <div className="flex-wrap justify-center md:flex">
            <div className="ml-10 md:ml-0">
                <FormInput />
            </div>
            <div className="mt-5 ml-10 md:mt-0">
                <NotesList notes={notes} />
            </div>
        </div>
    </div>
  )

  return notesMarkup
}

export default Home