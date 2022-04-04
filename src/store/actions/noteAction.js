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

export const toggleFav = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const favorite = !note.favorite;
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            favorite: favorite
        }).then((res) => {
            console.log('Succesfully update favorite')
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const unToggleFav = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            favorite: false
        }).then((res) => {
            console.log('Succesfully update favorite')
        }).catch((err) => {
            console.log(err)
        })
    }
}


export const updateNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            title: note.title,
            content: note.content
        }).then((res) => {
            console.log('Succesfully update favorite')
        }).catch((err) => {
            console.log(err)
        })
    }
}

