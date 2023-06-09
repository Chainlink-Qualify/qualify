import { Stack, TextInput, Button,Text, Container } from '@mantine/core';
import { Link as A } from 'react-router-dom';
import { forgotPasswordEmailSchema } from '../../schema';
import { useForm, zodResolver } from "@mantine/form";


const ForgotPassword = () => {


    const form = useForm({
        validate: zodResolver(forgotPasswordEmailSchema),
        initialValues: {
            email: "",
        },
    });

    const handleSubmit = () => {

    }

    return (
        <>
        <Container p={0} pt={40} pb={40}>
            <div className="header">
                <h2>Reset your password</h2>
                <p>Enter your email to reset your password</p>
            </div>

            <form action="" onSubmit={form.onSubmit(data => handleSubmit(data))}>
            <Stack>
                <TextInput placeholder='Jjamesjohnson@gmail.com' label={"Email"} {...form.getInputProps("email")}/>
                <Button type='submit' color={"violet.5"} size='md' >Continue</Button>


                <Text weight={800} color={"violet.5"} size={13} align='center'><A to={"auth/sign-in"}>Return to login page</A></Text>

            </Stack>
            </form>

            </Container>
        </>
    );
};

export default ForgotPassword;
