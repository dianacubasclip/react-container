import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import DashboardComponet from './DashboardComponent';
import PageComponent from './PageComponent';


const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<div>hola</div>}/>
      <Route path="loans/" element={<div>loans</div>} />
      <Route path="logistics/" element={<PageComponent host="http://localhost:3008" name="Logistics" />} />
      <Route path="dashboard/*" element={<PageComponent host="http://localhost:3018" name="Dashboard" />} />
    </Routes>
  )
}

export default Router