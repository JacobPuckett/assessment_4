let arr = ["Batman", "Elf", "Spiderman", "JamesBond", "Superman"]
// let images = require("./db.json")


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.", "An inch of time is an inch of gold.", "Believe it can be done."]
        let randomI = Math.floor(Math.random() * fortunes.length)
        let randomFortunes = fortunes[randomI]

        res.status(200).send(randomFortunes)
    },
    addMovie: (req,res) => {
        arr.push(req.params.movie)
        res.status(200).send(arr)
    },
    deleteMovie: (req,res) => {
        let { index } = req.params
        arr.splice(+index,1)
        res.status(200).send(arr)
    },
    getMovie: (req,res) => {
        res.status(200).send(arr)
    },

    editMovie: (req,res) => {
        let { index, newMovie } = req.body
        arr.splice(+index,1,newMovie)
        res.status(200).send(arr)
    },
    // getImg: (req,res) => {
    //     let { imgURL } = req.body
    //     let newImg = {
    //         id: imgURL
    //     }
    //     res.status(200).send(arr)
    // }


    getGame: (req,res) => {
        let gamesArr=["Dark Souls", "Elden Ring"]
        res.status(200).send(gamesArr)
    }
    
}



// let gamesArr = [
// {
//     gameName: "Dark Souls",
//     rated: "M"
// },
// {
//     gameName: "Elden Ring",
//     rated: "M"
// }
// ]


