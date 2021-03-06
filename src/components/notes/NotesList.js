import React from 'react'
import { deleteNote, toggleFav, unToggleFav } from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const NotesList = ({notes}) => {

  const dispatch = useDispatch();

  const deleteNoteHandler = (data) => {
      dispatch(deleteNote(data))
  }

  const favoriteNoteHandler = (data) => {
      dispatch(toggleFav(data))
  }

  const updateFavoriteNoteHandler = (data) => {
      dispatch(unToggleFav(data))
  }

  const editNoteHandler = (data) => {
      dispatch({
          type: 'EDIT_NOTE',
          payload: data
      })
  }

  return (
    <div>
        { notes && notes.map((note, index) => (
            <div className="mb-4 shadow-xl card w-96 bg-base-100" key={index}>   
                <div className="card-body">
                    <div className="flex justify-between card-title">
                        <div>
                            <Link to={`note/${note.id}`}>
                                {note.title}
                            </Link>
                        </div>
                        <div className="flex">
                            { note.favorite === false ? 
                                <svg onClick={() => favoriteNoteHandler(note)} xmlns="http://www.w3.org/2000/svg" role="button" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg> :
                                <svg role="button" onClick={() => updateFavoriteNoteHandler(note)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-red-500 bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>  
                             }
                            
                            <Link to={`note/${note.id}/edit`}>
                                <svg onClick={() => editNoteHandler(note)} role="button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2 bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            </Link>
                            
                            <svg onClick={() => deleteNoteHandler(note.id)} xmlns="http://www.w3.org/2000/svg" role="button" width="16" height="16" fill="currentColor" className="ml-2 bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </div>
                    </div>
                    <p>
                        {note.content}
                    </p>
                    <p className="mt-2 text-sm font-thin">
                        { moment(note.createdAt.toDate()).fromNow() }
                    </p>
                </div>
            </div>
        )) }
    </div>
  )
}

export default NotesList