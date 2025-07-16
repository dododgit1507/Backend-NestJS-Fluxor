import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id_user: string;

    @Column('varchar', { length: 50 })
    name: string;

    @Column('varchar', { length: 100, unique: true })
    email: string;

    @Column('varchar', { length: 60 })
    password: string;

    @Column('varchar', { length: 8 })
    dni: string;

    @Column('varchar', { length: 9 })
    phone: string;

    @Column({ default: true })
    isActive: boolean; 

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
