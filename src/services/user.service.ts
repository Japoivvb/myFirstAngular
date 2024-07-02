import{Injectable} from '@angular/core';
import { User } from '../app/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})

export class UserService{
    url="http://127.0.0.1:8000";

    constructor(private _http:HttpClient){

    }

	
// getUsers():Array<User>{
getUsers():Observable<Array<User>>{
    // return this.users;
    // return [new User(1,"joseService","123","jose@gmail.com") , new User(2,"joanService","123", "joan@gmail.com") ]
    return this._http.get<Array<User>>(this.url+"/user",{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    ); 

}

addUser(user:User):Observable<any>{
    // return this.users;
    // return [new User(1,"joseService","123","jose@gmail.com") , new User(2,"joanService","123", "joan@gmail.com") ]
    // first parameter verb and endpoint
    // second parameter, data
    return this._http.post(this.url+"/user/new",user,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    ); 

}
// getUser(num):Alumne{
// 	return this.alumnes[num];
// }
}
