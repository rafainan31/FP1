import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    //menampilkan data
    @Get()
    findAll() {
        return this.booksService.findAll();
    }

    //menyimpan data
    @Post()
    simpanData(@Body() createBookDto: CreateBookDto) {
        return this.booksService.simpanData(createBookDto);

    }


    //mengupdate data
    @Put()
    updateData(@Param('id') id: string, @Body() createBookDto: CreateBookDto){
        return this.booksService.updateData(Number(id), createBookDto);
    }

    //menghapus data
    @Delete()
    deleteData(@Param('id') id: string){
        return this.booksService.deleteData(Number(id));
    }
}
