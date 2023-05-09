import React, { useState } from "react";

const MoreForms = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const createUser = (e) => {
    // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();

    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("new user details", newUser);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="mainContainer">
      <form onSubmit={ createUser }>
        <div className="panel">
          <label>First Name : </label>
          <input type="text" className="form-control" value={ firstName } onChange={ (e) => setFirstName(e.target.value)}/>
          {/* Use turnary operator to render when there are multiple posibilities */}
          { firstName.length === 0 ? <p className="noticeMessage">Firstname can't be empty</p> : firstName.length < 2 ? <p className="noticeMessage">Firstname must be at least 2 characters</p> : <p>Firstname : { firstName }</p>}
        </div>
        <div className="panel">
          <label>Last Name : </label>
          <input type="text" className="form-control" value={ lastName } onChange={ (e) => setLastName(e.target.value)}/>
          {/* Use turnary operator to render when there are multiple posibilities */}
          { lastName.length === 0 ? <p className="noticeMessage">Last name can't be empty</p> : lastName.length < 2 ? <p className="noticeMessage">Last name must be at least 2 characters</p> : <p>Last name : { lastName }</p>}
        </div>
        <div className="panel">
          <label>Email : </label>
          <input type="email" className="form-control" value={ email } onChange={ (e) => setEmail(e.target.value)}/>
          {/* Use turnary operator to render when there are multiple posibilities */}
          { email.length === 0 ? <p className="noticeMessage">Email can't be empty</p> : email.length < 2 ? <p className="noticeMessage">Email must be at least 2 characters</p> : <p>Email : { email }</p>}
        </div>
        <div className="panel">
          <label>Password : </label>
          <input type="password" className="form-control" value={ password } onChange={ (e) => setPassword(e.target.value)}/>
          {/* Use turnary operator to render when there are multiple posibilities */}
          { password.length === 0 ? <p className="noticeMessage">Password can't be empty</p> : password.length < 8 ? <p className="noticeMessage">Last name must be at least 8 characters</p> : <p>Password : { password }</p>}
        </div>
        <div className="panel">
          <label>Confirm Password : </label>
          <input type="password" className="form-control" value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value)}/>
          {/* Use turnary operator to render when there are multiple posibilities */}
          { confirmPassword.length === 0 ? <p className="noticeMessage">This field can not be empty</p> : confirmPassword === password ? <p>Password is confirmed</p> : <p className="noticeMessage">Password is not match</p>}
        </div>
      </form>
    </div>
  );
};

export default MoreForms;