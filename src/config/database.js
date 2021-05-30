const mongoose = require('mongoose');


mongoose.connect(
  'mongodb+srv://heliribeiro:heliribeiro@devcluster.q6hvq.mongodb.net/devFlix?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=> console.log('Conectado com sucesso!'))
  .catch(error => console.error(`Erro na conexao ${error}`))