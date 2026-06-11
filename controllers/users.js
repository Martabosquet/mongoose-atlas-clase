import {usersService} from "../services/users.js";

const createUser =async(req, res) => {
    try {
        const user = await usersService.createUser(req.body);
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a user" });
    }
}

export const updateUser = async (req, res) => {
  try {
    const user = await usersService.updateUser(req.params.id, req.body)

    if (!user) {
      return res.status(404).json({
        ok: false,
        error: "User no encontrado",
      })
    }

    res.json({
      ok: true,
      data: user,
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error.message,
    })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await usersService.deleteUser(req.params.id)

    if (!user) {
      return res.status(404).json({
        ok: false,
        error: "User no encontrado",
      })
    }

    res.json({
      ok: true,
      message: "User eliminado",
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error.message,
    })
  }
}

export const usersController = {
    createUser,
    updateUser,
    deleteUser
}