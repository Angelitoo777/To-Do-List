import crypto from 'node:crypto'

export let ToDos = []

export class ToDoModels {
  static async getById ({ id }) {
    const getId = ToDos.find(todo => todo.id === id)
    return getId
  }

  static async create ({ input }) {
    const createToDo = {
      id: crypto.randomUUID(),
      ...input
    }

    ToDos.push(createToDo)

    return createToDo
  }

  static async update ({ id, input }) {
    const { title, description } = input

    const updateToDo = ToDos.findIndex(u => u.id === id)

    ToDos[updateToDo] = { ...ToDos[updateToDo], title, description }

    return ToDos[updateToDo]
  }

  static async delete ({ id }) {
    const initialLength = ToDos.length
    ToDos = ToDos.filter(todo => todo.id !== id)

    if (ToDos.length < initialLength) {
      return true
    }
  }
}
