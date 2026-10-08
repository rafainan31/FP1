import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { User } from './entities/user.entity.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UserService {
  private users: User[] = [];
  
  // Fungsi untuk menampilkan semua user
  findAll(): User[] {
    return this.users;
  }

  // Fungsi untuk menyimpan user baru 
  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.users.length + 1,
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password, 
    };
    
    this.users.push(newUser);
    return newUser;
  }

  // Fungsi findOne (pencarian)
  findOne(id: number): User {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new Error(`User dengan id ${id} tidak ditemukan`);
    }
    return user;
  }

  // Fungsi update 
  update(id: number, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new Error(`User dengan id ${id} tidak ditemukan`);
    }

    // Update hanya data yang dikirim di dto, gabungkan dengan data lama
    const updatedUser: User = {
      ...this.users[userIndex], // Ambil data lama
      ...updateUserDto,         
    };
    
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  // Fungsi delete 
  delete(id: number): string {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new Error(`User dengan id ${id} tidak ditemukan`);
    }
    this.users.splice(userIndex, 1);
    return `User dengan id ${id} berhasil dihapus`;
  }

  // Fungsi cari email
  findByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  } 

}