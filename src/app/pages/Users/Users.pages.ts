import { Component } from '@angular/core';
import { UserService } from '../../services/Users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    templateUrl: './Users.pages.html',
    styleUrls: ['./Users.pages.css']
})

export class UsersPages {



    userForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        age: new FormControl('', Validators.required),
        telefone: new FormControl('', [Validators.required]),
    });



    private userId: string = '';
    private loading: boolean = false;
    private chave: string = '';

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) { }


    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        console.log(this.userId);
        if (this.userId != null) {
            this.getUser(this.userId);
        }
    }


    private getUser(id: string) {
        if (id != null) {

            this.loading = true;

            this.userService.getById(id)
                .subscribe((data: any) => {
                    const { doc } = data[0].payload;
                    console.log('Meu id ' + doc.id);
                    const result = doc.data();
                    this.chave = doc.id;
                    Object.keys(result)
                        .filter(item => item !== 'id')
                        .forEach((item) => {
                            this.userForm.controls[item].setValue(result[item]);
                        })

                    this.loading = false;

                })
        }
    }



    onSubmit() {
        this.loading = true;
        console.log('meu id ' + this.chave);


        if (this.chave != '') {

            console.log('Vou atualizar a chave ');

            this.userService.update(this.chave, this.userForm.value).then((data) => {
                console.log('result', data)
                this.loading = false;
                this.router.navigate(['/']);
            }).catch((err) => this.loading = false)


        } else {
            console.log('Vou criar a chave ');

            this.userService.create(this.userForm.value).then((data) => {
                console.log('result', data)
                this.loading = false;
                this.router.navigate(['/']);
            }).catch((err) => this.loading = false)

        }

    }
}



