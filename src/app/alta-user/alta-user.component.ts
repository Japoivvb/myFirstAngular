import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-alta-user',
  templateUrl: './alta-user.component.html',
  styleUrl: './alta-user.component.css'
})
export class AltaUserComponent implements OnInit {
  nomUser:string|null = " ";
  users:string[]=[]
  usersJson:any=[]
  usersDatabase:any=[]
  usersObjects:User[]=[]
  objectKeys = Object.keys;

  constructor(private _router: Router, private _activRoute: ActivatedRoute, private _userService:UserService) {

  }


  ngOnInit(): void {
    //initialize users
    this.users=["xavi", "martina","toni"]
    this.usersJson={"123":"xavi", 
                    "456":"martina",
                    "789":"toni"}
    this.usersDatabase=[
      {
          "id": 1,
          "name": "jose",
          "password": "123",
          "email": "jose@gmail.com"
      },
      {
          "id": 2,
          "name": "juan",
          "password": "456",
          "email": "juan@gmail.com"
      },
      {
          "id": 3,
          "name": "luis",
          "password": "789",
          "email": "luis@gmail.com"
      },
      {
          "id": 4,
          "name": "Joselito",
          "password": "12345",
          "email": "joseli@to.com"
      }
  ]

  this.usersObjects=[new User(1,"jose","123","jose@gmail.com") , new User(2,"jose","123", "joan@gmail.com") ]

  this.usersObjects= this._userService.getUsers();
    


    //read from list parameters
    this._activRoute.paramMap.subscribe({
       next:(params) => {
        console.log(params.get('nomUser'));
        this.nomUser = params.get('nomUser');

      },
       error:(missagteError) => {
        console.error(missagteError)

      },
      complete:()=>{
        console.log("try to get a parameter in complete")
      }
    }
    )      
  }
}

