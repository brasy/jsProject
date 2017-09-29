/* just for fileupload to server
 * xying001 2017-09-27
 */

 var multer = require('multer'); 
 var md5 = require('md5'); 
 
 var upload = { path: process.cwd() + '/uploads' } 
 var storage = multer.diskStorage({ 
     //set upload file path, or to file server
     //Note: if you deliver a function, you need to mkfir. if   deliver a string, multer will create.
     destination: upload.path, 
     //TODO: storing file is seperated by directory
     //rename file
     filename: function (req, file, cb) { 
         var fileFormat = (file.originalname).split("."); 
         cb(null, file.fieldname + "." + fileFormat[fileFormat.length - 1]); 
     } 
 }); 
 
 
 //add config to multer
 var upload = multer({ 
     storage: storage, 
     //other configuration refer to multer limits
     //limits:{} 
 }); 
 //export object
 module.exports = upload; 



//in router.js to use method
var upload = require('./fileupload.js');
router.post('/importFile', upload.single('avatar'), function (req,res,next) {
 if(req.file){
  res.send("file updata success!");
 } 
});
