import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PublicNavegation from '../components/PublicNavegation'
import AdminPage from '../pages/admin/AdminPage'
import ArticlesPage from '../pages/ArticlesPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'


const Approuter = () => {
  return (
   <>
      <PublicNavegation />
   <Routes>
       <Route path="/" element={ <HomePage />}></Route>
       <Route path="articles" element={ <ArticlesPage />}></Route>
       <Route path="login" element={ <LoginPage />}></Route>
       <Route path="admin" element={ <AdminPage />}></Route>
   </Routes>
   </>
  )
}

export default Approuter