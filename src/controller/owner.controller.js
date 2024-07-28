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
    const allOwners = await prisma.owner.findMany({
      select: {
        id: true,
        name: true,
        cpf: true,
        cellphone: true,
        Pet: {
          select: {
            id: true,
            name: true,
            age: true,
            species: true,
          },
        },
      },
    });
    res.status(200).json(allOwners);
  } catch (error) {
    res.status(404).json("erro ao obter todos os donos");
  }
};

const getOwnerByParam = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await prisma.owner.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        Pet: {
          select: {
            id: true,
            name: true,
            age: true,
            species: true,
          },
        },
      },
    });
    res.status(200).json(owner);
  } catch (error) {
    res.status(404).json("erro ao encontrar dono por id");
  }
};

const editOwner = async (req, res) => {
  try {
    const { id, name, cpf, cellphone } = req.body;
    const editedOwner = await prisma.owner.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        cpf: cpf,
        cellphone: cellphone,
      },
    });
    res.status(200).json(editedOwner);
  } catch (error) {}
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

export { createNewOwner, getOwners, getOwnerByParam, deleteOwner, editOwner };
