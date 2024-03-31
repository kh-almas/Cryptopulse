import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const About = () => {
    return (
        <Box
            id="highlights"
            sx={(theme) => ({
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                width: '100%',
                backgroundColor:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : '#06090a',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : '',
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { xs: 'left', sm: 'center' },
                    }}
                >
                    <Typography component="h5" variant="h5" sx={{textTransform: 'uppercase', fontWeight: 'bold'}}>
                        Navigating the Digital Frontier: My Journey
                    </Typography>
                </Box>
                <Grid
                    container
                    spacing={2.5}
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={(theme) => ({
                        p: 2,
                        paddingBottom:3,
                        height: '100%',
                        background: 'transparent',
                    })}
                >
                    <Grid item sm={12} md={4}>
                        <Box
                            direction="column"
                            color="inherit"
                            spacing={1}
                            useFlexGap
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box
                                sx={{

                                }}
                            >
                                <img
                                    src={'/public/mypic.jpg'}
                                    alt={'img'}
                                    style={{
                                        width: '290px',
                                        height: '310px',
                                        borderRadius: '20px'
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={8}>
                        <Stack
                            direction="column"
                            color="inherit"
                            spacing={1}
                            useFlexGap
                            sx={(theme) => ({
                                p: 2,
                                paddingBottom:3,
                                height: '100%',
                                border: '1px solid',
                                borderColor: 'grey.800',
                                borderRadius: '6px',
                                background: 'transparent',
                                backgroundColor:
                                    theme.palette.mode === 'light'
                                        ? 'grey.100'
                                        : 'grey.900'
                            })}
                        >
                            <Box>
                                <p>Hello! I'm MD Almas Hossen, a Full Stack Developer based in Dhaka, Bangladesh, dedicated to creating innovative digital solutions. With a Bachelor's degree in Computer Science and Engineering, I kickstarted my professional journey at TIGGZY IT, where I specialized in optimizing MERN projects and developing user-friendly systems.</p>
                                <p>My passion for web development extends beyond coding to include a keen interest in server management and website optimization. I excel in handling asynchronous data, discovering new tools and technologies, and refactoring websites for optimal performance. Whether it's resolving issues or embracing new technologies, I approach each task with energy and a commitment to excellence.</p>
                                <p>As I continue to evolve in my career, I'm excited to collaborate with forward-thinking teams and individuals who share my passion for pushing the boundaries of technology. Let's connect and explore how we can create impactful digital solutions together!</p>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;