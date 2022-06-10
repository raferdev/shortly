import postSignIn from "./postSignIn.js";
import postSignUp from "./postSignUp.js";
import hashPassword from "./hashPassword.js";
import compPassword from "./compPassword.js";
import postSession from "./postSession.js";

const authRepository = {
    postSignIn,
    postSignUp,
    hashPassword,
    compPassword,
    postSession
}

export default authRepository;