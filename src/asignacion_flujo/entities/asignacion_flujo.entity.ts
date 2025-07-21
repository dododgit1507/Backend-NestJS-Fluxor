import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Flujo } from "../../flujo/entities/flujo.entity";

@Entity()
export class AsignacionFlujo {

    @PrimaryGeneratedColumn('uuid')
    id_asignacion_flujo: string;

    @Column()
    id_user: string;

    @Column()
    id_flujo: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.asignacionFlujos)
    @JoinColumn({ name: 'id_user' })
    user: User;

    @ManyToOne(() => Flujo, (flujo) => flujo.asignacionFlujos)
    @JoinColumn({ name: 'id_flujo' })
    flujo: Flujo;
}
