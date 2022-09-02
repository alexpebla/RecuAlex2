import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PublicNavegation from '../components/PublicNavegation'
import AdminPage from '../pages/admin/AdminPage'
import ArticlesPage from '../pages/ArticlesPage'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'

const Approuter = () => {
  return (
<>
    <PublicNavegation></PublicNavegation>
   <Routes>
       <Route path='/' element={ <Homepage />}></Route>
       <Route path='articles' element={ <ArticlesPage />}></Route>
       <Route path='login' element={ <Login />}></Route>
       <Route path='admin' element={ <AdminPage />}></Route>
   </Routes>
   </>
  )
}

export default Approuter