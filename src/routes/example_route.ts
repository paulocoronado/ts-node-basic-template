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
        res.send(`I get the following message: ${req.params.msg}`)
    }
)

export default router