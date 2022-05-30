import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"

import { User } from "./user.entity"
import { Dvd } from "./dvd.entity"


@Entity()
export class Cart {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({default: false})
    paid: boolean

    @Column({type: "float", nullable: false})
    total: number

    @ManyToOne(() => User, (user) => user.cart, {
        eager: true
    })
    user: User

    @ManyToOne(() => Dvd, (dvd) => dvd.cart, {
        eager: true
    })
    dvd: Dvd
}