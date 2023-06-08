import { Stack, TextInput, PasswordInput, Button, Container, Divider, Flex, Text } from '@mantine/core';
import { Link as A } from 'react-router-dom';
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5"

const SignIn = () => {
    return (
        <>
                <div className="header">
                    <h2>Sign in</h2>
                    <p>Welcome back! Please enter your details.</p>
                </div>

                <Stack>
                    <TextInput placeholder='Jjamesjohnson@gmail.com' label={"Email"} />
                    <PasswordInput label="Password" placeholder='**************' />
                    <Button color={"violet.5"} size='md' >Sign in</Button>

                    <Container p={0} w={"100%"}>
                    <Flex bg={"white"} align={'center'} justify={"center"} gap={4}>
                        <p style={{
                            textAlign:"center",
                            position:"absolute",
                            transform:"translateY(20px)",
                            backgroundColor:"white",
                            padding:"20px"
                        }} >or</p>
                        </Flex>
                        <Divider mt={20} mb={20} />
                        <A to={"http://localhost:8084/api/v1/auth/google"}>
                        <Button color='gray' fullWidth variant='outline'>
                            <Flex align={'center'} gap={4}>
                                <IoLogoGoogle color='black' size={18} />
                                <Text color='black'>Continue with Google</Text>
                            </Flex>
                        </Button>
                    </A>

                    <A to={""}>
                        <Button mt={10} color='gray' fullWidth variant='outline'>
                            <Flex align={'center'} gap={4}>
                                <IoLogoFacebook color='black' size={18} />
                                <Text color='black'>Continue with Facebook</Text>  
                            </Flex>
                        </Button>
                    </A>
                    </Container>
                    <Text color={"violet.5"} size={13} align='center'><A to={"/auth/forgot-password"}>Forgot password ?</A></Text>  
                    <Text color={"black"} size={13} align='center'>Don't have an account? <A style={{color:"#752f9f"}} to={"/auth/sign-up"}>Create an account</A></Text>  

                </Stack>
        </>
    );
};

export default SignIn;
