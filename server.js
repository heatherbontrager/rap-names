const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
    'age': 29,
    'birthName': 'What You Talkin About, Im 21',
    'birthLocation': 'London, England'
},
    'drake': {
        'age': 36,
        'birthName': 'Aubrey Drake Graham',
        'birthLocation': 'Toronto, Canada'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rapperName = request.params.rapperName.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['dylan'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
