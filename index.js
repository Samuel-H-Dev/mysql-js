//import mysql library
import mysql from 'mysql2';
import connectionInfo from './secretStuff.js';

//then we connect to (our) mysql database (have to give it our credentials)
const connection = mysql.createConnection(connectionInfo);

// runs simple query to get 2 movies
connection.query('SELECT * FROM movietable',
function (error, results){
    console.log(error); 
    //console.table the results
    console.table(results);
    connection.destroy();
});


