import { PartialType } from '@nestjs/mapped-types';
import { CatInterface } from './cat-interface';

export class UpdateCat extends PartialType(CatInterface) {}
