import React, {useState, useEffect} from 'react';


const Pedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(async() => {
        const result = await fetch("http://localhost:5333/pedidos");
        setPedidos(await result.json())
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {   
                        pedidos.map(value => {
                            return (
                                
                                <div className="col-sm-6">
                                    <div key={value.id}>
                                        <h5>Cliente: {value.nome_cliente}</h5>
                                        <h5>Titulo: {value.titulo}</h5>
                                        <h5>Descricao: {value.descricao}</h5>
                                        <br /> 
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

export default Pedidos;