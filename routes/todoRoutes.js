import { Router } from 'express'
import * as controller from '../controllers/todoController.js'

const router = Router()

router.get('', controller.getTodos)
router.get('/:id', controller.getTodoById)
router.post('', controller.createTodo)
router.patch('/:id', controller.updateTodo)
router.delete('/:id', controller.deleteTodo)

export default router