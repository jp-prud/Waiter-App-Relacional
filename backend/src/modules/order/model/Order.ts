import { model, Schema } from 'mongoose';



export const Order = model(
  'Order',
  new Schema({
    table: {
      type: String,
      required: true,
    },
    status: {
      default: 'WAITING',
      type: String,
      enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    },
    createAt: {
      default: Date.now,
      type: String,
    },
    products: {
      required: true,
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
  }),
);
