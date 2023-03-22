import React from "react";



export default function Home(){
    return(
        <>
        <br/>
        <br/>
        <img src="" id="slide-home" alt="Slide"></img>

        <section className="sobre" id="sobre">
            <div className="sobre-info">
                <h1>Sobre</h1>
                <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições inegavelmente apropriadas objetivos.</p>
                <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições inegavelmente apropriadas objetivos.</p>
            </div>
            <div className="sobre-img">
                <img src="" alt="imagem sobre"/>
            </div>
        </section>

        <section className="produtos" id="produtos">
            <h1>Produtos</h1>
             <div className="produtos-card"> 
                    {/* estrutura do Game 1*/}
                <div className="produtos-item purple">          
                    <h2>Game 1</h2>
                    <img src="" id="imgProd" alt="Game 1"/>
                </div>
                {/* estrutura do Game 2*/}

                <div className="produtos-item pink">
                     <h2>Game 2</h2>
                    <img src="" id="imgProd" alt="Game 2"/>
                </div>

               {/* estrutura do Game 3*/}

               
                <div className="produtos-item blue">
                     <h2>Game 3</h2>
                    <img src="" id="imgProd" alt="Game 3"/>
                </div>
            </div>
        </section>  
        </>
    )
}