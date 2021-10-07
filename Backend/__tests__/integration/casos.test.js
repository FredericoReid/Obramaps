const app = require ('../../src/app')


describe('Testando retornos da api de casos', () => {
    it( 'deve retornar status 201', () => {
        const res =  request(app).get('/casos')

        expect(res.statusCode).toEqual(201)
    })
})

describe('Testando retornos da api de pedidos', () => {
    it( 'deve retornar status 201', () => {
        const res =  request(app).get('/pedidos')

        expect(res.statusCode).toEqual(201)
    })
})

