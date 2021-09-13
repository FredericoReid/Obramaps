import React from 'react';


function Pedidos() {

    return(
        <>
            <div className="row" >
                <div className="col-12" >
                    
                    <form className="col-lg-12" action='http://localhost:5333/processamento_pedidos' method="POST" >

                        <div className="col-12">
                            <input className="form-control" type="nome_cliente" id="nome" name="nome_cliente" placeholder="Nome completo" required />
                        </div>

                        <br />

                        <div className="col-12">
                            <input className="form-control" type="endereco" id="endereco" name="endereco" placeholder="Endereço para entrega" required />
                        </div>

                        <br />

                        <div className="col-12">
                            <input className="form-control" type="email" id="email" name="email" placeholder="Email para contato" required />
                        </div>

                        <br />

                        <div className="col-12">
                            <input className="form-control" type="telefone" id="telefone" name="telefone" placeholder="Telefone para contato" required />
                        </div>

                        <br />

                        <div className = "col-12 titulo">
                        <input className="form-control" type="text" id="titulo" name="titulo" placeholder="Titulo" required />
                        </div>
                        
                        <br/>

                        <div className = "col-12 descricao"> 
                        <input className="form-control" type="text" id="descricao" name="descricao" placeholder="Informe a descrição" required />
                        </div>

                        <br />

                        <div className="col text-center">
                            <button type="submit" className="col-sm-3 btn btn-success"><b>Enviar Pedido</b></button> 
                        </div>  
                        <br />
                        <br />

                    </form>
                </div>                    
            </div>
        </>                     
    )   
}
export default Pedidos;