import jwt from 'jsonwebtoken';

const newUserId = 1;
const token = localStorage.getItem("token");
const decodedToken = jwt.decode(token);

if (decodedToken && decodedToken.id) {
    decodedToken.id = newUserId;
    const newToken = jwt.sign(decodedToken, 'votre_clé_secrète');

    console.log(newToken);
}