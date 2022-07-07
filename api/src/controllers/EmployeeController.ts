import { Request, Response } from 'express'
import { EmployeeServices } from '../services/EmployeeServices'

class EmployeeController {

  async create(request: Request, response: Response) {
    let {registration, name, occupation, salary } = request.body
    const employeeServices = new EmployeeServices()
    try {
      const employee = await employeeServices.create({ registration, name, occupation, salary })
      return response.json(employee)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const employeeServices = new EmployeeServices()

    try {
      const employee = await employeeServices.index()
      return response.json(employee)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const employeeServices = new EmployeeServices()
    const { id } = request.params

    try {
      const employee = await employeeServices.delete({ id })
      return response.json({ message: 'Employee id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { EmployeeController }

