const app = require("./src/app")
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`))

//app.listen(PORT, () => console.log(`está rodando na porta: ${PORT}`))