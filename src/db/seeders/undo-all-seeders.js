'use strict'
/** @type {import('sequelize-cli').Migration} */
const { hashSync, genSaltSync } = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {},
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {})
    await queryInterface.bulkDelete('Users', null, {})
    await queryInterface.bulkDelete('Todos', null, {})
  }
}
