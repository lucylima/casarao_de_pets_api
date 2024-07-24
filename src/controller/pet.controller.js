import { getAllPetsService, getPetByID } from "../service/pet.service.js";

const getAllPets = async (req, res) => {
  try {
    const getPets = await getAllPetsService();
    res.status(200).json({ getPets });
  } catch (error) {
    console.error("Erro no serviço de getPet", error);
  }
};

const getPetByParam = async (req, res) => {
  try {
    const petID = req.params.id;
    const pet = await getPetByID(petID);
    res.status(200).json({ pet });
  } catch (error) {
    console.error("Erro no controller getPetsByParam", error);
  }
};

export { getAllPets, getPetByParam };
