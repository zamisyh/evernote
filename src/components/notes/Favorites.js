import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import LoadingSkeleton from '../layouts/LoadingSkeleton'
import NotesList from './NotesList'

const Favorites = () => {
  useFirestoreConnect([{
      collection: 'notes',
      where: ['favorite', '==', true],
      orderBy: ['createdAt', 'desc'],
      storeAs: 'favorite'
  }])

  const favnotes = useSelector((state) => state.firestore.ordered.favorite)
  const noteMarkup = !isLoaded(favnotes) ? (
    <div className="flex justify-center mt-10">
      <div>
          <LoadingSkeleton/>
      </div>
    </div>
  ) : isEmpty(favnotes) ? (
    <div className="flex justify-center mt-10">
        <div>
            <h1 className="mt-2 mb-3 text-2xl font-bold">Your favorite note is empty</h1>
        </div>
    </div>
  ) : (
    <div className="flex justify-center mt-10">
      <div>
          <h1 className="mt-2 mb-3 text-2xl font-bold">Your Favorite Notes</h1>
          <NotesList notes={favnotes} />
      </div>
    </div>
  )

  return noteMarkup
}

export default Favorites