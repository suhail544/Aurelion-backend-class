const express = require('express')

const app = express()

app.get('/product', (req,res)=> {
    // 1. Data from frontend

    // 2. DB logic

    // 3. Data to frontend

    res.send('fetching data')
})

app.post('/product', (req,res) => {
    // 1. data from frontend

    // 2. DB logic

    // 3. Data to frontend
    res.send('Adding data')
})

app.put('/product', (req,res)=> {
    // 1. Data from frontend

    // 2. DB logic

    // 3. Data to frontend
    res.send('update data')
})

app.delete('/product', (req,res)=> {
    // 1. Data from frontend

    // 2. DB logic

    // 3. Data to frontend
    res.send('remove data')
})

app.patch('/product', (req,res)=> {
    // 1. Data from frontend

    // 2. DB logic

    // 3. Data to frontend
    res.send('update data - 2')
})

app.listen(2000)