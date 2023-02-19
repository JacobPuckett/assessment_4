// const { getFortune } = require("../server/controller");

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const submitBtn = document.querySelector("submitButton")
const form = document.querySelector('form')
const input = document.querySelector('input')
const movieList = document.querySelector('ul')
// const movieBtn = document.querySelector('#addmovie')

const baseURL = 'http://localhost:4000/api/movies/'

// const displayCallBack = ({ data: images }) => displayImg(images)
const gameBtn = document.querySelector("#get-games")
// const forms = document.querySelector('#forms')
// let imgURL = document.querySelector('#img')

// function displayImg(arr) {
//     housesContainer.innerHTML = ''
//     for (let i = 0; i < arr.length; i++){
//         crateImagesCard(arr[i])
//     }
// }

const gameList = (arr) => {
    list.innerHTML = ""
    arr.forEach(element => {
        let newList = document.createElement('li')
        newList.textContent = element
        list.appendChild(newList)
    })
}



const getGame = evt => {
    axios.get('http://localhost:4000/api/games')
    .then(response => {
        console.log(response.data)
        gameList(response.data)
    })
    .catch(err => console.log(err))
}











gameBtn.addEventListener('click', getGame)






const createMovieList = arr => {
    movieList.innerHTML = ""
    arr.forEach((movie,index) => {
        let item = document.createElement('li') 
        let itemSpan = document.createElement('span')
        itemSpan.textContent = movie
        let editForm = document.createElement('form')
        let editInput = document.createElement('input')
        let submitBtn = document.createElement('button')
        submitBtn.textContent = "Submit"
        editInput.style.display = "none"
        submitBtn.style.display = "none"
        editForm.appendChild(editInput)
        editForm.appendChild(submitBtn)
        let editBtn = document.createElement('button')
        editBtn.textContent = "Edit"
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"
        deleteBtn.id = index
        item.appendChild(itemSpan)
        item.appendChild(editForm)
        item.appendChild(editBtn)
        item.appendChild(deleteBtn)
        editBtn.addEventListener('click', (evt) => {
            evt.target.style.display = "none"
            itemSpan.style.display = "none"
            editInput.style.display = "inline"
            submitBtn.style.display = "inline"
        })

        editForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            let editObj = {
                index,
                newMovie: editInput.value
            }
            axios.put(baseURL, editObj)
                .then(response => {
                    createMovieList(response.data)
                })
                .catch(err => console.log(err))
        })

        deleteBtn.addEventListener('click', deleteMovie)

        movieList.appendChild(item)
    })
}




const getMovie = () => {
    axios.get(baseURL)
        .then(response => {
            createMovieList(response.data)
        })
        .catch(err => console.log(err))
    }


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};



const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
    .then(res => {
        const data = res.data
        alert(data)
    })
    .catch(err => console.log(err))
}

const addMovie = evt => {
    evt.preventDefault()
    axios.post(baseURL + `/${input.value}`)
        .then(response => {
            createMovieList(response.data)
        })
        .catch(err => console.log(err))
    
    input.value = ""
}


const deleteMovie = evt => {
    axios.delete(baseURL + `/${evt.target.id}`)
        .then(response => {
            createMovieList(response.data)
        })
        .catch(err => console.log(err))
}


form.addEventListener('submit', addMovie)


fortuneBtn.addEventListener('click', getFortune)

complimentBtn.addEventListener('click', getCompliment)
getMovie()