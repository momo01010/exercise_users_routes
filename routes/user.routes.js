const { Router } = require('express');
const router = Router();

router.get('/users', (req, res) => {
  res.send('Esto es un GET a users desde mi servidor')
})

router.post('/users', (req, res) => {
  console.log(req.body);
  const body = req.body
  res.status(200).json(body);
  // res.send('respondiendo al body');
})


//! completando el ejercicio del TODO  de express 
// router.post('/', (req, res) => {
//   res.status(200).json({
//     title: 'hello world'
//   })
// })

module.exports = router;