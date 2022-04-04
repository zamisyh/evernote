export const addNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        
        firestore.collection('notes').add({
            ...note,
            favorite: false,
            createdAt: new Date()
        }).then((res) => {
            console.log('Succesfullt create notes')
        }).catch((err) => {
            console.log('Error', err)
        })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note).delete()
        .then((res) => {
            console.log('Succesfullt delete notes')
        }).catch((err) => {
            console.log('Error', err)
        })
    }
    

}