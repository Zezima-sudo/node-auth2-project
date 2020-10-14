const { json } = require('express')
const express = require('express')
const authRouter = require('./api/authRouter')
const server = express()
const port = process.env.port || 5050

server.use(express.json())
server.listen(port, () => {
    console.log(`gz, server running on ${port}`)
})

server.use('/api/auth', authRouter)
// server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the server!'
    })
})

module.exports = server;