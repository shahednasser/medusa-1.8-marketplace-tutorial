import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm"
import {
  Product as MedusaProduct,
} from "@medusajs/medusa"
import { Store } from "./store";

@Entity()
export class Product extends MedusaProduct {
  @Index("ProductStoreId")
  @Column({ nullable: true })
  store_id?: string;

  @ManyToOne(() => Store, (store) => store.products)
  @JoinColumn({ name: 'store_id', referencedColumnName: 'id' })
  store?: Store;
}