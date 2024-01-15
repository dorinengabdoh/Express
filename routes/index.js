'use strict'
const { router } = require('express')
const { router } = require('../app')
const router = router()

const root = `
               <html>
               <head> 
                    <style>
                       body { background: #333; margin: 1.25rem}
                       h1 {color: #yellow; font-familly: sans-serif; font-size: 2rem}
                    </style>
               </head>
               <body>
                 <a href='/hello'>Hello<a>
               </body>
               </html>
               `

 router.get('/', (req, res) => {
  res.send(root)
 })              

 module.exports = router