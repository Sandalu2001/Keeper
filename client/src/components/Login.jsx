import React, { useState } from "react";


function Login(props){

    

    var[user,setUser] = useState({
        email : " ",
        password : ""
    });

    function isTyping(event){
        var{name,value} = event.target;

        setUser((prev)=>{
            return({
                ...prev,
                [name] : value
            })
        })
    }

    function isLogin(event){
        event.preventDefault();
        props.userValidation(true);
    }

    function changeFormType(e){
        e.preventDefault();
        props.setFormType("register");
    }

    
    return(
        

        <section id="contact" className="signUp">
            <div class="container-fluid">
                <img src="https://cdn-icons-png.flaticon.com/512/4105/4105456.png" class="contact-img" alt=""/>
                <form>
                    <h1 className="sub-title">Login !!</h1>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                        <input type="email" id="form1Example13" className="form-control form-control-lg" name="email" value={user.email} onChange={isTyping}/>
                        <label className="form-label" for="form1Example13">Email address</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                        <input type="password" id="form1Example23" className="form-control form-control-lg" name="password" value={user.password} onChange={isTyping}/>
                        <label className="form-label" for="form1Example23">Password</label>
                    </div>

                    {/* <!-- Submit button --> */}
                    {/* <button  class="btn btn-primary btn-lg btn-block">Sign in</button> */}
                    <button type="submit" className="btn btn-warning w-100 py-2 signUpbtn" onClick={isLogin}>Log in</button>

                        <div className="divider d-flex justify-content-around align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                        </div>


                        <a className="btn btn-outline-dark w-100 py-2 google" href="#!" role="button">
                            <i class="fa fa-google" style={{fontSize:"30px" ,paddingRight : "20px"}}></i> Continue with Google
                        </a>

                        <div className="divider d-flex justify-content-around align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0 text-muted" type="button" onClick={changeFormType}>Sign up</p>
                        </div>
                    </form>
            </div>
        </section>

    )
}


export default Login;