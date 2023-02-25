const getTodos = (url, callback) => { 
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=>{

        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(null, data)
            return
        }
        if(request.readyState === 4 && request.status !== 200){
            callback('Deu ruim nos dados', null)
            return
        }
    })

    request.open('GET', url)
    request.send()
}

getTodos('./json/todos.json',(error, data) => {
    console.log(data)
    getTodos('./json/todos-02.json', (error,data) => {
        console.log(data)
        getTodos('./json/todos-03.json',(error,data)=>{
            console.log(data)
        })
    })
})
