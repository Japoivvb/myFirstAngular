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
  nomUser: string | null = " ";
  users: string[] = []
  usersJson: any = []
  usersObjects: User[] = []
  objectKeys = Object.keys;
  user:User=new User();
  message="";

  constructor(private _router: Router, private _activRoute: ActivatedRoute, private _userService: UserService) {

  }


  ngOnInit(): void {
    //initialize users
    this.users = ["xavi", "martina", "toni"]
     
    // get from database
    this.getUsers();

    //read from list parameters
    this._activRoute.paramMap.subscribe({
      next: (params) => {
        console.log(params.get('nomUser'));
        this.nomUser = params.get('nomUser');

      },
      error: (missagteError) => {
        console.error(missagteError)

      },
      complete: () => {
        console.log("try to get a parameter in complete")
      }
    }
    )
  }

  addUser(){
    console.log("test");
    console.log(this.user);
    this._userService.addUser(this.user).subscribe({
      next:(result) =>{
        console.log(result)
        // to show confirmation message
        this.message=result["message"];
        window.confirm(this.message)
          this.getUsers();

         

      },
      error:(error) =>{
        console.error(error)
      }
    })
    

  }



  getUsers() {
    this._userService.getUsers().subscribe({
      next: (result) => {
        console.log(result);
        this.usersObjects = result;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}

