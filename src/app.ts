import express from 'express';
import { initializeAPI } from './api'

const app = express()

app.use(express.json())

initializeAPI(app)
app.listen(3000)