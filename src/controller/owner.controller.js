import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getOwners = async (req, res) => {
  try {
    const allOwners = await prisma.owner.findMany();
    res.status(200).json(allOwners);
  } catch (error) {
    res.status(500).json("erro ao obter todos os donos", error);
  }
};

const createNewOwner = async (req, res) => {
  try {
    const { name, cpf, cellphone } = req.body;
    const newOwner = await prisma.owner.create({
      data: {
        name,
        cpf,
        cellphone,
      },
    });
    res.status(201).json(newOwner);
  } catch (error) {
    res.status(500).json("erro na criação do dono", error);
  }
};

export { createNewOwner, getOwners };
