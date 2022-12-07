import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import ReCAPTCHA from 'react-google-recaptcha';
import Copyright from '@/components/molecules/Copyright';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import CustomInput from '@/components/atoms/CustomInput';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Signin = () => {
  const theme = createTheme();
  const [isverify, setIsverify] = useState(true);
  const formRef = useRef();
  // const theme = useTheme();

  const onChange = (value) => {
    // setIsverify(false);
    // if (!value) setIsverify(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);

    // const raw = JSON.stringify({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    // getDataUser(raw);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            ref={formRef}
            sx={{ mt: 1 }}
            width="100%"
          >
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              // error={!emailNoti}
              // helperText={!emailNoti ? 'Email không đúng' : ''}
            /> */}
            <CustomInput
              customId="email"
              name="email"
              defaultValue={''}
              placeholder="Email Address*"
            />
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              // error={!passWordNoti}
              // helperText={!passWordNoti ? 'Mật khẩu không hợp lệ' : ''}
            /> */}
            {/* {message && (
            <Typography variant="body2" sx={{ color: '#e7684c' }}>
              Thông tin sai. Vui lòng nhập lại
            </Typography>
          )} */}
            <Box mt={2}>
              <CustomInput
                customId="password"
                name="password"
                type="password"
                defaultValue={''}
                placeholder="Password*"
              />
            </Box>
            <Box mt={2}>
              <ReCAPTCHA
                sitekey="6Lelby0gAAAAAI9V-f0jKtIIHknw17goLCiHU_uk"
                onChange={onChange}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={() => formRef.current.reportValidity()}
              disabled={isverify}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" passHref>
                  Quên mật khẩu
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" passHref>
                  {'Bạn chưa có tài khoản? Đăng ký'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Signin;
