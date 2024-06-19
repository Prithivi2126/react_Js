
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const Registerform = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Professional Form
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: 'First Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                fullWidth
                label="First Name"
                autoFocus
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ''}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: 'Last Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                fullWidth
                label="Last Name"
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ''}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email Address"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: 'Message is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                fullWidth
                label="Message"
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ''}
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Registerform;
