const mongoose = require("mongoose")

exports.expensesSchema = mongoose.Schema({
      title: {
            type: String,
            required: true
      }
}, { timestamps: true })

