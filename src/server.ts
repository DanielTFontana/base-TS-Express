import { app } from "./app";

const port = 3003

const server = app.listen(port, () =>  console.log('server iniciado na porta' + port))

//a variável process do node tem um listner que é o on. esse on vai ouvir o SIGINT, o qual é o sinal de interrupção do processo.
// quando ele ocorrer chamará a função listner
process.on('SIGINT', () => {
    server.close()
    console.log('Server fechado')
})