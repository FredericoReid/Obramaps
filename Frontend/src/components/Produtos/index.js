import React, {useState, useEffect} from 'react';
import './styles.css';


const Produtos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(async() => {
        const result = await fetch("http://localhost:5333/casos");
        setProdutos(await result.json())
    }, [])

    console.log(produtos)


let destaque = (event) => {
    if (event.target.style.width === "260px") {
        event.target.style.width = "120px";
    }
    else {
        event.target.style.width = "260px";
        event.target.style.height = "260px"
    }
}

let redimensiona = (event) => {
    if (event.target.style.width === "120px") {
        event.target.style.width = "260px";
    }
    else {
        event.target.style.width = "120px";
        event.target.style.height = "120px"
    }
}


    return (
        <>
            <div className="container-fluid text-center">
                <div className="row">
                    { 
                        produtos.map(value => {
                            return (
                                
                                <div key={value.id} className="col-sm-3">
                                    <div className="card bg-light mb-3">
                                        <div >
                                            <a href="/mais_informacoes">
                                                <img src= {value.imagem} alt="a" width="120" height="120" onMouseOver={destaque}
                                                    onMouseOut={redimensiona}/> 
                                            </a>
                                            <h5>{value.titulo}</h5>
                                            <div className="descricao">
                                                <h5>{value.descricao}</h5>
                                            </div>
                                            <br /> 
                                        </div>
                                    </div>
                                </div>
                            )
                        }) 
                    }
                </div>
            </div>
        </>
    )
}

export default Produtos;