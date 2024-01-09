const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    const dbQuery = 'SELECT * FROM "treats";';
  
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
router.post('/', (req, res) => {
    const newSong = req.body;
    const queryText = `INSERT INTO "treats" ("name", "description", "pic")
    VALUES
      ($1, $2, $3);`;
    const queryArgs = [
      newSong.name,
      newSong.description,
      newSong.pic,
    ];
  
    pool
      .query(queryText, queryArgs)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('ERROR:', err);
  
        res.sendStatus(500);
      });
});  

// PUT
router.put('/:id', (req, res) => {
    const updatedTreatId = parseInt(req.params.id);
    const updatedDescription = req.body.description;

    const queryText = `
        UPDATE "treats"
        SET "description" = $1
        WHERE "id" = $2;`;

    const queryArgs = [updatedDescription, updatedTreatId];

    pool
        .query(queryText, queryArgs)
        .then(() => {
            console.log(`PUT /treats/${updatedTreatId} - SUCCESS`);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error(`PUT /treats/${UpdatedTreatId} - ERROR:`, error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// DELETE
router.delete('/:id', (req, res) => {
    const deleteTreats = parseInt(req.params.id);
    console.log(deleteTreats);
    const queryText = `DELETE FROM "treats" WHERE "id" = $1;`;

    pool
    .query(queryText, [deleteTreats])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log('Unable to delete treat', err)
        res.sendStatus(500);
    })
});

module.exports = router;
