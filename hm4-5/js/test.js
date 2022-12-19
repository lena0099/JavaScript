
function createNewUser() {
    let firstName = prompt("введите firstName" );
    let lastName = prompt("введите lastName" );
    let date = prompt("введите birthday " );
    let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let birthday = new Date(date.replace(pattern,'$3-$2-$1'));
    let newUser = {
        _name: firstName,
        _lastName: lastName,
        birthday: birthday,
        set name(value){
            this._name=value;
        },
        set lastName(value){
            this._lastName=value;
        },
        get name(){
            return this._name;
        },
        get lastName(){
            return this._lastName;
        },

        getLogin(){
           let login = this._name.charAt(0) + this._lastName;
            return login.toLowerCase();
        },
        getAge(){
            let now = new Date();
        return now.getFullYear()-this.birthday.getFullYear();
        },
        getPassword(){
            return this._name[0].toUpperCase()+this._lastName.toLowerCase()+this.birthday.getFullYear();
        }

    };

return newUser;
}

let A=createNewUser();
console.log(A);
console.log(A.getLogin());
console.log(A.getAge());
console.log(A.getPassword());

