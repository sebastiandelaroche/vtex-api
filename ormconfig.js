require('dotenv-safe').config();

module.exports = {
  "type": "mongodb",
  "url": process.env.DB_URL,
  "authSource": 'admin',
  "entities": [
    "src/database/entities/*.ts"
  ],
  "seeds": [
    "src/database/seeds/*.ts"
  ],
};
