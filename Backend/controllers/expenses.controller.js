exports.getExpenses = async (req, res) => {
      const users = await User.find();
      res.json(users);
}

