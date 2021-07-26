const tape = require('tape')
const index = require('./index')

tape('Somar entre dois números', (t) => {
    t.assert(index.soma(5, 5) === 10, "Somou corretamente")
    t.end()
})