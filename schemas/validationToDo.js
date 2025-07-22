import { z } from 'zod'

const validationToDo = z.object({
  title: z.string({
    invalid_type_error: 'Title must be a string',
    required_error: 'Title is required'
  }),
  description: z.string({
    invalid_type_error: 'Description must be a string'
  }).optional()
})

export function validateToDo (data) {
  return validationToDo.safeParse(data)
}
