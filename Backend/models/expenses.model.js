const mongoose = require("mongoose");
const expensesSchema = new mongoose.Schema(
      {
            name: {
                  type: String,
                  required: true,
            },
            amount: {
                  type: Number,
                  required: true,
            },
            category: {
                  type: String,
                  required: true,
            },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Expenses", expensesSchema);
