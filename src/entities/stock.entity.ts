import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"
import {v4 as uuid} from "uuid"


@Entity()
export class Stock {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({type: "int", nullable: false})
    quantity: number

    @Column({type: "float", nullable: false})
    price: number
}