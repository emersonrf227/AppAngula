import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/Users.service';



@Component({
    templateUrl: './UserList.pages.html',
    styleUrls: ['./UserList.pages.css']
})

export class UserListPages {
    private userId: string = '';
    private   usuarios = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
    ) { }

  

    ngOnInit() {


        this.listaUsuario()
    }

    listaUsuario() {


        this.userService.listUsers()
        .subscribe((data: any) => {
            
            //this.usuario = data;  
           
            
            Object.keys(data)
            .forEach((item) => {
                this.usuarios.push(data[item].payload.doc.data());
            }) 
            
            console.log('result', this.usuarios)


            
        })

        

        // .catch((err) => console.log('Deu erro'))

    }






}















