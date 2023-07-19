import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../../CSSFiles/card.css'
import { useState } from 'react';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function Mycard(props) {
    const [login, setLogin] = useState(true)

 
    return (
        <div>
            {login === true ? (
                <>
                <h1>Login</h1>
                <Card login={true} sx={{ minWidth: 355 }}>
                    <CardContent className='card-text-fields'>
                        <div className='text-field'>
                            <TextField id="filled-basic" label="Name" variant="filled" />
                        </div>
                        <div className='text-field'>
                            <TextField id="filled-basic" label="Password" variant="filled" />
                        </div>


                    </CardContent>
                    <CardActions>
                        <div className='login-button'>
                            <Button variant='contained' size="small" type='submit'>Login</Button>
                        </div>
                    </CardActions>

                    <div>
                        <p className='forget-password'>Forget password?</p>
                        <p>Click here to<span><Button  size="small" onClick={()=>setLogin(false)} >SignUp</Button></span></p>
                    </div>
                </Card>
                </>
            ) : (
                <>
                <h1>Register</h1>
                <Card login={props.login} signUp={props.signup} sx={{ minWidth: 355 }}>
                    <CardContent className='card-text-fields'>
                        <div className='text-field'>
                            <TextField id="filled-basic" label="Name" variant="filled" />
                        </div>
                        <div className='text-field'>
                            <TextField id="filled-basic" label="Age" type='number' variant="filled" />
                        </div>
                        <div className='text-field'>
                            <TextField id="filled-basic" label="Email" variant="filled" />
                        </div>
                        <div className='password-fields'>
                            <TextField id="filled-basic" label="Password" variant="filled" />

                            <TextField id="filled-basic" label="Confirm Password" variant="filled" />
                        </div>


                    </CardContent>
                    <CardActions>
                        <div className='login-button'>
                            <Button variant='contained' size="small" type='submit'>Register</Button>
                        </div>
                    </CardActions>

                    <div>
                        <p>Click here to<span><Button  size="small" onClick={()=>setLogin(true)}>Login</Button></span></p>
                    </div>
                </Card>
                </>
            )}
        </div>



    );
}