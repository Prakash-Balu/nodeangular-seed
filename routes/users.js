var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	var username= req.body.username;
	var password = req.body.password;
	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM user WHERE name = ?',[username], function (error, results, fields) {
			console.log(results.length);
			if (error) {
				// console.log("error ocurred",error);
				res.send({
					"code":400,
					"failed":"error ocurred"
				})
			} else {
				// console.log('The solution is: ', results);
				if(results.length >0){
					if(results[0].password == password){
						res.send({
							"code":200,
							"message":"login sucessfull"
						});
					} else {
						res.send({
							"code":204,
							"message":"Username and password does not match"
						});
					}
				} else {
					res.send({
						"code":204,
						"message":"Username does not exists"
					});
				}
			}
		});
	});
});

//module.exports = router;


/*
 * GET customers listing.
 */
/*exports.list = function(req, res){
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM user',function(err,rows)     {
            
        if(err)
           console.log("Error Selecting : %s ",err );
     
            res.render('users',{page_title:"Customers - Node.js",data:rows});
                           
         });
       
    });
  
*/


module.exports = router;
