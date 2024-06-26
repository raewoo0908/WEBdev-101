import React from "react";
import {Container, Grid, Typography, TextField, Button} from "@mui/material";
import { signup } from "./service/ApiService";
import { Link } from "react-router-dom";

function SignUp(){
    const handleSubmit = (event) => {
        event.preventDefault();
        //오브젝트에서 from에 저장된 데이터를 맵의 형태로 바꿔줌
        const data = new FormData(event.target);
        const username = data.get("username");
        const password = data.get("password");
        signup({username: username, password: password}).then(
            (response) => {
                window.location.href = "/Login"; //계정 생성 성공 시 로그인 페이지로 리디렉트
            }
        );
    };


    return (
        <Container component = "main" maxWidth = "xs" style = {{marginTop: "8%"}}>
            <Grid container spacing = {2}>
                <Grid item xs = {12}>
                    <Typography component = "h1" variant = "h5">
                        계정 생성
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit = {handleSubmit}>
                {" "}
                {/* submit 버튼을 누르면 handleSubmit이 실행됨 */}

                <Grid container spacing = {2}>
                    <Grid item xs = {12}>
                        <TextField
                            variant = "outlined"
                            required
                            fullWidth
                            id = "username"
                            label = "아이디"
                            name = "username"
                            autoComplete = "fname"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs = {12}>
                        <TextField
                            variant = "outlined"
                            required
                            fullWidth
                            name = "password"
                            label = "패스워드"
                            type = "password"
                            id = "password"
                            autoComplete = "current-password"
                        />
                    </Grid>
                    <Grid item xs = {12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >계정 생성
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link to = "/login" variant="body2">
                            이미 계정이 있나요? 로그인 하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default SignUp;