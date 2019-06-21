const mysql = require('mysql');
var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "XHFwPG0JeE",
    password: "W8sotGOaRF",
    database: "XHFwPG0JeE"
});


module.exports = {
    search_user: function (data) {
        return new Promise(
            function (resolve, reject) {
             let q=   con.query(
                    `select
                        *
                    from
                        user
                    WHERE
                       name LIKE '${data}%'
                    OR
                       mobile LIKE '${data}%'
                    OR
                       email LIKE '${data}%'
                    `,
                    function (error, result) {
                        if (error) {
                            reject(error)
                        } else {
                            resolve(result);
                        }
                    }
                )
            }
        )

    },
    insert_data: function (data) {
        return new Promise(
            function (resolve, reject) {
                con.query(
                    `insert
                           into
                        user
                    set
                         ?
                       
                    `,[data],
                    function (error, result) {
                        if (error) {
                            reject(error)
                        } else {
                            resolve(result);
                        }
                    }
                )
            }
        )

    }
}