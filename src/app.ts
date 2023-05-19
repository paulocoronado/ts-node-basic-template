import express,{Application, Request, Response, NextFunction} from 'express'

import example_route from './routes/example_route'

const app:Application =express()

// 1. Add routes to express stack
app.use('/', example_route)

//2. Non existing routes
app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({message:'Upss!!! Lo que pidió no existe!!!'})
})

//3. Server error

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    console.log(err)
    res.status(500).json({message:'Sorry, we have a problem!!!'})
}
)

export default app