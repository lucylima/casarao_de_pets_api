import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createOwner = async (req, res) => {
  try {
    const { name, cpf, cellphone } = req.body
    const newOwner = await prisma.owners.create({
      data: {
        name,
        cpf,
        cellphone
      }
    })
    return res.status(201).json({ newOwner })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const getOwners = async (req, res) => {
  try {
    const allOwners = await prisma.owners.findMany()
    if (allOwners) {
      return res.status(200).json({ allOwners })
    } else {
      return res.status(404).json('sem donos')
    }
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const findOwnerByCpf = async (req, res) => {
  try {
    const { cpf } = req.params
    const owner = await prisma.owners.findUnique({
      where: { cpf },
      include: { Adopted_pets: true }
    })
    if (owner) {
      return res.status(200).json({ owner })
    } else {
      return res.status(404).json('404 not found')
    }
  } catch (error) {
    return es.status(400).json({ error })
  }
}

const editOwner = async (req, res) => {
  try {
    const { id, name, cpf, cellphone } = req.body
    const editedOwner = await prisma.owners.update({
      where: {
        id: id
      },
      data: {
        name: name,
        cpf: cpf,
        cellphone: cellphone
      }
    })
    res.status(200).json(editedOwner)
  } catch (error) {}
}

const deleteOwner = async (req, res) => {
  try {
    const { id } = req.params
    const deletedOwner = await prisma.owner.delete({
      where: {
        id: id
      }
    })
    res.status(200).json(deletedOwner)
  } catch (error) {
    res.status(500).json('erro ao deletar dono')
  }
}

export {
  getOwners,
  findOwnerByCpf,
  createOwner,
  deleteOwner,
  editOwner
}
