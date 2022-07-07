import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid' // identificador universal unico

@Entity('registration')
class Employee {

  @PrimaryColumn()
  id: string;

  @Column()
  registration: string;

  @Column()
  name: string;

  @Column()
  occupation: string;

  @Column()
  salary: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Employee }
