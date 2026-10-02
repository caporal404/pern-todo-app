import pool from "../config/db.js"

const todos = [
	{ value: 'Aller a l\'entretien', isCompleted: false, isEditing: false },
	{ value: 'Terminer le rapport', isCompleted: false, isEditing: false },
	{ value: 'Deployer le projet', isCompleted: true, isEditing: false },
	{ value: 'Planifier la réunion', isCompleted: false, isEditing: false },
	{ value: 'Nettoyer la boîte mail', isCompleted: false, isEditing: false }
]

const seed = async () => {
	try {
		await pool.query('DELETE FROM todos')

		const SQL_INSERT_TODO = 'INSERT INTO todos (value, is_completed, is_editing) VALUES ($1, $2, $3)'

		for (const todo of todos) {
			await pool.query(SQL_INSERT_TODO, [todo.value, todo.isCompleted, todo.isEditing])
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

