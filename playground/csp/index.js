import './from-js.css'

document.querySelector('.js').textContent = 'js: ok'

import('./dynamic.js')
    .then((m) => {
        document.querySelector('.dynamic-js').textContent = m.default
    })                                  