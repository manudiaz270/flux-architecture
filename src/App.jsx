import VisibilityFilter from "./components/VisibilityFilter"
import Notes from "./components/Notes"
import NewNote from "./components/NewNote"

const App = () => {
    return (
      <div>
        <NewNote />
        <VisibilityFilter/>
        <Notes />
      </div>
    )
}

export default App