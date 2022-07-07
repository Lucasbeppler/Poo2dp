// Cálculo do inss:
export function calculateInss(salary: number) {
  if ( salary < 1212 ) {
    return (7.5 / 100) * salary;
  }
  if ( salary >= 1212 && salary < 2455 ) {
    return (9 / 100) * salary;
  }
  if ( salary > 2455 ) {
    return (11 / 100) * salary;
  }
}
// Cálculo do irf:
export function calculateIrf(salary: number) {
  if (salary > 1910) {
    return (11 / 100) * salary;
  }
  else {
    return (8 / 100) * salary;
  }
}
// Cálculo do salario liquido:
export function calculateLiqSalary(salary: number, inss = 0, irf = 0) {
  return salary - inss - irf;
}

interface Employee {
  id: string;
  registration: string;
  name: string;
  occupation: string;
  salary: number;
  inss?: number;
  irf?: number;
  liqSalary?: number;
}

export function calculateByFunction(array: Employee[], occupation: string)
{
  const newArray = array.filter(employee => employee.occupation === occupation);
  return newArray.reduce((previousValue, item) => Number(item.liqSalary) + previousValue ,0)
}

