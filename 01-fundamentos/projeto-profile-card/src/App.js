import React from 'react';
import './App.css';

const img = './assets/perfil.jpeg'

const App = () => {
    
    const user = {
        name:"Moisés Isaac",
        skill:"Front-end",
        links: [
            {
                url: 'https://www.github.io/isaacmoises719',
                icon:'fab fa-github'
            },
            {
                url: 'https://wa.me/974039377',
                icon:'fab fa-whatsapp'
            },
            {
                url: 'mailto: isaacmoises719@gmail.com',
                icon:'fas fa-envelope'
            }
        ]
    }
    
    return (
        <div className="app">
            <div className="card">
                <img src={img} alt="Foto de perfil" />
                <h1>{user.name}</h1>
                <p>{user.skill}</p>
                <ul>
                    {user.links.map(prev => (
                        <li>
                           <a href={prev.url} target="_blank">
                               <i className={prev.icon}></i>
                           </a> 
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;