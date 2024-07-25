import { sql } from '../db.js'

const getAllPetsService = async () => {
  try {
    const pets = await sql`select * from pets`;
    return pets;
  } catch (error) {
    console.error("erro no servico getPet", error);
  }
};

const getPetByID = async (id) => {
  try {
    const pets = await sql`select * from pets where id = ${id} limit 1` 
    return pets
  } catch (error) {
    console.error("erro no serviço getPetByParam", error);
  }
};

const createPet = async (pet) => {
  try {
    const { id, name, age, species } = pet;
    await sql`insert into pets (id, name, age, species) 
      VALUES (${id}, ${name}, ${age}, ${species})`;
  } catch (error) {
    console.error('erro no serviço createPet', error)
  }
};

const updatePet = async (pet) => {
  try {
    const { id, name, age, species } = pet;
    await sql`update pets set name = ${name}, age = ${age}, species = ${species} WHERE id = ${id} `;
  } catch (error) {}
};

const deletePet = async (id) => {
  try {
    const pet = await sql`select * from pets where id = ${id}`
    await sql`delete from pets where id = ${id}`
    return { pet }
  } catch (error) {}
};

export { getAllPetsService, getPetByID, createPet, updatePet, deletePet}
