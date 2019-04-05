
const app = require('express')();

app.get('/', (req, res) => {
console.log('Connection from ' + req.ip);
res.send('yep');
});

app.listen(3000, () => console.log('Server running'));
