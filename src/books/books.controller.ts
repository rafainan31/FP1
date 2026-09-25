import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('books')
export class BooksController {
    //menampilkan data
    @Get()
    findAll() : string {
        return 'menampilkan semua data buku';
    }

    //menyimpan data
    @Post()
    simpanData() : string {
        return 'menyimpan data buku';

    }


    //mengupdate data
    @Put()
    updateData(@Param('id') id: string) : string {
        return `mengupdate data buku dengan ID: ${id}`;
    }

    //menghapus data
    @Delete()
    deleteData(@Param('id') id: string) : string {
        return `menghapus data buku dengan ID: ${id}`;
    }
}
