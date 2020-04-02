'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const baseUrl = '/api'

module.exports = app => {
  const { router, controller } = app;
  router.get(`${baseUrl}/`, controller.home.index)
  router.get('/about', controller.home.about)
  router.post(`${baseUrl}/login`, controller.home.login)
};
