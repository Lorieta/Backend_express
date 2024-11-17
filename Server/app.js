const express = require('express');
const routes = require('./routes/user.js');

const app = express();

const PORT = 3000; 
app.use(express.json());
app.use('/user', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});