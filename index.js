const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000
app.use(cors());
app.use(express.json());

const users = [
    {id:1, name: 'solim Uddin', email: "solim@1gmail.com"},
    {id:2, name: 'kolim Uddin', email: "kolim@1gmail.com"},
    {id:3, name: 'tolim Uddin', email: "tolim@1gmail.com"}
]

app.get('/', (req, res) => {
  res.send('user management server is 100% running')
})

app.get('/users', (req, res)=>{
    res.send(users);
})
app.post('/users', (req, res)=>{
    console.log('post api')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})