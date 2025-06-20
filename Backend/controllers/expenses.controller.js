const Expenses = require("../models/expenses.model");

exports.getExpenses = async (req, res) => {
      try {
            const expenses = await Expenses.find();
            res.json(expenses);
      } catch (err) {
            res.status(500).json({ message: err.message });
      }
}

exports.addExpenses = async (req, res) => {
      try {
            const expense = new Expenses({
                  name: req.body.name,
                  amount: req.body.amount,
                  category: req.body.category,
            });
            const savedExpense = await expense.save();
            res.status(201).json({savedExpense});
      } catch (err) {
            res.status(400).json({ message: err.message });
      }
};

exports.addManyExpenses = async (req, res) => {
      try {
            if (!Array.isArray(req.body)) {
                  return res.status(400).json({ message: "Request body must be an array" });
            }
            const savedExpenses = await Expenses.insertMany(req.body);
            res.status(201).json({ savedExpenses });
      } catch (err) {
            res.status(400).json({ message: err.message });
      }
};
