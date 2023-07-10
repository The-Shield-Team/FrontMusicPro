import { detailsOrder } from "./details-order";

export interface order {
  id: number;
  total: number;
  status: string;
  products: detailsOrder;
}
