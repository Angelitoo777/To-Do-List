import { Router } from 'express'
import { ToDoControllers } from '../controllers/controllersToDo.js'

export const routesToDo = Router()

routesToDo.get('/', ToDoControllers.getAll)
routesToDo.get('/:id', ToDoControllers.getById)

routesToDo.post('/', ToDoControllers.create)
routesToDo.patch('/:id', ToDoControllers.update)
routesToDo.delete('/:id', ToDoControllers.delete)
