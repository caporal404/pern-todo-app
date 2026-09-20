import { Router } from 'express'


const router = Router()

router.get('', db.getTodos)
router.get('/:id', db.getTodoById)
router.post('', db.createTodo)
router.patch('/:id', db.updateTodo)
router.delete('/:id', db.deleteTodo)

export default router