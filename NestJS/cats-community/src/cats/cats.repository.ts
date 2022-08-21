import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { CommentsSchema } from 'src/comments/comments.schema';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/cats.request.dto';

@Injectable()
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async findAll() {
    const CommentsModel = mongoose.model('comments', CommentsSchema);
    const result = await this.catModel
      .find()
      .populate('comments', CommentsModel);
    return result;
  }
  async existByEmail(email: string): Promise<boolean> {
    const result = await this.catModel.exists({ email });
    return result ? true : false;
  }

  async findByEmail(email: string): Promise<Cat | null> {
    const user = await this.catModel.findOne({ email });
    return user;
  }

  async findCatByIdWithoutPassword(
    id: string | Types.ObjectId,
  ): Promise<Cat | null> {
    // -@ => 해당하는 필드 중 @를 제외하고, 보안 상의 이유로 password 제외하고 가져옴
    const cat = await this.catModel.findById(id).select('-password');
    return cat;
  }

  async findByIdAndUpdateImg(id: string, fileName: string) {
    const cat = await this.catModel.findById(id);
    cat.imgUrl = process.env.BASE_URL + `media/${fileName}`;
    const newCat = await cat.save();
    return newCat.readOnlyData;
  }

  async create(cat: CatRequestDto): Promise<Cat> {
    return await this.catModel.create(cat);
  }
}
