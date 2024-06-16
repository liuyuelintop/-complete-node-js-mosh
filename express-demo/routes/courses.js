const express = require('express');
const router = express.Router();
const courses = [
    { id: 1, name:'Course1'},
    { id: 2, name:'Course2'},
    { id: 3, name:'Course3'}
];
  router.get('/', (req, res) => {
      res.send(courses);
  });
  
  router.get('/:id',(req,res)=>{
    const course = courses.find(c=> c.id=== parseInt(req.params.id));
    if(!course) return res.status(404).send("The course with given id is not available");
    res.send(course);
  })
  
  router.post('/',(req,res)=>{
    const {error} = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);
  
    const course = {
      id: courses.length + 1,
      name: req.body.name
    };
    courses.push(course);
    res.send(course);
  })
  
  router.put('/:id',(req,res)=>{
    const course = courses.find(c=> c.id=== parseInt(req.params.id));
    if(!course) return res.status(404).send("The course with given id is not available");
  
    const {error} = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);
  
    course.name = req.body.name;
    res.send(course);
  });

  router.delete('/:id', (req,res) =>{
    const course = courses.find(c=> c.id=== parseInt(req.params.id));
    if(!course) return res.status(404).send("The course with given id is not available");
    // courses = courses.filter(c=> c.id!== parseInt(req.params.id));
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
  });

  function validateCourse(course){
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required()
    });
    return schema.validate(course);
  }

  module.exports = router;