import { Injectable } from '@nestjs/common';
import { CatInterface } from './interface/cat-interface';

@Injectable()
export class CatsService {
  private readonly cats: CatInterface[] = [];
  create(createCatDto: CatInterface) {
    this.cats.push(createCatDto);
  }

  findAll() {
    return this.cats;
  }
}
