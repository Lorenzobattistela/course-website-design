

const Sign = {
    getValues(){
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let birthday = document.getElementById('birthday').value
        
        Sign.store(name, email, password, birthday)
    },

    store(name, email, password, birthday){
        localStorage.setItem("user", JSON.stringify({name, email, password, birthday}))

    }
}


const Log = {
    getFromStorage(){
        return JSON.parse(localStorage.getItem("user")) || []
    },

    validate({data}){
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let counter = 0

        if(data.name == name){
            counter++
        }

        if(data.email == email){
            counter++
        }

        if(data.password == password){
            counter++
        }

        if(counter == 3){
            alert('You logged in')
        }


    }
}

const Execute = {
    executeSign(){
        Sign.getValues()
    },

    executeLog(){
        let object = Log.getFromStorage()
        Log.validate({data: object})
    }
}