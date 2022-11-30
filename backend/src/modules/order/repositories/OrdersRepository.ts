import { Order } from '../model/Order';
import { IOrder, IUpdateRequestInput } from '../types';

class OrderRepository {
  index() {
    return Order.find().sort({ createAt: 1 }).populate('products.product');
  }

  updateStatus({ orderId, status }: IUpdateRequestInput) {
    return Order.findByIdAndUpdate(orderId, { status });
  }

  store({ table, products }: IOrder) {
    return Order.create({
      table,
      products,
    });
  }

  delete(orderId: string) {
    return Order.findByIdAndDelete(orderId);
  }
}

export default OrderRepository;
