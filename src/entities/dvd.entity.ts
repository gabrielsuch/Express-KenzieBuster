import {Entity, Column, JoinColumn, OneToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm"

import { Cart } from "./cart.entity"
import { Stock } from "./stock.entity"


@Entity()
export class Dvd {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({nullable: false})
    name: string

    @Column({nullable: false})
    duration: string

    @OneToOne(() => Stock, {
        eager: true
    })
    @JoinColumn()
    stock: Stock
    
    @OneToMany(() => Cart, (cart) => cart.dvd)
    cart: Cart[]
}