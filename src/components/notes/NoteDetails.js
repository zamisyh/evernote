import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment'


const NoteDetails = () => {
  const { id } = useParams();

  useFirestoreConnect([{
      collection: 'notes',
      doc: id
  }])

  const note = useSelector(({
      firestore: { data }
  }) => data.notes && data.notes[id])
 
  return (
   <div className="flex justify-center">
        <div className="w-full mx-5 mt-10 mb-4 shadow-xl md:mx-20 card bg-base-100">
            <div className="card-body">
                <div className="flex justify-between card-title">{note?.title}</div>
                <hr />
                <span>{note?.content}</span>
                <div className="mt-3 mb-2">
                    <span>{moment(note.createdAt.toDate()).calendar()}</span>
                </div>
            </div>
        </div>   
   </div>
  )
}

export default NoteDetails