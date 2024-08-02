import express from "express";

const server = express()

server.get('/calculadora/somar/:n1/:n2', (req, resp) => {
  let n1 = Number(req.params.n1)
  let n2 = Number(req.params.n2)

  let resultSoma = n1 + n2 

  resp.send({
    soma: resultSoma
  })
})

server.get('/calculadora/subtrair/:n1/:n2', (req,resp) => {
  let n1 = Number( req.params.n1 )
  let n2 = Number( req.params.n2 )

  let resultadoSubtrair = n1 - n2

  resp.send ({
    subtrair : resultadoSubtrair
})
})


server.listen(5050, () => console.log("Eta, como sobe"))