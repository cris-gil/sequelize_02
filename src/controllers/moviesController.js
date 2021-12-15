const db = require("../database/models");
const model = require("../model/MovieModel");

const controller = {
     list: (req, res, next) => {
         model.findAll()
         .then((movies) => 
         {res.render("moviesList", {movies : movies}) 
     })
     .catch((err) => res.render('error'))
    },
     /* details: (req, res, next) => {
        id=req.params.id
    movie.findById(id)
    movie.then((movies) => {
        for(let i=0; i<movies.length; i++){
            if (movies[i].id == id) {
                res.render('moviesDetail',{movies:movies[i]})
            } if (movies[i] != id){
                next('No encontrada')
            }
        }
    })
    .catch((err) =>{
        next(err)
      }); 
  }, */
/*     new (req, res, next) => {
        return []
    },
    recommended (req, res, next) => {
        return []
    } */
};

module.exports = controller;