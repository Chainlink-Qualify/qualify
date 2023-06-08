import { Stack, TextInput, Button,Text, Container } from '@mantine/core';
import { Link as A } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <>
        <Container p={0} pt={40} pb={40}>
            <div className="header">
                <h2>Reset your password</h2>
                <p>Enter your email to reset your password</p>
            </div>

            <Stack>
                <TextInput placeholder='Jjamesjohnson@gmail.com' label={"Email"} />
                <Button color={"violet.5"} size='md' >Continue</Button>


                <Text weight={800} color={"violet.5"} size={13} align='center'><A to={"auth/sign-in"}>Return to login page</A></Text>

            </Stack>
            </Container>
        </>
    );
};

export default ForgotPassword;
