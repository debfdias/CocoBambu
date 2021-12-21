'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', 
      [{
        title: 'Peixe frito',
        description: "Peixe frito com alho e cebola",
        time: 120,
        ingredients: ["alho", "cebola", "salsa", "peixe"],
        steps: ["refogar alho", "cortar peixe", "picar salsa"],
        image: 'https://i.pinimg.com/736x/7a/be/de/7abede153822008c79bd269e0fc2f577.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Macarronada",
        description: "Macarrão ao sugo",
        time: 30,
        ingredients: ["macarrão", "cebola", "tomate", "coentro"],
        steps: ["esquentar água", "cozinhar macarrão", "fazer molho de tomate", "misturar massa com molho"],
        image: 'http://anoteareceita.com.br/wp-content/uploads/2020/01/receitas-de-macarronada-1-e1579558840311.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },


      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Recipes', null, {});
  }
};
