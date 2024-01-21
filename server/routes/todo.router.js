const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Set up GET route to get all the to-do list from the database
router.get('/', (req, res) => {
    const dbQuery = `SELECT * FROM "toDoList"`;
  
    pool
      .query(dbQuery)
      .then((result) => {
        console.log(`Get stuff from the database`, result);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log(`Error making database query`, err);
        res.sendStatus(500);
      });
  });

  // Set up a POST route to add new to-do list to the database
  router.post('/', (req, res) => {
    const newTask = req.body;
    const queryText = `INSERT INTO "toDoList" ("task") VALUES ($1);`;
    const queryArgs = [
      newTask.task,
    ];

    pool
    .query(queryText, queryArgs)
    .then((result) => {
      // console.log(`Added to-do list to the database`, toDoList);
      res.sendStatus(201);
    })
    .catch((error) => {
      // console.log(`Error making database query ${queryTextText}`, error);
      res.sendStatus(500);
    })
  })

  // PUT

  // DELETE

module.exports = router;
