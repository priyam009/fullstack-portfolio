var db = require("../models");
var Op = db.Sequelize.Op;

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/projects", function(req, res) {
    db.Projects.findAll().then(function(result) {
      res.json(result);
    });
  });

  app.get("/find", function(req, res) {
    var data = {
      hashTags: req.body
    };
    console.log("hashtags", data.hashTags);

    function substring() {
      var query = [];
      for (var i = 0; i < data.hashTags.length; i++) {
        query.push({
          [Op.substring]: data.hashTags[i]
        });
      }
      return query;
    }

    db.Projects.findAll({
      where: {
        hashTags: {
          [Op.and]: substring()
          // [
            //     { [Op.substring]: data.hashTags[0] },
            //     { [Op.substring]: data.hashTags[1] },
            //     { [Op.substring]: data.hashTags[2] }
          // ]
        }
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
