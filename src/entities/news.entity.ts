import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "news"})
export class News {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        nullable: true
    })
    category_uz: string

    @Column({
        nullable: true
    })
    category_ru: string

    @Column({
        nullable: true
    })
    category_en: string

    @Column({
        nullable: true
    })
    title_uz: string

    @Column({
        nullable: true
    })
    title_ru: string

    @Column({
        nullable: true
    })
    title_en: string

    @Column({
        nullable: true
    })
    description_uz: string

    @Column({
        nullable: true
    })
    description_ru: string

    @Column({
        nullable: true
    })
    description_en: string

    @Column({
        nullable: true
    })
    img: string

    @Column({
        nullable: true
    })
    date: string
}
