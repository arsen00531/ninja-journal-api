import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AbstractDocument {
    @PrimaryGeneratedColumn()
    id: number
}