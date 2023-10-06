var express = require ('express');
var router = express.Router();

const MYMOVIES = [
    {
        id: 1,
        title: 'Acide',
        duration: 99,
        budget: 12,
        link:'https://www.allocine.fr/film/fichefilm_gen_cfilm=288263.html'
    },

    {
        id:2,
        title:'Oppenheimer',
        duration:180,
        budget:100,
        link:'https://www.allocine.fr/article/fichearticle_gen_carticle=1000033548.html'
    },

    {
       id:3,
       title:'La Nonne 2',
       duration:110,
       budget: 38,
       link:'https://www.allocine.fr/film/fichefilm_gen_cfilm=273411.html'
    }
]

router.get('/', function(req, res, next) {
  
  const minimumDuration = req?.query['minimum-duration']
    ? Number(req?.query['minimum-duration']) 
    : undefined;
    
    console.log('FILTRE : ' + minimumDuration);
    if (minimumDuration === undefined){
        return res.json(MYMOVIES);
    }
    if (typeof minimumDuration !== 'number' || minimumDuration <=0){
        return res.json('Wrong minimum duration');
    }

    const filmsReachingMinimumDuration = MYMOVIES.filter(
        (movie) => movie.duration >= minimumDuration
      );
      return res.json(filmsReachingMinimumDuration);
});




  


module.exports = router;