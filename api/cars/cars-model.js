const db = require('../../data/db-config')

const getAll = () => {
return db('cars')

}

const getById = id => {
  return db('cars').where('id', id).first()
}

const getByVin = vin => {
  return db('cars').where('vin', vin).first()
}

const create = async car => {
 const [id] = await db('cars').insert(car)
 return getById(id)
}



const updateById = async (id, car) => {
  await db('cars').where('id', id).update(car)
  return getById(id)
}

const deleteById = id => {
  return db('cars').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByVin
}