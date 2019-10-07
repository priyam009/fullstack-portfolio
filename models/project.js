module.exports = function(sequelize, Datatypes) {
  var Projects = sequelize.define(
    "Projects",
    {
      project: {
        type: Datatypes.STRING,
        allowNull: false
      },
      github: {
        type: Datatypes.STRING,
        allowNull: false.STRING,
        validate: {
          isUrl: true
        }
      },
      url: {
        type: Datatypes.STRING,
        allowNull: false
      },
      hashTags: {
        type: Datatypes.STRING,
        allowNull: false
      }
    },
    {
      //Timestamps
      timestamps: true,
      updatedAt: false
    }
  );

  return Projects;
};
