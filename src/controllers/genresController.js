const res = require("express/lib/response");
const db = require("../database/models");
const model = require("../model/MovieModel");

const controller = {
    list: (req, res, next) => {
            model.findAll()
            .then((genres) => 
            {res.render("genresList", {genres : genres}) 
        })
        .catch((err) => res.render('error'))
    },
    detail: (req, res, next) => {
        id=req.params.id
    genre.findById(id)
    .then((genres) => {
        for(let i=0; i<genres.length; i++){
            if (genres[i].id == id) {
                res.render('genresDetail',{genres:genres[i]})
            } if (genres[i] != id){
                next('No encontrada')
            }
        }
    })
    .catch((err) =>{
        next(err)
      }); 
  },
}

module.exports = controller;