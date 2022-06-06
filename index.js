import app from './app.js';

app.listen(app.get('port'));

console.log("servidor en el puerto", app.get('port'));

