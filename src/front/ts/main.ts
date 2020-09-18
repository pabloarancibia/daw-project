/*=============================================================================
 * Authors: Agustin Bassi, Brian Ducca, Santiago Germino 
 * Date: Jul 2020
 * Licence: GPLV3+
 * Project: DAW - CEIoT - Project Structure
 * Brief: Main frontend file (where the logic is)
=============================================================================*/

//=======[ Settings, Imports & Data ]==========================================

let user = "TypesScript Users!";

//=======[ Main module code ]==================================================

function greeter(person) {
    return "Hello, " + person;
}

//  document.body.innerHTML = greeter(user);
console.log("Hola ñeri");



class User {
    private _id: number;
    private _name: string;
    private _email: string;
    private _isLogged: boolean;

    constructor(id: number, name: string, email: string) {
        this._id = id;
        this._name = name;
        this._email = email;
    }

    set id(id: number) {
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    printInfo(): void {
        console.log(this._id, this._name, this._email);
    }

}

class Main {
    main(): void {
        console.log("main() method");
        let usuarios: Array<User>;
        usuarios = new Array<User>();
        usuarios.push(new User(1, "Pablo", "p1@history.com"));
        usuarios.push(new User(2, "Pablo2", "p2@history.com"));
        usuarios.push(new User(3, "Pablo3", "p3@history.com"));

        for (let i in usuarios) {
            usuarios[i].printInfo();
        }
    }
}

window.onload = function () {
    let m: Main = new Main();
    m.main();
};

//=======[ End of file ]=======================================================
