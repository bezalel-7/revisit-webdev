const express = require('express')
const router = express.Router()

const { createTodo } = require('../controllers/createTodo')
const { fetchAllTodos } = require('../controllers/fetchAllTodos')
const { fetchOneid } = require('../controllers/fetchOneId')
const { updateTodo } = require('../controllers/updateTodo')
const { deleteTodo } = require('../controllers/deleteTodo')
//define api routes

router.post('/createTodo', createTodo)
router.get('/fetchAllTodos', fetchAllTodos)
router.get('/getById/:id', fetchOneid)
router.put('/updateTodo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)

module.exports = router
