const ieps = require ("../models/ieps.js");
const fs = require ("fs");

const getAllIeps = (req, res) => {
  ieps.find((err, ieps) => {
    res.status(200).json(ieps);
  })  
};

const getByBairro = async (req, res) => {
  try {
    const { bairro } = req.query;
    const findBairro = await ieps.find({ bairro: bairro });
    res.status(200).json(findBairro);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

const getByZona = async (req, res) => {
  try {
    const { zona } = req.query;
    const findZona = await ieps.find({ zona: zona });
    res.status(200).json(findZona);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const createIeps = async (req, res) => {
  try {
    const { endereco, bairro, anoConstrucao, zona } = req.body;

    const newIep = new ieps({
      endereco,
      bairro,
      anoConstrucao,
      zona
    })
    const savedIep = await newIep.save();
    res.status(201).json(savedIep);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateIeps = async (req, res) => {
  try {
    const { endereco, bairro, anoConstrucao, zona } = req.body;
    const updatedIeps = await ieps.findByIdAndUpdate(req.params.id, {
      endereco,
      bairro,
      anoConstrucao,
      zona,
    });

    res.status(200).json(updatedIeps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
const deleteIeps =  (req, res) => {
    const id = req.params.id;
    
    ieps.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({message:'IEP deletado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
};

module.exports = {
    getAllIeps,
    getByBairro,
    getByZona,
    createIeps,
    updateIeps,
    deleteIeps
};