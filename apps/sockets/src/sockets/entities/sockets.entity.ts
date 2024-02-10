import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SocketsEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string
}