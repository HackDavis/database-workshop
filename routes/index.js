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
    if (!body.query) {
      res.status(403).json({ status: 'error', message: 'Missing Query' });
    }


    // Get the query
    const { query } = body;

    // Pass query into pg
    pg.query(`${query} LIMIT 100000`, (err, result) => {
      if (err) {
        console.log("ERROR IN QUERY ---", JSON.stringify(err.stack()))
        res.status(403).json({ status: 'error', message: err.stack() })
      }

      // We got some results, return it
      res.json({ status: 'success', message: JSON.stringify(result.rows) })
    })
  })

  return router
}

module.exports = routerFn;
