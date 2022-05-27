import { Schema } from 'mongoose';
import { boolean } from 'webidl-conversions';

const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    address: {
      type: new Schema(
        {
          postalCode: String,
          address1: String,
          address2: String,
        },
        {
          _id: false,
        }),
      required: true
    },
    total_cnt: {
      type: Number,
      required: true
    },
    total_price: {
      type: Number,
      required: true
    },
    delivered: {
      type : Date,
      default: Date.now,
      required: true
    },
    paid: {
      type: Boolean,
      required: true
    }
  },
  {
    collection: 'orders',
    timestamps: true,
  }
);

export { OrderSchema };