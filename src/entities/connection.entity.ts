import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "connection"})
export class Connection extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        nullable: true
    })
    name: string

    @Column({
        nullable: true
    })
    number: string

}
