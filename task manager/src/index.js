const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')

const taskRouter = require('./routers/task')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')


const app = express()
const port = process.env.PORT || 3000




app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


//_________________________



app.listen(port, () => {
    console.log('server is running on' + port)
})



//______________________________\\




