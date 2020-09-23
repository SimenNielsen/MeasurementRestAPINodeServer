module.exports = {
    HOST: "testsensordatadb.postgres.database.azure.com",
    USER: "kmsuperuser@testsensordatadb",
    PASSWORD: "Skole1234",
    DB: "postgres",
    dialect: "postgres",
    ssl: true,
    dialectOptions: {
       ssl: {
          require: true
       }
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};