import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
export enum UserRole {
  ADMIN = 'admin',
  LIBRARIAN = 'librarian',
  MEMBER = 'member',
}

export enum MembershipStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  EXPIRED = 'expired',
}

@Entity('users')
export class User {
    @PrimaryColumn()
    id:string;
    @Column({unique: true})
    email: string;
    @Column()
    password: string;
    @Column()
    fullname:string;
    @Column({nullable: true})
    phoneNumber: string;
    @Column({nullable: true})
    address:string;
    @Column({
      type: 'enum',
      enum: UserRole,
      default: UserRole.MEMBER,
    })
    role:UserRole;
    @Column({
      type: 'enum',
      enum: MembershipStatus,
      default: MembershipStatus.ACTIVE,
    })
    membershipStatus: MembershipStatus;
    @Column ({type: 'date', nullable: true})
    membershipExpiryDate: Date;
    @Column({default: 0})
    borrowingLimit: number;// số sách tối đa được mượn cùng lúc
    @Column({default: 0})
    currentBorrowingCount: number; //Số sách đang mượn
    @Column({default: 0})
    totalBooksRead: number; // Tổng số sách đã đọc
    @Column({type: 'decimal',precision:10, scale:2, default:0})
    totalFines: number; // Tổng tiền phạt
    @Column({ nullable: true,  type: 'text' })
    refreshToken: string;
    @Column({ default: true })
    isActive: boolean;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    // Relations
    
}