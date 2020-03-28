/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585116370870_996';

  // add your middleware config here
  config.middleware = [];

  // 配置数据库   教程地址： https://blog.csdn.net/qq_30669833/article/details/89065279
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '',
      // 数据库名
      database: 'mytest',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,   // 关闭 csrfToken 安全验证（防止post请求403）
      // headerName: 'x-csrf-token',// 自定义请求头
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
