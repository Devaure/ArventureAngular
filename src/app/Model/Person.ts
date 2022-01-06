export class Person{
    
    public id:number;
    public lastname: string;
    public firstname:string;
    public home:string;
    public birthdate:number;

    constructor(id:number,lastname: string, firstname:string,home:string,birthdate:number ){
        this.id =id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.home = home;
        this.birthdate = birthdate;
    }
}