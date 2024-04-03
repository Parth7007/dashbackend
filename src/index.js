const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const { Mantee, Mentor } = require('./mongodb');

const template = path.join(__dirname, '../templates');

app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', template);
app.use(express.urlencoded({ extended: false }));

app.get('/manteeinfo', (req, res) => {
  res.render('mantee_info');
});

app.get('/mentorinfo', (req, res) => {
  res.render('mentor_info');
});

app.post('/mantee', async (req, res) => {
  const data1 = {
    name: req.body.name,
    password: req.body.password,
    mail: req.body.mail,
    designation: req.body.designation,
    school: req.body.school,
    interest: req.body.interest,
    social: req.body.social,
  };

  await Mantee.create(data1);

  res.render('done');
});

app.post('/mentor', async (req, res) => {
  const data2 = {
    name: req.body.name,
    designation: req.body.designation,
    experience: req.body.experience,
    location: req.body.location,
    rating: req.body.rating,
    skills: req.body.skills,
    feed: req.body.feed,
    social: req.body.social,
    about: req.body.about,
    mail: req.body.mail,
  };

  await Mentor.create(data2);

  res.render('ok');
});

app.listen(3000, () => {
  console.log('Server Started');
});
