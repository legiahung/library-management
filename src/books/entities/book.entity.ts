import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
export enum BookStatus {
    AVAILABLE = 'available',
    BORROWED = 'borrowed',
    RESERVED = 'reserved',
    MAINTENANCE = 'maintenance',
    LOST = 'lost',
}
@Entity('books')
export class Book {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column({ unique: true })
    isbn: string; // International Standard Book Number
    @Column({ type: 'text', nullable: true })
    description: string;
    @Column()
    publisher: string;
    @Column({ type: 'date' })
    publishedDate: Date;
    @Column()
    language: string;
    @Column({ default: 0 })
    pageCount: number;
    @Column({ nullable: true })
    coverImage: string;
    @Column({
        type: 'enum',
        enum: BookStatus,
        default: BookStatus.AVAILABLE,
    })
    status: BookStatus;
    @Column({ default: 1 })
    totalCopies: number; // Tổng số bản
    @Column({ default: 1 })
    availableCopies: number; // Số bản còn lại
    @Column({ default: 0 })
    totalBorrowings: number; // Số lần được mượn
    @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
    averageRating: number; // Điểm đánh giá TB
    @Column({ default: 0 })
    totalReviews: number;
    @Column({ default: false })
    isFeatured: boolean; // Sách nổi bật
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    // Relations
}