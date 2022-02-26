const express = require('express');
const router = express.Router();
const compositionsCtrl = require('../../controllers/compositions');
const multer = require('multer');
const upload = multer(); 

/*---------- Public Routes ----------*/
router.get('/', compositionsCtrl.index)
router.post('/', isAuthenticated, upload.single('photo'), compositionsCtrl.create);
router.put('/:compId', isAuthenticated, upload.single('photo'), compositionsCtrl.update)
router.delete('/:compId', isAuthenticated, compositionsCtrl.deleteComposition)


/*---------- Protected Routes ----------*/
function isAuthenticated(req, res, next){
	if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}



module.exports = router;