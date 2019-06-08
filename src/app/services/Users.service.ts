import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import uuid from 'uuid';



@Injectable({ providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient, private db: AngularFirestore){}

    
    
    getById(id: string) {
        return this.db.collection(
            'users', ref => ref.where('id', '==', id)
        ).snapshotChanges();


    } 
    
    
    
    create(data){
        console.log(data);

        console.log(this.db);

        return this.db.collection('users').add({
            id: uuid(),
            ...data,
        });
    }



    update(chave, data){
        console.log(data);

        console.log(this.db);

        console.log('minha chave esta chegando aqui' + chave);

        return this.db.collection('users').doc(chave).update({
            ...data,
        });
    }

    listUsers(){
        return this.db.collection('users').snapshotChanges();
    }





}