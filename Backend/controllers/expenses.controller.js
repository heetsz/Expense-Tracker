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
