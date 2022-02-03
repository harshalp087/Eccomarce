const {Router} =require('express').Router();

module.exports = (app) => {
  const express = require('express');
  const ROUTER = express.Router();
  const UserController=require('./user-controller');
  ROUTER.get('/users',UserController.findAll);
  ROUTER.get('/users/:id',UserController.findByPk);
  ROUTER.post('/users/add',UserController.createUser);
  ROUTER.put('/users/update/:id',UserController.updateUser);
  ROUTER.delete('/users/delete/:id',UserController.deleteUser);
  app.use('/app', ROUTER);
}
