import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { SesionIniciada } from "../../sesion_iniciada/entities/sesion_iniciada.entity";
import { SesionLimite } from "../../sesion_limite/entities/sesion_limite.entity";
import { AsignacionFlujo } from "../../asignacion_flujo/entities/asignacion_flujo.entity";

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

    @OneToMany(() => SesionIniciada, (sesionIniciada) => sesionIniciada.user)
    sesionesIniciadas: SesionIniciada[];

    @OneToMany(() => SesionLimite, (sesionLimite) => sesionLimite.user)
    sesionesLimites: SesionLimite[];

    @OneToMany(() => AsignacionFlujo, (asignacionFlujo) => asignacionFlujo.user)
    asignacionFlujos: AsignacionFlujo[];
}
