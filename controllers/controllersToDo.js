import { ToDoModels, ToDos } from '../models/modelsToDo.js'
import { validateToDo } from '../schemas/validationToDo.js'

export class ToDoControllers {
  static async getAll (req, res) {
    const getToDo = ToDos

    return res.status(200).json(getToDo)
  }

  static async getById (req, res) {
    const { id } = req.params

    const getId = await ToDoModels.getById({ id })

    if (getId) {
      return res.status(200).json(getId)
    } else {
      return res.status(404).json('ToDo not found')
    }
  }

  static async create (req, res) {
    const validation = validateToDo(req.body)

    if (!validation.success) {
      return res.json('Error validation ToDo title and description')
    }

    const newToDo = await ToDoModels.create({ input: validation.data })

    return res.status(201).json(newToDo)
  }

  static async update (req, res) {
    const { id } = req.params
    const validation = validateToDo(req.body)

    if (!validation.success) {
      return res.json('Error validation ToDo title and description')
    }

    const updateToDo = await ToDoModels.update({ id, input: validation.data })

    if (updateToDo !== -1) {
      return res.json(updateToDo)
    } else {
      res.status(404).json({ message: '404 not found' })
    }
  }

  static async delete (req, res) {
    const { id } = req.params

    const deleteToDo = await ToDoModels.delete({ id })

    if (deleteToDo) {
      return res.status(204).send()
    } else {
      return res.status(404).json('404 not found')
    }
  }
}
