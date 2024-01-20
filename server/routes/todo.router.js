const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Set up GET route to get all the to-do
router.get('/', (req, res) => {
    const dbQuery = 'SELECT * FROM "table";';
  
    pool
      .query(dbQuery)
      .then((result) => {
        console.log('RESULT', result);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('ERROR:', err);
  
        res.sendStatus(500);
      });
  });

  // POST

  // PUT

  // DELETE

module.exports = router;
