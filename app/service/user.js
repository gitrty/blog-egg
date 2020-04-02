
'use strict';

const Service = require('egg').Service;

class UserService extends Service {

    async find(query) {
        // user - 用户信息表
        // article - 文章信息表
        const user = await this.app.mysql.query('select * from user', '');
        return user;
    }
}

module.exports = UserService;

//查询一条数据，提到一个json对象{}
// let result = await this.app.mysql.get("user",{id:1});

// //查询多条数据，返回一个json数组[]
// let result = await this.app.mysql.select(
//     "user",
//     {
//         where:{id:1}
//     }
// );

// //追加数据记录
// let result = await this.app.mysql.insert(
//     "user",
//     {username:"lisi",password:"1234"}
// );

// //更新数据 （按主键进行更新）
// let result = await this.app.mysql.update('user',{ id:2, username:'赵四' });
// //更新数据 通过 sql 语句
// let results=await this.app.mysql.query(
//     'update user set username = ? where id = ?',
//     ["王五",2]
// );

// //删除数据
// let result= await this.app.mysql.delete('user',{ id:3 });

// //执行SQL
// this.app.mysql.query(sql,values);