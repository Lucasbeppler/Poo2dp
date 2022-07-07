import { getCustomRepository } from 'typeorm'
import { EmployeeRepository } from '../repositories/EmployeeRepository'

interface IEmployeeCreate {
  registration: string;
  name: string;
  occupation: string;
  salary: number;
}

interface IEmployeeShow {
  id: string
}

class EmployeeServices {

  async create({ registration, name, occupation, salary  }: IEmployeeCreate) {

    const employeeRepository = getCustomRepository(EmployeeRepository)
    const employee = employeeRepository.create({
      registration, name, occupation, salary
    })

    await employeeRepository.save(employee)

    return employee
  }

  async index() {
    const employeeRepository = getCustomRepository(EmployeeRepository)

    const employee = await employeeRepository.find()

    return employee;
  }

  async delete({ id }: IEmployeeShow) {
    const employeeRepository = getCustomRepository(EmployeeRepository)

    const employee = await employeeRepository.findOne({ id })

    if (!employee) {
      throw new Error('Employee id not found!!')
    }

    return await employeeRepository.delete({ id })
  }

}

export { EmployeeServices }