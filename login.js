
app.post('/login', function(request, response) {
	var username = request.body.user;
    var password = request.body.pass;
    
	if (username && password) {
		connection().query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password], (error, results, fields)=>{
			if (err) {
				response.redirect('/');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end()
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
