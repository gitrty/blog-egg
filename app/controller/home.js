'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.user.find(ctx.query);
    ctx.body = user;
    console.info(ctx.query) // get 请求获取参数
  }

  async about() {
    const { ctx } = this
    ctx.body = 'hi about'
  }

  async login() {
    const { ctx } = this
    ctx.body = JSON.stringify({ name: 'ppp', age: '123' })
    console.info(ctx.request.body) // post 请求参数
  }
}

module.exports = HomeController;
