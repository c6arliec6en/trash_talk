const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrash = require('./generate_trash')

app.use('/', express.static('public'))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const target = req.body
  const trash = generateTrash(target)
  console.log(req.body)
  res.render('index', { target: target, trash: trash })
})

app.listen(port, () => {
  console.log('Starting')
})