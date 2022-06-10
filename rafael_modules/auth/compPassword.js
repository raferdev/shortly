import bcrypt from "bcrypt";

function compPassword(password,hash) {

	const result = bcrypt.compareSync(password,hash);

	return result;
}

export default compPassword;