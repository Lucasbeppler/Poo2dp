import { Container, Table, Content, Title, Form, Input, Button, H1, ButtonIcon } from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import * as calc from "../../services/calculation";

interface Employee {
  id: string;
  registration: string;
  name: string;
  occupation: string;
  salary  : number;
  inss?: number;
  irf?: number;
  liqSalary?: number;
}

export function ListEmployee() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [registration, setRegistration] = useState("");
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [salary, setSalary] = useState("");

  function getEmployees() {
    api({
      url: "employee"
    })
    .then(res => {
      const newEmployees = res.data.map((employee: Employee) => {
        let newEmployee = {
          ...employee,
          inss: calc.calculateInss(employee.salary),
          irf: calc.calculateIrf(employee.salary),
          liqSalary: 0
        }
        
        newEmployee.liqSalary = calc.calculateLiqSalary(newEmployee.salary , newEmployee.inss ,newEmployee.irf );
        return newEmployee;
      })
      setEmployees(newEmployees);
      console.log(newEmployees);
    })
  }

  function createEmployee(event: any) {
    event.preventDefault();

    api({
      method: "post",
      url: "employee",
      data: {
        registration,
        name,
        occupation,
        salary
      }
    })
    .then(res => {
      let employee = res.data;
      employee = {
        ...employee,
        inss: calc.calculateInss(employee.salary),
        irf: calc.calculateIrf(employee.salary),
        liqSalary: 0
      }

      employee.liqSalary = calc.calculateLiqSalary(employee.salary , employee.inss ,employee.irf );

      setEmployees([...employees, employee]);
    })
  }

  function deleteEmployee(employee: Employee) {
    api({
      method: "delete",
      url: "employee/" + employee.id
    })
    .then(res => {
      const newEmployees = employees.filter(e => e.id !== employee.id);
      setEmployees(newEmployees);
    })
  }

  useEffect(() => {
    getEmployees();
  }, [])

  return (
    <Container>
      <H1> Totais </H1>
      <Content>
        <Title>Total de salário da função Dev. Junior: R$ { calc.calculateByFunction(employees, "Dev. Junior" ) } </Title>

        <Title>Total de salário da função Dev. Pleno: R$ { calc.calculateByFunction(employees, "Dev. Pleno" ) } </Title>

        <Title>Total de salário da função Dev. Senior: R$ { calc.calculateByFunction(employees, "Dev. Senior" ) } </Title>

        <Title>Total de salário da função Coordenador: R$ { calc.calculateByFunction(employees, "Coordenador" ) } </Title>

      </Content>

      <H1> Novo </H1>
      <Content>
        <Form onSubmit={createEmployee} >
          <Input placeholder="registration" value={registration} onChange={(event) => { setRegistration(event.target.value) }} />
          <Input placeholder="name" value={name} onChange={(event) => { setName(event.target.value) }} />
          <Input placeholder="occupation" value={occupation} onChange={(event) => { setOccupation(event.target.value) }} />
          <Input placeholder="salary" value={salary} onChange={(event) => { setSalary(event.target.value) }} type="number" />

          <Button type="submit" >Salvar</Button>
        </Form>
      </Content>

      <H1> Listagem </H1>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Função</th>
              <th>Salario</th>
              <th>Inss</th>
              <th>Irf</th>
              <th>Salario Liquido</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => 
              (<tr key={employee.id} >
                <td>{employee.name}</td>
                <td>{employee.occupation}</td>
                <td>R$ {employee.salary}</td>
                <td>R$ {employee.inss}</td>
                <td>R$ {employee.irf}</td>
                <td>R$ {employee.liqSalary}</td>
              <td><Button type="button" onClick={() => deleteEmployee(employee)} >Apagar</Button></td>
              </tr>)
            )}
          </tbody>
        </Table>
      </Content>

    </Container>
  )
}