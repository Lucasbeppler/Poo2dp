import { Router } from 'express'

import { EmployeeController } from './controllers/EmployeeController'

const routes = Router();

const employeeController = new EmployeeController()

routes.post('/employee', employeeController.create)
routes.get('/employee', employeeController.index)
routes.delete('/employee/:id', employeeController.delete)

export { routes }

