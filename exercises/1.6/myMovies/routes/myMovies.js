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
        return res.sendStatus(400);
    }

    const filmsReachingMinimumDuration = MYMOVIES.filter(
        (movie) => movie.duration >= minimumDuration
      );
      return res.json(filmsReachingMinimumDuration);


      
});

router.get('/:id', function (req, res) {
    
    const filmFound = MYMOVIES.findIndex((movie) => movie.id == req.params.id);
    if (filmFound < 0){
        return res.sendStatus(404);
    }
    res.json(MYMOVIES[filmFound]);
});

// Create a pizza to be added to the menu.
router.post('/',(req,res) => {
    const title =
    req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined;
    const link =
    req?.body?.content?.trim().length !== 0 ? req.body.link : undefined;
  const duration =
    typeof req?.body?.duration !== 'number' || req.body.duration < 0
      ? undefined
      : req.body.duration;
  const budget =
    typeof req?.body?.budget !== 'number' || req.body.budget < 0
      ? undefined
      : req.body.budget;


    console.log('POST /movies');
    console.log('TITLE ' + title);
    console.log('DURATION ' + duration);
    

    if ( !title || !duration || !budget || !link) return res.sendStatus(400); // error code '400 Bad request'
    
    const existingFilm = MYMOVIES.find(
      (film) => film.title.toLowerCase() === title.toLowerCase()
    );
    if (existingFilm) return res.sendStatus(409);
  
    const lastMovieIndex = MYMOVIES?.length !== 0 ? MYMOVIES.length - 1 : undefined;
    const lastId = lastMovieIndex !== undefined ? MYMOVIES[lastMovieIndex]?.id : 0;
    const nextId = lastId + 1;
  
    const newMovie = {
      id: nextId, title, duration, budget, link};
  
    MYMOVIES.push(newMovie)
    res.json(newMovie);
  });

  router.delete('/:id', function (req, res) {
    const indexOfFilmFound = MYMOVIES.findIndex((film) => film.id == req.params.id);
    console.log('FILMFOUND ' + indexOfFilmFound);
  if (indexOfFilmFound < 0) return res.sendStatus(404);
    
    const itemsRemoved = MYMOVIES.splice(indexOfFilmFound, 1);
    const itemRemoved = itemsRemoved[0];
  
    return res.json(itemRemoved);
  });

  router.patch('/:id', function (req, res) {
    const title = req?.body?.title;
  const link = req?.body?.link;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;

  if (
    !req.body ||
    (title !== undefined && !title.trim()) ||
    (link !== undefined && !link.trim()) ||
    (duration !== undefined && (typeof req?.body?.duration !== 'number' || duration < 0)) ||
    (budget !== undefined && (typeof req?.body?.budget !== 'number' || budget < 0))
  )
    return res.sendStatus(400);

  const indexOfFilmFound = MYMOVIES.findIndex((film) => film.id == req.params.id);

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  const filmPriorToChange = MYMOVIES[indexOfFilmFound];
  const objectContainingPropertiesToBeUpdated = req.body;

  const updatedFilm = {
    ...filmPriorToChange,
    ...objectContainingPropertiesToBeUpdated,
  };

  MYMOVIES[indexOfFilmFound] = updatedFilm;

  return res.json(updatedFilm);
  
  });
  
  


module.exports = router;