import { Router } from 'express';

function createRouter(db) {
  const router = Router();
  const owner = '';

  // the routes are defined here

  return router;
}

export default createRouter;

router.post('/event', (req, res, next) => {
    db.query(
      'INSERT INTO details1 (sno,name,address) VALUES (?,?,?)',
      [req.body.sno, req.body.name, req.body.address],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  router.get('/event', function (req, res, next) {
    db.query(
      'SELECT id, name,address FROM details1 WHERE id=1',
      [id, 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.put('/event/:id', function (req, res, next) {
    db.query(
      'UPDATE details1 SET id=?,name=?, address=?,  WHERE id=? ',
      [req.body.id,req.body.name, req.body.address, req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/event/:id', function (req, res, next) {
    db.query(
      'DELETE FROM details1 WHERE id=? ',
      [req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });