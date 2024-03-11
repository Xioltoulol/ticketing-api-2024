import { Injectable } from '@nestjs/common';
import { Board, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BoardsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.BoardCreateInput): Promise<Board> {
    return await this.prisma.board.create({ data: data });
  }

  async findAll() {
    return await this.prisma.board.findMany();
  }

  async findOne(id: number) Promise<board>{
    return await this.prisma.board.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.BoardUpdateInput) {
    return await this.prisma.board.update({ where: { id }, data });
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
