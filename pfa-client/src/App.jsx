import { useState,useEffect } from 'react'
import { render } from "react-dom";
import Cree_dem from './comps/pages/emp/cree une demande/cree_dem';
import Demande from './comps/pages/emp/demande/demande';
import Demande_single from './comps/pages/emp/demande/demande_single';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Protectedroutes from './comps/pages/protectedroutes';
import SignIn from './comps/pages/sign in/sign-in';
import Ajouter from './comps/pages/admin/ajouter employee/ajouter';
import Rattrapage from './comps/pages/admin/planifier date rat/rattrapage';
import Gererdem from './comps/pages/admin/gere demande/gerer_dem';
import Demande_single_admin from './comps/pages/admin/demande single admin/Demande-single-admin';
import Redirect from './comps/pages/Redirect';
import Side_bar from './comps/commen comps/side bar/side_bar';
import './App.scss';

function App() {
  const [role,setrole]=useState('not');
  useEffect(() => {
    setrole(localStorage.getItem('role'));
    console.log(role);
  }, [])

  return (
    <div className="App">
      <BrowserRouter className='test'>
        <Routes>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/' element={localStorage.getItem('role')==='not'?<SignIn/>:<Redirect/>}></Route>

            <Route path="/admin" >
              <Route index element={localStorage.getItem('role')=='admin'?<Gererdem/>:<Redirect/>}></Route>
                <Route path='gerer-demande'>
                  <Route index element={localStorage.getItem('role')=='admin'?<Gererdem/>:<Redirect/>}></Route>
                  <Route path=':demande_id' element={localStorage.getItem('role')=='admin'?<Demande_single_admin/>:<Redirect/>}></Route>
                </Route>
                <Route path='ajouter-employee' element={localStorage.getItem('role')=='admin'?<Ajouter/>:<Redirect/>}></Route>
                <Route path='planifier-date' element={localStorage.getItem('role')=='admin'?<Rattrapage/>:<Redirect/>}></Route>
            </Route>

            <Route path='/emp'>
              <Route index element={localStorage.getItem('role')=='user'?<Demande/>:<Redirect/>}></Route>
                <Route path='cree_demande' element={localStorage.getItem('role')=='user'?<Cree_dem/>:<Redirect/>}></Route>
                <Route path='demande'>
                  <Route index element={localStorage.getItem('role')=='user'?<Demande/>:<Redirect/>}></Route>
                  <Route path=':demande_id' element={localStorage.getItem('role')=='user'?<Demande_single/>:<Redirect/>}></Route>
                </Route>
            </Route>

        </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
