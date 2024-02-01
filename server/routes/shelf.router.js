const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get("/", (req, res) => {
  // initialize queryText
  const queryText = `SELECT * FROM "item";`;
  // send query to DB
  pool
    .query(queryText)
    .then((result) => {
      console.log("result", result);
      // send result in rows
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error getting items:", err);
      res.sendStatus(500);
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post("/", (req, res) => {
  // initialize queryText
  const queryText = `
    INSERT INTO "item" 
    ("description", "user_id")
    VALUES ($1, $2);
  `;
  const queryParams = [req.body.description, req.body.user_id];
  console.log('Req.Body.Description:', req.body.description);
  console.log('Req.Body.User_Id', req.body.user_id)
  // send POST query and queryParams to DB
  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error("Erroring posting item:", err);
      res.sendStatus(500);
    });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete("/:id", (req, res) => {
  // endpoint functionality
  const queryText = `
    DELETE FROM "item" 
    WHERE "id" = $1;
  `

  console.log(req.params.id)
  const queryParams = [req.params.id];
  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error("Error deleting item:", err);
      res.sendStatus(500)
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put("/:id", (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get("/count", (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get("/:id", (req, res) => {
  // endpoint functionality
});

module.exports = router;
