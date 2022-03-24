const app = require('./src')
const port = process.env.PORT || conf.port.rest || 3000

app.listen(port, function(){
    console.log(`-- Servidor inicializado: 127.0.0.1:${port} `)
})