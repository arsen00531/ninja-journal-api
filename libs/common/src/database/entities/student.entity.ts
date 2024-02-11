import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group.entity";

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName:string

    @Column()
    secondName: string

    @Column()
    last_name: string

    @Column()
    email: string

    @Column()
    password: string

    @ManyToOne(type => Group, group => group.id)
    group: Group
}