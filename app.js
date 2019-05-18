const express = require('express')
const bodyParser = require('body-parser');

const app = express()

const myNotes = [
    'http is a protocol',
    'http requests have a url, method, and body',
    'I like tomatoes',
    'Hey baby give me some love'
];

app.get('/', (req,res)=> {
    res.render('notes.ejs', {notes: myNotes})
})
app.use('/css', express.static('css'));

app.use(bodyParser.urlencoded({extended: true}))

app.post('/notes', (req,res)=> {
myNotes.push(req.body.note);
res.redirect('/')
})

// app.use('/', express.static('views'));


// app.get('/', (req, res)=> {
//     res.send('Web Notes')
// })

app.listen(3000,(req, res)=> {
    console.log('We are listening, you\'re good')
})