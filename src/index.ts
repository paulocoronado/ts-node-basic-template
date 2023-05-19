import app from './app'

//1. Start the server

const puerto=3000

app.listen(
    puerto,
    ()=>{
        console.log(`Server listening on port: ${puerto}`)
    }
)