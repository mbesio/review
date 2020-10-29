var model = require('../db/model.js');

module.exports = controller = {
  get: (req, res) => {
    model.get((err, data) => {
      if (err) { res.status(400).send('Some error in the get controller');
      } else { res.status(200).send(data); }
    })
  },

  post: (req, res) => {
    model.post(req.body, (err, data) => {
      if (err) { res.status(400).send('Some error in the post controller');
      } else { res.status(201).send(data); }
    })
  },

  put: (req, res) => {
    model.put(req.params.id, req.body, (err, data) => {
      if (err) { res.status(400).send('Some error in the put controller');
      } else { res.status(201).send(data); }
    })
  },

  delete: (req, res) => {
    model.delete((err, data) => {
      if (err) { res.status(400).send('Some error in the delete controller');
      } else { res.status(202).send(data); }
    })
  }
}