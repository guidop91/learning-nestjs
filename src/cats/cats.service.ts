import { Injectable } from '@nestjs/common';
import { CatInterface } from './dto/cat-interface';

@Injectable()
export class CatsService {
  private readonly cats: CatInterface[] = [];
  create(createCatDto: CatInterface) {
    this.cats.push(createCatDto);
  }

  findAll() {
    return `This action returns all cats`;
  }
}
