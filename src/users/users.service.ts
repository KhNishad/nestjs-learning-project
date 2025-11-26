import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    
    private users = [
        {
            id: 1,
            name: "Abdul Karim",
            phone: "01711223344",
            role: "admin",
            dob: "1990-05-12"
        },
        {
            id: 2,
            name: "Mizanur Rahman",
            phone: "01822334455",
            role: "manager",
            dob: "1988-09-20"
        },
        {
            id: 3,
            name: "Sadia Islam",
            phone: "01933445566",
            role: "staff",
            dob: "1995-03-25"
        },
        {
            id: 4,
            name: "Jahangir Alam",
            phone: "01755667788",
            role: "staff",
            dob: "1992-11-02"
        },
        {
            id: 5,
            name: "Farzana Akter",
            phone: "01666778899",
            role: "admin",
            dob: "1997-01-14"
        },
        {
            id: 6,
            name: "Touhid Hasan",
            phone: "01577889900",
            role: "manager",
            dob: "1985-07-30"
        },
        {
            id: 7,
            name: "Nasrin Sultana",
            phone: "01488990011",
            role: "staff",
            dob: "1998-12-05"
        },
        {
            id: 8,
            name: "Ahsan Habib",
            phone: "01799887766",
            role: "staff",
            dob: "1993-04-18"
        },
        {
            id: 9,
            name: "Rafia Chowdhury",
            phone: "01855664422",
            role: "manager",
            dob: "1991-06-07"
        },
        {
            id: 10,
            name: "Shahriar Hossain",
            phone: "01966554422",
            role: "staff",
            dob: "1996-02-11"
        }
    ]


    findAll() {
        return this.users
    }

    findOne(id:number) {
        return this.users.find(e => e.id == id)
    }

    createOne(body:CreateUserDto){
        const lastId = this.users.length ? this.users[this.users.length - 1].id : 0;
        this.users.push({id:lastId+1,...body});
       
    }

}
