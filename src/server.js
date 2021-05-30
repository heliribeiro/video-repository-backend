const express = require('express');
const cors = require('cors')
require('./config/database')

const CategoryRoutes = require('./routes/category.routes');
const VideoRoutes = require('./routes/video.routes');


const PORT = 8080

const app = express();

app.use(express.json());

app.use(cors());

app.use('/category', CategoryRoutes);
app.use('/video', VideoRoutes);

app.listen(PORT, () => {
    console.log(`O servidor está executando na porta ${PORT}.`)
})


module.exports = app;