import { Button, Card, TextField, Typography } from "@mui/material"
import axios from "axios";
import { useState } from "react";
export async function Signup (props:{
    
    onClick:(username:string, password:string)=> void
}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
      return (
        <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>
                    Welcome to Coursera. Sign up below
                </Typography>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Card variant={"outlined"} style={{width: 400, padding: 20}}>
                <TextField
                        onChange={(event) => setUsername(event.target.value)}
                        fullWidth={true}
                        label="Username"
                        variant="outlined"
                    />
                    <br></br>
                    <TextField
                        onChange={(event) => setEmail(event.target.value)}
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                    />
                    <br/><br/>
                    <TextField
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth={true}
                        label="Password"
                        variant="outlined"
                        type="password"
                    />
                    <br/><br/>
                    <Button
                        size="large"
                        variant="contained"
                        onClick={async()=>{
                          props.onClick(username, password)
                        }}
                    >
                        Sign in
                    </Button>
                </Card>
            </div>
        </div>
    );
}
