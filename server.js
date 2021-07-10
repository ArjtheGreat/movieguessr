const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
app.set('view-engine', 'ejs')
const user = []
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/register', (req, res) => {
    res.render('register.ejs')
})
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))
app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })
      res.redirect('/login')
    } catch {
      res.redirect('/register')
    }
})
app.listen(3010)