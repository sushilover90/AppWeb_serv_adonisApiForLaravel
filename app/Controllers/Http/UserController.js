'use strict'

const User = use('App/Models/User')

class UserController {

    async login({request, auth}){


        const { username, password } = await request.all();

        let token = await auth.withRefreshToken().attempt(username, password)

        return token;

    }

    async register({request}){

        const {username, password} = await request.all();

        const user = await User.create({
            username,
            password
        });

       return this.login(...arguments);
    }
}

module.exports = UserController
