import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import NotesList from './NotesList'

const Favorites = () => {
  useFirestoreConnect([{
      collection: 'notes',
      where: ['favorite', '==', true],
      orderBy: ['createdAt', 'desc'],
      storeAs: 'favorite'
  }])

  const favnotes = useSelector((state) => state.firestore.ordered.favorite)
  console.log('favorite', favnotes)

  return (
    <div className="flex justify-center mt-10">
        <div>
            <h1 className="mt-2 mb-3 text-2xl font-bold">Your Favorite Notes</h1>
            { favnotes.length <= 0 ? 'No data found!' : <NotesList notes={favnotes} /> }
        </div>
    </div>
  )
}

export default Favorites