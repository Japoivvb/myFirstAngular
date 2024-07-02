import{Injectable} from '@angular/core';
import { User } from '../app/user';

@Injectable({
    providedIn:"root"
})

export class UserService{
	
getUsers():Array<User>{
	// return this.users;
    return [new User(1,"joseService","123","jose@gmail.com") , new User(2,"joanService","123", "joan@gmail.com") ]
}
// getUser(num):Alumne{
// 	return this.alumnes[num];
// }
}
