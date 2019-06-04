import { Component } from '@angular/core';
import { UserService } from '../../services/Users.service';

@Component({
    templateUrl: './Users.pages.html',
    styleUrls: ['./Users.pages.css']
})

export class UsersPages {
    private loading: boolean = false;


    constructor(
        private userService: UserService

    ) { }



    createUsers() {
        this.loading = true
        this.userService.create({
            name: 'Emerson Rodrigues',
            email: 'emersonrf227@yahoo.com.br',
            age: 27,
            telefone: '+5511973223571'
        }).then((data) => {

            console.log('result', data)
            this.loading = false;

        }).catch((err) => this.loading = false)

    }


}



