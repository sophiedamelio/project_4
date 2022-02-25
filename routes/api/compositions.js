const express = require('express');
const router = express.Router();
const compositionsCtrl = require('../../controllers/compositions');
const multer = require('multer');
const upload = multer(); 

/*---------- Public Routes ----------*/
router.get('/', compositionsCtrl.index)
router.post('/', isAuthenticated, upload.single('photo'), compositionsCtrl.create);
router.get('/', isAuthenticated, upload.single('photo'), compositionsCtrl.update)


/*---------- Protected Routes ----------*/
function isAuthenticated(req, res, next){
	if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}



module.exports = router;