import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class SesionLimite {
    @PrimaryGeneratedColumn('uuid')
    id_sesion_limite: string;

    @Column()
    fecha_inicio: Date;

    @Column()
    fecha_limite: Date;

    @Column()
    id_user: string;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.sesionesLimites)
    @JoinColumn({ name: 'id_user' })
    user: User;
}
