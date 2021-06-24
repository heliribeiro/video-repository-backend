const mongoose = require('mongoose');


mongoose.connect(
  '',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=> console.log('Conectado com sucesso!'))
  .catch(error => console.error(`Erro na conexao ${error}`))
