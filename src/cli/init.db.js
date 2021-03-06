require('dotenv').config();

const express = require('express');
const configureDI = require('../config/di');

const app = express();
const diContainer = configureDI(app);

/**
 * @type {import('sequelize').Sequelize} mainDb
 */
const mainDb = diContainer.get('Sequelize');
diContainer.get('CarModel');
mainDb.sync();

/**
 * @type {import('connect-session-sequelize')} sessionStore
 */
const sessionStore = diContainer.get('SequelizeStore');
sessionStore.sync();
