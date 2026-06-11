import User from "../models/User.js";

const createUser = async (data) => {
  const user = new User(data)
  return await user.save()
}

export const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true })
}

export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id)
}

export const usersService = {
  createUser,
  updateUser,
  deleteUser
}