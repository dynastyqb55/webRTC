const User = require('../../models/user');
const bcrypt = require('bcryptjs');

const postRegister = async (req, res) => {
    try{
        const {userName, email, password} = req.body;
    
        // Check if user exists
        const userExists = await User.exists({userName: userName.toLowerCase(), email: email.toLowerCase()});
        if(userExists){ 
            return res.status(409).send('Username already exists');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create new user
        const user = User.create({userName: userName.toLowerCase(), email: email.toLowerCase(), password: hashedPassword});

        // JWT token
        const token = jwt.sign({
                userName: user.userName,
                email: user.email
            }, 
            process.env.JWT_SECRET, 
            {
                expiresIn: '100h'
            }
        );
        return res.status(201).json(
            {
                message: 'User created successfully', 
                user: {
                    userName: user.userName,
                    email: user.email,
                    token
                }   

        });

    }catch(err){
        return res.status(500).send(`Error occured ${err}`)
    }

}

module.exports = postRegister;