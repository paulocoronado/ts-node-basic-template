import express,{ Router, Request, Response } from 'express'
const router : Router = Router()

// Some examples of routes

router.get(
    '/',
    (req:Request, res:Response)=>{
        res.send('Hello World!!')
    }
)

router.get(
    '/message/:msg',
    (req:Request, res:Response)=>{       
        
        //Generate a random number between 0 and 5
        const random = Math.floor(Math.random() * 10)
        //If the number is 0, send an error

        switch(random){
            case 0:
                res.status(500).send('Internal Server Error')
                break
            case 1:
                res.status(400).send('Bad Request')
                break
            case 2:
                //wait 5 seconds before sending the response
                setTimeout(()=>{
                    res.send(req.params.msg)
                },5000)
                break
            default:
                res.send(req.params.msg)            
        }

        
    }
)

export default router