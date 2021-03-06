import { model, Types } from 'mongoose';
import { UserSchema } from '../schemas/user-schema';

const User = model('User', UserSchema);

export class UserModel {
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async findById(userId) {
    const user = await User.findOne({ _id: new Types.ObjectId(userId) });
    return user;
  }

  async create(userInfo) {
    const createdNewUser = await User.create(userInfo);
    return createdNewUser;
  }

  async findAll() {
    const users = await User.find({});
    return users;
  }

  async totalUsers(){
    const total_num = await User.find({}).count();
    return total_num;
  }

  async update({ userId, update }) {
    const filter = { _id: new Types.ObjectId(userId) };
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }

  async del(userId) {
    try{
      await User.deleteOne({ _id: new Types.ObjectId(userId)});
      return "Successed to delete";
    }catch{
      return "Failed to delete";
    }
  }
}

const userModel = new UserModel();

export { userModel };
