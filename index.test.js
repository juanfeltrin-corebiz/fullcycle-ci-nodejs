const tape = require('tape')
const index = require('./index')

tape('Testes entre dois números', (t) => {
    t.assert(index.soma(5, 5) === 10, "Somou corretamente!")
    t.assert(index.subtracao(15, 5) === 10, "Subtraiu corretamente!")
    t.end()
})