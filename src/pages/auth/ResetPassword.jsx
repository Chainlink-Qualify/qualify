import { Stack, PasswordInput, Button, Text, Container } from '@mantine/core';
import { Link as A } from 'react-router-dom';
const ResetPassword = () => {
    return (
        <>
            <Container p={0} pt={40} pb={40}>
                <div className="header">
                    <h2>Reset your password</h2>
                    <p>Enter your new password</p>
                </div>

                <Stack>
                    <PasswordInput label="New Password" placeholder='**************' />
                    <PasswordInput label="Confirm new password" placeholder='**************' />
                    <Button color={"violet.5"} size='md' >Reset your password</Button>


                    <Text weight={800} color={"violet.5"} size={13} align='center'><A to={"auth/sign-in"}>Return to login page</A></Text>

                </Stack>
            </Container>
        </>
    );
};

export default ResetPassword;
