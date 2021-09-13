import React from 'react';


function Pedidos() {

    return(
        <>
            <div className="row" >
                <div className="col-12" >
                    
                    <form className="col-lg-12" action='http://localhost:5333/login' method="POST" >

                        <div className="col-12">
                            <input className="form-control" type="email" id="email" name="email" placeholder="Email cadastrado" required />
                        </div>

                        <div className="col-12">
                            <input className="form-control" type="password" id="senha" name="senha" placeholder="Senha" required />
                        </div>

                        <br />

                        <div className="col text-center">
                            <button type="submit" className="col-sm-3 btn btn-success"><b>Login</b></button> 
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