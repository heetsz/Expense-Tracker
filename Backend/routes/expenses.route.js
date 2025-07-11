const express = require("express")
const router = express.Router()

const expensesController = require("../controllers/expenses.controller")
router.get("/", expensesController.getExpenses)
router.post("/", expensesController.addExpenses);
router.post("/addmany", expensesController.addManyExpenses);

module.exports = router;