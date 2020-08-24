const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello world')
})

// method get utk menarik data
app.get('/orang', (req, res) => {
    console.log('ini adalah query param umur : ' +req.param.umur)

    res.json([
        {
            nama: 'Beta',
            umur: 19
        },
        {
            nama: 'Nug',
            umur: 24
        },
        {
            nama: 'Putri',
            umur: 25
        },
        {
            nama: 'Rizki',
            umur: 26
        }
    ])
})

app.get('/hewan', (req, res) => {
    res.json({
     data: [
         {
             nama: 'kucing',
             umur: '12 th'
         },
         {
             nama: 'burung',
             umur: '3 th'
         }
     ],
     nilai: [
         'A', 
         'B'
     ],
     message: 'success get data'
    })
})

//  method post utk menyimpan data
app.post('/orang', (req, res) => {
    const body = req.body;
    if (body.length === 0){
        res.json({
            max: 0,
            min: 0
        })
    }
    let max = body[0].umur;
    let min = body[0].umur;
    body.forEach(element => {
        if (element.umur > max) {
            max = element.umur;
        } else if (element.umur < min){
            min = element.umur;
        }
    });
    
    res.json(
       {
        max: max,
        min: min
       }    
    )
})

// method patch
app.patch('/orang', (req, res) => {
    res.json({
        data: {
            nama: req.body.nama,
            alamat: req.body.alamat
        },
        message: 'success update'
    })
})

// method put
app.put('/orang', (req, res) => {

    res.json({
        nama: req.body.nama,
        umur: req.body.umur
    })
})

// method put
app.put('/data', (req, res) => {
    res.json({
        data: {
            nama: 'Nina',
            umur: 34
        },
        alamat: {
            kec: 'Sidoharjo',
            kab: 'Sragen',
            provinsi: 'Jawa Tengah'
        }
    })
})

// method delete
app.delete('/orang', (req, res) =>{
    res.json([
        {
            nama: 'Alex',
            umur: 25
        } 
    ])
})

app.listen(port, () => {
    console.log(`example app listening at http://localhost:port${port}`)
})