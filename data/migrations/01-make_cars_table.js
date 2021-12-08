exports.up = function (knex) {
   knex.schema.createTable('cars', table => {
    // primary key
      table.increments() // defaults to 'id' if argument is omitted

      table.string('make', 128) // sqlite does not enforce the char limit VARCHAR(50)
      .notNullable()

      table.interger('mileage')
      .notNullable()

      table.string('slavage', 8) 
      .notNullable()

      table.string('transmission', 10) 
      .notNullable()

      table.string('vin', 13) 
      .unique()
      .notNullable()

    
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
}
