import React, { Component } from 'react';

// styles
import "./SignIn.styles.scss";

// components
import { FormInput } from "../../components/formInput/FormInput.component";
import {CustomButton} from "../customButton/customButton.component";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:''
         }
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.setState({email:"", password:""})
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }
    render() { 
        const { email, password} = this.state;
        return ( 
            <div className="sign-in">
                <div className="title">
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                </div>
                <form onSubmit={this.handelSubmit}>
                    <FormInput label="Email" handleChange={this.handleChange} name="email" value={email} type="email" required />
                    <FormInput label="Password" handleChange={this.handleChange} name="password" value={password} type="password" required />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
         );
    }
}
 
export default SignIn;