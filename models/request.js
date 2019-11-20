module.exports = function(sequelize, Datatypes) {
  var Requests = sequelize.define(
    "Requests",
    {
      name: {
        type: Datatypes.STRING
      },
      email: {
        type: Datatypes.STRING
      },
      message: {
        type: Datatypes.STRING
      }
    },
    {
      //Timestamps
      timestamps: true,
      updatedAt: false
    }
  );

  return Requests;
};
