'use strict';

module.exports = app => {
  app.get ('/pets', (req, res) => {
    res.status (200).send ({message: 'listing pets'});
  });

  app.post ('/pets', (req, res) => {
    res.status (200).send ({message: 'inseting an pet'});
  });

  app.put ('/pets/:id', (req, res) => {
    const id = req.params.id;
    res.status (200).send ({message: `updating pet ${id}`});
  });

  app.delete ('/pets/:id', (req, res) => {
    req.status (200).send ({message: `delete pet ${id}`});
  });
};
