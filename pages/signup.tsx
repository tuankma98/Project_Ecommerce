import { useRef, useState, useEffect } from 'react';
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
import CustomButton from '@/components/atoms/CustomButton';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { createUser, userDataCreateSelector } from '@/store/userSlice';

const Signup = () => {
  const theme = createTheme();
  const dispatch = useAppDispatch();
  const dataUser = useAppSelector(userDataCreateSelector);
  const [messageUserName, setMessageUserName] = useState(true);
  const [messageEmail, setMessageEmail] = useState(true);
  const [messagePass, setMessagePass] = useState(true);
  const [tokens, setTokens] = useState('');
  const [message, setMessage] = useState(true);
  const [isverify, setIsverify] = useState(true);

  const onChange = (value) => {
    setIsverify(false);
    if (!value) setIsverify(true);
  };

  useEffect(() => {
    const localToken = window.localStorage.getItem('tokens');
    if (localToken === null) {
      localStorage.setItem('tokens', JSON.stringify(tokens));
    }
  }, []);

  // const { fetchDataUser } = signUpUser();

  const getDataUser = async (raw) => {
    console.log('raw', raw);
    await dispatch(createUser(raw));

    // const data = await fetchDataUser(raw, API_SIGNUP);
    // console.log(data);
    // if (data?.errors) {
    //   setMessage(false);
    //   setMessagePass(true);
    //   setMessageUserName(true);
    // }
    // if (data.msg === "User Already Exists") {
    //   setMessageUserName(false);
    //   setMessage(true);
    // }
    // if (data.token) {
    //   setMessage(true);
    //   setMessagePass(true);
    //   setMessageUserName(true);
    //   localStorage.setItem("tokens", JSON.stringify(data.token));
    //   window.location.href = API_LINK;
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const data = new FormData(event.currentTarget);

    const raw = JSON.stringify({
      email: data.get('email'),
      username: data.get('userName'),
      password: data.get('password'),
    });

    const userData = {
      email: data.get('email'),
      username: data.get('userName'),
      password: data.get('password'),
    };

    const password = JSON.parse(raw).password;

    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*+]{6,16}$/;

    const res = password.match(pattern);

    if (res) {
      getDataUser(raw);
      // dispatch(createUser(raw));
      console.log('Valid password!');
    } else {
      console.log('Not a valid password.');
    }
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
          <Avatar sx={{ m: 1, background: '#f05123' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            width="100%"
          >
            <CustomInput
              customId="userName"
              name="userName"
              defaultValue={''}
              placeholder="User Name"
            />
            <Box mt={2}>
              <CustomInput
                customId="email"
                name="email"
                defaultValue={''}
                placeholder="Email Address"
              />
            </Box>
            <Box mt={2}>
              <CustomInput
                customId="password"
                name="password"
                defaultValue={''}
                placeholder="Password"
              />
            </Box>
            {/* <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  // error={!messageUserName}

                  // helperText={
                  //   !messageUserName ? 'Tên đăng ký đã được sử dụng' : ''
                  // }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  // error={!messageEmail}
                  // helperText={!messageEmail ? 'Email đã tồn tại' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={!messagePass}
                  helperText={!messagePass ? 'Mật khẩu không hợp lệ' : ''}
                  // setMessagePass
                />
              </Grid>
              <Grid item xs={12}>
                {!message && (
                  <Typography className="message-error">
                    Đã có lỗi, vui lòng nhập lại thông tin
                  </Typography>
                )}
              </Grid>
            </Grid> */}
            <Box mt={2}>
              <ReCAPTCHA
                sitekey="6Lelby0gAAAAAI9V-f0jKtIIHknw17goLCiHU_uk"
                onChange={onChange}
              />
            </Box>
            <CustomButton
              message="Đăng ký"
              type="submit"
              disabled={isverify}
              customStyle={{
                display: 'block',
                width: '100%',
                borderRadius: '6px',
                marginTop: '24px',
              }}
            />

            <Box textAlign="end" mt={1}>
              <Link href="/signin" passHref>
                Bạn đã có tài khoản?. Đăng nhập
              </Link>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Signup;