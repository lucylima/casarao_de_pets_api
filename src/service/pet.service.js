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
    const { title, description, duration } = video;
    await sql`insert into videos (id, title, description, duration) 
      VALUES (${videoId}, ${title}, ${description}, ${duration})`;
  } catch (error) {}
};

const updatePet = async (id, pet) => {
  try {
    const { title, description, duration } = video;
    await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id} `;
  } catch (error) {}
};

const deletePet = async (id) => {
  try {
    await sql`delete from videos where id = ${id}`;
  } catch (error) {}
};

export { getAllPetsService, getPetByID }
