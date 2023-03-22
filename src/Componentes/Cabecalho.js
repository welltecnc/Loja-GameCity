import React from 'react'
import './css/estilo.css'

export default function Cabecalho(){
    return(
         <>
        <header className="menu-bg">
            <div className="menu">
                <div className="menu-logo">
                    <a href="#">GameCity</a> 
                </div>
                          
            <nav className="menu-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#Sobre">Sobre</a></li>
                </ul>
            
            </nav>  
             </div> 
        </header>      
        </>
    )


}