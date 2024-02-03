class User {
    constructor(user_id, name, email, password, state, created_time){
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.state = state;
        this.created_time = created_time;
    }
}

module.exports = User;