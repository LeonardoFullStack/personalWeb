import { Header } from "./components/Header";
import { Router } from "./routers/Router";
import { NavLink } from 'react-router-dom'


function App() {


  return (
    <>
    <Header/>

    <main>
    <Router/>
    </main>

    <footer>

    </footer>
    <script src="/helpers/toogleMenu.js"></script>
    </>
  )
}

export default App;

