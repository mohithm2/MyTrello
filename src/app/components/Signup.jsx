import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';

const SignupComponent = ({requestCreateUserAccount,authenticated})=>{
    return <div style= {{width:'400px',margin:'auto',height:'600px'}}className="card">
        <div style={{margin:'auto',width:'300px'}} className='row'>
            <div className='col s8 center align'>
            <h4>
                <b>Register</b> below.
            </h4>
          
                <form onSubmit={requestCreateUserAccount}>
            <label>
                <span>User Name</span>
                <input type="text" placeholder="username" name="username" defaultValue="Morty" className="form-control"/>
            </label>
            <label>
                <span>Password</span>
                <input type="text" placeholder="password" name="password" defaultValue="COURAGE" className="form-control mt-2"/>
            </label>

            {authenticated == mutations.USERNAME_RESERVED ? <p>A user by that name already exists.</p> : null}
            <button type="submit" className="form-control mt-2 btn btn-primary">Sign Up</button>
        </form>
            
            </div>
        </div>
    </div>
};

const mapStateToProps = state=>({
    authenticated:state.session.authenticated
});

const mapDispatchToProps = (dispatch)=>({
    requestCreateUserAccount(e){
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        console.log("Creating!",username,password);
        dispatch(mutations.requestCreateUserAccount(username,password));
    }
})

export const ConnectedSignup = connect(mapStateToProps, mapDispatchToProps)(SignupComponent);