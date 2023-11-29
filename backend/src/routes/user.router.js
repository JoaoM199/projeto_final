const router = require("express")
const sample_users = require("../data.js")
const BAD_REQUEST = require("../constants/httpStatus.js")

router('/Login', (req, res) => {
    // Email + password
    const { email, password } = req.body;
        const user = sample_users.find(
            user => user.email === email && user.password === password
        );

        if(user){
            res.send(generateTokenResponse(user));
            return;
        }
        res.status(BAD_REQUEST).send('Usuário não encontrado')
    
});

const generateTokenResponse = user => {

    const token = jwt.sign({
        id: user.id, 
        email: user.email, 
        isAdmin: user.isAdmin
    }, 
    '1011',{
        expiresIn: '30d',
    }
);

return {
    id: user.id, 
    email: user.email, 
    name: user.name,
    date: user.date,
    adress: user.adress,
    isAdmin: user.isAdmin,
    token,
}

}