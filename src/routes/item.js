const express = require('express');
const router = express.Router();

const Item = require('../models/item');

router.get('/:id', (req, res, next) => {
  Item.findById(req.params.id, function (err, item) {
    res.json(item);
  })
});

//get data / item
router.get('/', (req, res) => {
  Item.find( function(err, items) {
    if (err) { err; }
    else {
      res.json(items);
    }
  })
});

// add data - /item - POST
router.post('/', (req, res) => {
  const item = new Item(req.body);
  item.save()
    .then(item => {
      res.status(200).json({item: 'Item agregado!'});
    })
    .catch(err => {
      res.status(400).send({item: 'Error al agregar el item'});
    });
});

// update data /item/  - PUT
router.put('/:id', (req, res, next) => {
  Item.findById(req.params.id, function(err, item) {
    if(!item) {
      return next(new Error('no se pudo cargar documento'));
    }else {
      item.name = req.body.name;
      item.price = req.body.price;
      item.save()
        .then(item => {
          res.json('Actualizacion Completa')
        })
        .catch(err => {
          res.status(400).send('no se pudo actualizar');
        });
    }
  })
} );

router.delete('/:id', (req, res, next) => {
  Item.findByIdAndRemove(req.params.id, function( err, item)  {
    if(err) { res.json( err );    }
    else {
      res.json('item eliminado satisfactoriamenete');
    }
  });
});

module.exports = router;
