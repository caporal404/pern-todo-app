import pool from "../config/db.js"

const todos = [
	{ value: 'Aller a l\'entretien', isCompleted: false, is_editing: false },
	{ value: 'Terminer le rapport', isCompleted: false, is_editing: false },
	{ value: 'Deployer le projet', isCompleted: true, is_editing: false },
	{ value: 'Planifier la réunion', isCompleted: false, is_editing: false },
	{ value: 'Nettoyer la boîte mail', isCompleted: false, is_editing: false }
]

const seed = async () => {
	try {
		await pool.query('DELETE FROM todos')

		const SQL_INSERT_TODO = 'INSERT INTO todos (value, "isCompleted", is_editing) VALUES ($1, $2, $3)'

		for (const todo of todos) {
			await pool.query(SQL_INSERT_TODO, [todo.value, todo.isCompleted, todo.is_editing])
		}

		console.log('Seed terminé : 5 todos insérés')
	} catch (err) {
		console.error('Erreur lors du seed : ', err)
		process.exit(1)
	} finally {
		await pool.end()
		process.exit(0)
	}
}

seed()

