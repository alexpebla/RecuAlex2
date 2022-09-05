import React from 'react'


const AdminPage = () => {
  return (
    <>
     <main class="main-container">
            <div class="left-container">
                <div class="top-container">
                    <h3>Hola de nuevo!</h3>
                   
                </div>
                <div class="orders-container">
                    <div class="orders-title">
                        <h3>Historial de compras</h3>
                    </div>
                    <p>No tienes compras aun</p>
                </div>
            </div>
            <div class="profile-container">

                <div class="profile-title">
                    <h3>Tu perfil</h3>
                    <form action="/users/signout" method="POST" id="signout-form">
                        <button class='edit-button' type="submit" value="Cerrar sesion">
                            Cerrar sesion - <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </form>
                </div>
                <li>
                    <ul>Name
                    </ul>
                    <ul>Email
                    </ul>
                    
                </li>
                
            </div>
        </main>
    
    </>
  )
}

export default AdminPage