var express = require('express');
var router = new express.Router();

function createRouter(db) {
  function handleIndex(req, res) {
    db.get('history', (err, history = []) => {
      if (err && !err.notFound) {
        console.error(err);
      } else {
        res.json(history);
      }
    });
  }

  function addHistory(req, res) {
    db.get('history', (err, history = []) => {
      if (err && !err.notFound) {
        console.error(err);
      } else {
        const newHistory = history.concat(req.body);

        db.put('history', newHistory, (err) => {
          if (err) {
            console.error(err);
          } else {
            res.sendStatus(200);
          }
        })
      }
    })
  }

  function eraseHistory(req, res) {
    db.del('history', (err) => {
      if (err) {
        console.error(err);
      } else {
        res.sendStatus(200);
      }
    })
  }

  router.get('/', handleIndex);
  router.post('/', addHistory);
  router.delete('/', eraseHistory);

  return router;
}


module.exports = createRouter;