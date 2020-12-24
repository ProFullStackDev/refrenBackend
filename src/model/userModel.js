const mongoose = require ('mongoose');

const RefrenUserModel = new mongoose.Schema (
  {
    name: {
      type: String,
      required: true,
    },
    items: [{type: String}],
    ID: {
      type: String,
    },
    address: {
      type: String,
    },
    pincode: {
      type: String,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

const RefUserModel = mongoose.model ('RefrenUserModel', RefrenUserModel);
module.exports = RefUserModel;
