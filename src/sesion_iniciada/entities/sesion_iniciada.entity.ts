import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../../users/entities/user.entity" 

@Entity()
export class SesionIniciada {

    @PrimaryGeneratedColumn('uuid')
    id_sesion_iniciada: string;

    @Column('text')
    sesion_token: string;

    @Column('timestamp')
    expires_at: Date;

    @Column('timestamp')
    last_activity: Date;

    @Column()
    id_user: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.sesionesIniciadas)
    @JoinColumn({ name: 'id_user' })
    user: User;

}
