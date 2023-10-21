import VisibilityFilter from "./components/VisibilityFilter"
import Notes from "./components/Notes"
import NewNote from "./components/NewNote"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import noteService from './services/notes'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        noteService
            .getAll().then(notes => dispatch(setNotes(notes)))
    })
    return (
      <div>
        <NewNote />
        <VisibilityFilter/>
        <Notes />
      </div>
    )
}

export default App