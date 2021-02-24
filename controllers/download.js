const File = require('../model/File');
const uuid = require('uuid');

module.exports.create = async function (req, res) {
  const file = new File({
    _id: uuid.v1(),
    name: req.file ? req.file.filename : 'noname',
  });

  try {
    await file.save();
    res.status(201).json(file);
  } catch (error) {
    console.error(error.message);
  }
};
