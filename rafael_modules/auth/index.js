import postSignIn from "./postSignIn.js";
import postSignUp from "./postSignUp.js";
import hashPassword from "./hashPassword.js";
import compPassword from "./compPassword.js";
import postSession from "./postSession.js";
import searchSession from "./searchSession.js";

const authRepository = {
    postSignIn,
    postSignUp,
    hashPassword,
    compPassword,
    postSession,
    searchSession
}

export default authRepository;