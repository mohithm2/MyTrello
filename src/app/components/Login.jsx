/**
 * The login route component contains a simple form that checks authentication data via the server.
 */

import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LoginComponent = ({authenticateUser,authenticated})=>(
    <div style= {{width:'400px',margin:'auto',height:'600px'}}className="card">
        <div style={{margin:'auto',width:'300px'}} className='row'>
            <div className="col s8 center-align">
                <h2>
                    Please login
                </h2>
                <h3>
                        <p className="grey-text text-darken-1">
                            Don't have an account? <Link to="/Signup">Register</Link>
                        </p>
                </h3>
                <div className='input-field col s12'>
                    <form onSubmit={authenticateUser}>
                        <input type="text" placeholder="username" name="username" defaultValue="Dev" className="form-control"/>
                        <input type="password" placeholder="password" name="password" defaultValue="TUPLES" className="form-control mt-2"/>
            {authenticated === mutations.NOT_AUTHENTICATED ?
                <p>
                    Login incorrect.
                </p> : null
            }
            <button type="submit" disabled={authenticated === `PROCESSING`} className="form-control mt-2 btn btn-primary">
                Login
            </button>
        </form>
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = ({session})=>({
    authenticated:session.authenticated
});

const mapDispatchToProps = (dispatch)=>({
    authenticateUser(e){
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        dispatch(mutations.requestAuthenticateUser(username,password));
    }
});

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);