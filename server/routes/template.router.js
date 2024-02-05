const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */

router.get('/', rejectUnauthenticated, (req,res) => {
  const queryText = `
  SELECT * FROM "user";
  `
  pool.query(queryText)
  .then(result => {
    console.log('result:', result);
    // res.sendStatus(200)
    console.log('req.body', req.body);
    res.send(req.body)
  })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
