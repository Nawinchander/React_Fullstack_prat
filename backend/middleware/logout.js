module.exports =  (req,res,next)=>{
    // console.log( `${req.status: '200'}, ${res.status()} `)
    console.log(`${req.method} ${req.originalUrl} - Status: ${res.statusCode}`)
     next()
}