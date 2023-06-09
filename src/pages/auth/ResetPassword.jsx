import { Stack, PasswordInput, Button, Text, Container } from '@mantine/core';
import { Link as A } from 'react-router-dom';
import { restPasswordSchema } from '../../schema';
import { useForm, zodResolver } from "@mantine/form";


const ResetPassword = () => {

    const form = useForm({
        validate: zodResolver(restPasswordSchema),
        initialValues: {
            password: "",
            confirmPassword:""
        },
    });

    const handleSubmit = () => {

    }

    return (
        <>
            <Container p={0} pt={40} pb={40}>
                <div className="header">
                    <h2>Reset your password</h2>
                    <p>Enter your new password</p>
                </div>

                <form action="" onSubmit={form.onSubmit(data => handleSubmit(data))}>
                <Stack>
                    <PasswordInput label="New Password" placeholder='**************' {...form.getInputProps("password")} />
                    <PasswordInput label="Confirm new password" placeholder='**************' {...form.getInputProps("confirmPassword")} />
                    <Button type='submit' color={"violet.5"} size='md' >Reset your password</Button>


                    <Text weight={800} color={"violet.5"} size={13} align='center'><A to={"auth/sign-in"}>Return to login page</A></Text>

                </Stack>
                </form>

            </Container>
        </>
    );
};

export default ResetPassword;
