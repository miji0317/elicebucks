import { Schema } from 'mongoose';

const OrderSchema = new Schema(
  {
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    product: {
        type: String,
        required: true
    }
    // productList: {
    //     type
    // } 여기도 product schema ref 해주기
  },
  {
    collection: 'orders',
    timestamps: true,
  }
);

export { OrderSchema };
