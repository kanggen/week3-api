var mysql = require('mysql');
var opt = {
    user: 'root',
    password: 'root',
    database: 'week3'
}

var pool = mysql.createPool(opt);
module.exports = function(sql, arr, ck) {
    pool.getConnection(function(err, con) {
        if (err) {
            err && ck(err)
        }
        con.query(sql, arr, function(err, result, field) {
            if (err) {
                err && ck(err)
            }
            ck && ck(null, result, field);
            con.release()
        })
    })
}