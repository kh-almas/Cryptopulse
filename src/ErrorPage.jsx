import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ErrorPage = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: '16px' }}>
                Oops! Something went wrong.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '16px' }}>
                We're sorry, but it seems like there was an error processing your request.
            </Typography>
            <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
                Refresh
            </Button>
        </Container>
    );
};

export default ErrorPage;