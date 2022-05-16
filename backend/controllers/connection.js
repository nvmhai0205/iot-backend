const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6492654',
    password: 'JLwusx8HDk',
    database: 'sql6492654',
    port: '3306'
});
connection.connect((errors) => {
    if (errors) {
        console.log('connection database failed...' + errors.stack);
        return;
    } else {
        console.log('connection database sucessful...');
    }
})

module.exports = connection;