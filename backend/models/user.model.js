const database = require("./../controllers/connection");

var User = function (data) {
    this.id = data.id;
    this.email = data.email;
    this.password = data.password;
};

User.login = (data, result) => {
    database.query(
        `select * from users where email = '${data.email}' and password = '${data.password}';`,
        (error, user) => {
            if (user.length == 0 || error) {
                result(null);
            } else {
                result(user);
            }
        }
    );
};

User.register = (data, result) => {
    const { email, password } = data;
    database.query(
        `INSERT INTO users (email, password)  VALUES ('${email}', '${password}');`, 
        (error) => {
        if (error) {
            result(null);
        } else {
            result(true);
        }
    });
};

module.exports = User;
