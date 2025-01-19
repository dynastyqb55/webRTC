const User = require('../../models/user');
const bcrypt = require('bcryptjs');

const postLogin = async (req, res) => {
    try{
        const {email, password} = req.body;
    
        const user = await User.findOne({email: email.toLowerCase()});

        if(user && bcrypt.compare(password, user.password)){

            const token = "JWT-token";
            return res.status(200).json({
                user:{
                    userName: user.userName,
                    email: user.email,
                    token
                }
            });
        }
        res.status(400).send(`Invalid credentials, please try again later`);

    }catch(err){
        return res.status(500).send(`Error occured ${err}`)
    }
    
}

module.exports = postLogin;