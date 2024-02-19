import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";

@Entity()
export class Group {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @Column()
    count: string

    @OneToMany(type => Student, student => student.id)
    students: Student[]
}