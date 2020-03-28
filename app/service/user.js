
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    
    async find(query) {
        // "databasetest" 为mytest数据库数据表名
        const user = await this.app.mysql.query('select * from databasetest', '');
        return user;
    }
}

module.exports = UserService;