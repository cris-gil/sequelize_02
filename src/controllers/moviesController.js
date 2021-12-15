const res = require("express/lib/response");
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
    detail: (req, res, next) => {
        id=req.params.id
    movie.findById(id)
    .then((movies) => {
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
  },
    new: (req, res, next) => {
        model.findAll({
        order : [
            ['title', 'ASC']
        ]
        .then((movies) => {
            res.render('newestMovie', {movies:movies})
        })
        .catch((err) =>{
            next(err)})
        }) 
    },
    recommended: (req, res, next) => {
        model.findAll({
            where: {
                date_release:{
                limit: 10},
            order: [
             ['updatedAt', 'DESC']
            ] 
            }
        })
      
    }
};

module.exports = controller;