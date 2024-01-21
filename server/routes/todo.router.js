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
      .catch((error) => {
        console.log(`Error making database query`, error);
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
      // console.log(`Error making database query ${queryText}`, error);
      res.sendStatus(500);
    })
  })

  // Set PUT route to update any new entry to the to-do list
  router.put('/:id', (req, res) => {
    const toDoId = parseInt(req.params.id);

    const queryText = `UPDATE "toDoList" SET "status" = NOT "status" WHERE "id" = $1;`;
    
    pool
    .query(queryText, [toDoId])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Put error in updating database', error);
      res.sendStatus(500);
    });
  });
  
  // Set DELETE route to delete any current to-do item/list 
  router.delete('/:id', (req, res) => {
    const toDoId = parseInt(req.params.id);
    const queryText = `DELETE FROM "toDoList" WHERE "id" = $1;`;

    pool
    .query(queryText, [toDoId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(`Error in deleting database query ${queryText}`, error);
      res.sendStatus(500)
    });
  });

module.exports = router;
