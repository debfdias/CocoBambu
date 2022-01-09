# Recipes Manager - Coco Bambu

Simple application to manage recipes for a restaurant.

## :hammer_and_wrench: Tools and Architecture 

This project was developed in MVC architecture using the following tools:

- [Node JS](https://nodejs.org/en/)
- [React JS](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)

## :gear: How to run - Backend

Edit your database credentials in .ENV file.

```
git clone https://github.com/debfdias/CocoBambu
cd backend
yarn install
```

Run sequelize migrations and seeders before running the API:

```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
yarn start
```

Default credentials:

```
Email: admin@coco.com
Password: 123456
```


## :gear: How to run - Frontend

```
git clone https://github.com/debfdias/CocoBambu
cd frontend
yarn install
yarn start
```

