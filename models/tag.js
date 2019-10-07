module.exports = function(sequelize, Datatypes) {
  var Tags = sequelize.define("Tags", {
    hashTag: {
      type: Datatypes.STRING,
      allowNull: false
    },
    //Timestamps
    timestamps: true,
    updatedAt: false
  });
  return Tags;
};
