import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;
}

//number!: number =50
//writer!: string ="철수"
//title!:string..
