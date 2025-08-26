module.exports = (req, res, next) => {
  const { name } = req.body;
  if (typeof name !== "string") {
    return res.status(400).json([{ name: "Не корректные данные" }]);
  }
  next();
};
