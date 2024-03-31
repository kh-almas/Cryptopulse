import {alpha, Paper, styled} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import AnimationWorld from "./AnimationWorld.jsx";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#040A1F' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.mode === 'dark' ? '#fff' : '#1A2027',
}));

const Hero = () => {
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                // backgroundImage:
                //     theme.palette.mode === 'light'
                //         ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                //         : 'linear-gradient(#02294F, #090E10)',
                // backgroundSize: '100% 20%',
                // backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Item
                            sx={{
                                padding: '40px 25px',
                            }}
                        >
                            <Button variant="outlined">Token sales</Button>
                            <Typography
                                component={'h4'}
                                variant={'h4'}

                            >
                                Global coin distribution with strategic pre-sales.
                            </Typography>
                            <Box
                                sx={(theme) => ({
                                    width: 60,
                                    height: 5,
                                    backgroundColor: '#7a3023',
                                })}
                            ></Box>
                        </Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item>
                            <AnimationWorld />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Hero;