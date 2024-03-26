export const checkValidationData = (email, password, fullName) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isFullNmaevalid = /^[A-Za-z ]+$/.test(fullName);

  if(email ==="" || password === "" || fullName ==="")
  return "All the fields are mandatory"

  if (!isEmailValid) return "Email ID is Not Valid!!!";

  if (!isPasswordValid) return "Password is not valid!!!";

  if (!isFullNmaevalid)
    return "Full Name should contain only alphabets and spaces, this is not valid Name";

  return null;
};
