import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    res.status(500).json("erro na criação do dono");
  }
};

const getOwners = async (req, res) => {
  try {
    const allOwners = await prisma.owner.findMany();
    res.status(200).json(allOwners);
  } catch (error) {
    res.status(500).json("erro ao obter todos os donos");
  }
};

const getOwnerByParam = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await prisma.owner.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(owner);
  } catch (error) {
    res.status(500).json("erro ao encontrar dono por id")
  }
};

const deleteOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOwner = await prisma.owner.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json(deletedOwner);
  } catch (error) {
    res.status(500).json("erro ao deletar dono");
  }
};

export { createNewOwner, getOwners, getOwnerByParam, deleteOwner };
