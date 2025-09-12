"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        completeName: "Roberto Mario",
        email: "rob77@gmail.com",
        password: "1503",
        typeRol: "Admin",
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        completeName: "Ramon Lopez",
        email: "ram.lop45@gmail.com",
        password: "4567",
        typeRol: "Colaborador",
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        completeName: "Maria Sarmiento",
        email: "marimari56@gmail.com",
        password: "1241",
        typeRol: "Admin",
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        completeName: "Luis Ramirez",
        email: "lu.ram78@gmail.com",
        password: "9823",
        typeRol: "Colaborador",
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        completeName: "Marisol Muñoz",
        email: "marmar89@gmail.com",
        password: "34678",
        typeRol: "Admin",
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        completeName: "Daniel Uriarte",
        email: "dan.uri54@gmail.com",
        password: "67456",
        typeRol: "Admin",
        createAt: new Date(),
        updateAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
