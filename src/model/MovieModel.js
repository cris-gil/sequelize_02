const db = require("../database/models");

const MovieModel = {
  findAll: () => {
     let peliculas = db.Movies.findAll()
     return peliculas  
     .then((res) => {
      return res})
      .catch((err) =>{  
        return err
       } );
  },

  findById: (id) => {
    let pelicula = db.Movies.findById(id);
    return pelicula
      .then((res) => {
        return res;
      })
      .catch((err) =>{
        return err
       } );
  },

};
module.exports = MovieModel;