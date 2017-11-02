var express = require('express');
var router = express.Router();

const routerFn = (pg) => {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index');
  });

  /* POST TO QUERY */
  router.post('/query', (req, res, next) => {
    // Take user input from req body
    const body = req.body;

    console.log('BODY', body)

    // No query
    if(!body)
      next('missing query');


    // Get the query
    const { query } = body;

    // Pass query into pg
    pg.query(`${query} LIMIT 1000`, (err, result) => {
      if (err) {
        return res.status(500).json({error: err.message});
      }

      // We got some results, return it
      console.log('RESULT', result)
      res.json({ status: 'success', message: JSON.stringify(result.rows) })
    })
  })

  return router
}

module.exports = routerFn;
