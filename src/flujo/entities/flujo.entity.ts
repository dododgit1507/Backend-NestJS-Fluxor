import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { AsignacionFlujo } from "../../asignacion_flujo/entities/asignacion_flujo.entity";

@Entity()
export class Flujo {

    @PrimaryGeneratedColumn('uuid')
    id_flujo: string;

    @Column()
    nombre: string;

    @Column('text')
    descripcion: string;

    @Column()
    estado: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => AsignacionFlujo, (asignacionFlujo) => asignacionFlujo.flujo)
    asignacionFlujos: AsignacionFlujo[];
}
