import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"

import { Cart } from "./cart.entity"


@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({nullable: false})
    name: string

    @Column({nullable: false, unique: true})
    email: string

    @Column({nullable: false})
    password: string

    @Column({default: false})
    isAdm?: boolean

    @OneToMany(() => Cart, (cart) => cart.user)
    cart: Cart[]
}