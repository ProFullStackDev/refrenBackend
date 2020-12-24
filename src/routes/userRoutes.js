const express = require('express');
const RefUserModel = require('../model/userModel');
const router = new express.Router();

// create user

router.post('/user/addUser', async (req, res) => {
  const newUser = new RefUserModel(req.body);

  try {
    await newUser.save();
    console.log(newUser);
    res.status(200).send({ message: 'Added user' });
  } catch (e) {
    res.status(401).send(e);
  }
});

// fetch user details with all search fields
router.get('/user/userDetails', async (req, res) => {
  const { searchData } = req.query;

  try {
    const searchQueryData = await RefUserModel.find({
      $or: [
        { name: { $regex: `^${searchData}`, $options: 'i' } },
        { items: { $regex: `^${searchData}`, $options: 'i' } },
        { ID: { $regex: `^${searchData}`, $options: 'i' } },
        { address: { $regex: `^${searchData}`, $options: 'i' } },
        { pincode: { $regex: `^${searchData}`, $options: 'i' } },
      ],
    });
    res.status(200).send(searchQueryData);
  } catch (e) {
    res.status(401).send(e);
  }
});

module.exports = router;
