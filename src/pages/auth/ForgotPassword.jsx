import { Stack, TextInput, Button, Text, Container } from '@mantine/core';
import { Link as A, useNavigate } from 'react-router-dom';
import { forgotPasswordEmailSchema } from '../../schema';
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from '@tanstack/react-query';
import { aXios } from '../../config';
import { useEffect } from 'react';
import { Notifications } from '@mantine/notifications';
import { VscError, VscVerified } from "react-icons/vsc";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const sendRestPasswordMailMutation = useMutation(
        (data) =>
            aXios.post("/auth/forgot-password", data)
    );

    const form = useForm({
        validate: zodResolver(forgotPasswordEmailSchema),
        initialValues: {
            email: "",
        },
    });

    const handleSubmit = (data) => {
        console.log(data)
        sendRestPasswordMailMutation.mutate(data);
    }

    useEffect(() => {

        const { error, data } = sendRestPasswordMailMutation;

        if (data?.status === 200) {
            Notifications.show(
                {
                    w: 280,
                    message: "Mail sent to" + form.values.email,
                    title: "Success",
                    color: "green",
                    icon: <VscVerified />
                }
            )
            
        }

        if (error?.response?.status === 404) {
            Notifications.show(
                {
                    w: 280,
                    message: "Invalid Email address",
                    title: "Failed",
                    color: "red",
                    icon: <VscError />
                }
            )

        }

        if (error?.response?.status === 500) {
            Notifications.show(
                {
                    w: 280,
                    message: "Something went wrong \n try again later",
                    title: "Failed",
                    color: "red",
                    icon: <VscError />
                }
            )

        }

    }, [sendRestPasswordMailMutation.data, sendRestPasswordMailMutation.error])
    return (
        <>
            <Container p={0} pt={40} pb={40}>
                <div className="header">
                    <h2>Reset your password</h2>
                    <p>Enter your email to reset your password</p>
                </div>

                <form action="" onSubmit={form.onSubmit(data => handleSubmit(data))}>
                    <Stack>
                        <TextInput placeholder='jamesjohnson@gmail.com' label={"Email"} {...form.getInputProps("email")} />
                        <Button loading={sendRestPasswordMailMutation.isLoading} type='submit' color={"violet.5"} size='md' >Continue</Button>

                        <Text weight={800} color={"violet.5"} size={13} align='center'><A to={"auth/sign-in"}>Return to login page</A></Text>

                    </Stack>
                </form>

            </Container>
        </>
    );
};

export default ForgotPassword;
