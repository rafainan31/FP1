import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
    //sample data buku
    private books: Book[] = [
        {
            id: 1,
            title: 'To kill a mockingbird',
            author: 'Harper Lee',
            isbn: '978-0-06-112008-4',
            PublisHerYear: 1960,
            isAvailabel: true
        },
        {
            id: 2,
            title: 'The Great Gatsby',
            author: 'George Orwell',
            isbn: '978-0-452-28423-4',
            PublisHerYear: 1948,
            isAvailabel: true
        }
    ];

    //Logic untuk menampilkan data
    findAll(): Book[]{
        return this.books;
    }

    //simpan data
    simpanData(createBookDto: CreateBookDto): Book {
        const newBook: Book = {
            id: this.books.length + 1,
            title: createBookDto.title,     
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            PublisHerYear: new Date().getFullYear(),
            isAvailabel: true,
        };
        this.books.push(newBook);
        return newBook;
    }

    //update data
    updateData(id: number, createBookDto: CreateBookDto): Book {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error(`Book with ID ${id} not found`);
        }       
        const updatedBook: Book = {
            id: id,
            title: createBookDto.title,
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            PublisHerYear: createBookDto.PublisHerYear,
            isAvailabel: this.books[bookIndex].isAvailabel,
        };
        this.books[bookIndex] = updatedBook;
        return updatedBook;
    }

    //hapus data
    deleteData(id: number): void {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error(`Book with ID ${id} not found`);
        }
        this.books.splice(bookIndex, 1);
    }
}