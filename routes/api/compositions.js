const express = require('express');
const router = express.Router();
const compositionsCtrl = require('../../controllers/compositions');

/*---------- Protected Routes (all are private) ----------*/
router.get('/', compositionsCtrl.index);
router.post('/', isAuthenticated, compositionsCtrl.create);
router.put('/:compId', isAuthenticated, compositionsCtrl.update);
router.delete('/:compId', isAuthenticated, compositionsCtrl.deleteComposition);

function isAuthenticated(req, res, next){
  if(req.user){
    next()
  } else {
    res.status(401).json({data: 'Not Authorized!'})
  }
}


module.exports = router;