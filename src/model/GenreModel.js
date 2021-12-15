const db = require("../database/models");

const GenreModel = {
  findAll: () => {
     let generos = db.Genres.findAll()
     return generos  
     .then((res) => {
      return res})
      .catch((err) =>{  
        return err
       } );
  },

  findById: (id) => {
    let genero = db.Generos.findById(id);
    return genero
      .then((res) => {
        return res;
      })
      .catch((err) =>{
        return err
       } );
  },

};
module.exports = GenresModel;