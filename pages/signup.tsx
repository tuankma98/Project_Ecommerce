import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import ReCAPTCHA from 'react-google-recaptcha';
import Copyright from '@/components/molecules/Copyright';
import Link from 'next/link';
import CustomInput from '@/components/atoms/CustomInput';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomButton from '@/components/atoms/CustomButton';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { createUser, tockenDataCreateSelector } from '@/store/userSlice';
import { useRouter } from 'next/router';
import Layout from '@/components/templates/layout';

const Signup = () => {
  const theme = createTheme();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const token = useAppSelector(tockenDataCreateSelector);

  const [messageUserName, setMessageUserName] = useState(true);
  const [messageEmail, setMessageEmail] = useState(true);
  const [messagePass, setMessagePass] = useState(true);
  const [message, setMessage] = useState(true);
  const [isverify, setIsverify] = useState(true);

  const onChange = (value) => {
    setIsverify(false);
    if (!value) setIsverify(true);
  };

  useEffect(() => {
    if (token) {
      setMessage(true);
      setMessagePass(true);
      setMessageUserName(true);
      localStorage.setItem('tokens', JSON.stringify(token));
      router.push('/');
    }
  }, [token]);

  // const { fetchDataUser } = signUpUser();

  const getDataUser = async (raw) => {
    await dispatch(createUser(raw));

    // if (data?.errors) {
    //   setMessage(false);
    //   setMessagePass(true);
    //   setMessageUserName(true);
    // }
    // if (data.msg === 'User Already Exists') {
    //   setMessageUserName(false);
    //   setMessage(true);
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const raw = JSON.stringify({
      email: data.get('email'),
      username: data.get('userName'),
      password: data.get('password'),
    });

    const password = JSON.parse(raw).password;

    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*+]{6,16}$/;

    const res = password.match(pattern);

    if (res) {
      getDataUser(raw);
      console.log('Valid password!');
    } else {
      console.log('Not a valid password.');
    }
  };

  return (
    <Layout title={'Signup'}>
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
                  type="password"
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
    </Layout>
  );
};

export default Signup;
