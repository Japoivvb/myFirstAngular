export class User{
    id:number|null
    name:string=""
    password:string=""
    email:string=""

    constructor(id:number|null, name="", password="", email=""){
        this.id=id
        this.name=name
        this.password=password
        this.email=email

    }

    



}