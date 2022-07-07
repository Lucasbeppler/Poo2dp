import { Repository, EntityRepository } from 'typeorm'
import { Employee } from '../entities/Employee'

@EntityRepository(Employee)
class EmployeeRepository extends Repository<Employee> {

}

export { EmployeeRepository }

