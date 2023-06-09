import { Stack, PasswordInput, Button, Text, Container } from '@mantine/core';
import { Link as A } from 'react-router-dom';
import { restPasswordSchema } from '../../schema';
import { useForm, zodResolver } from "@mantine/form";
import { Notifications } from '@mantine/notifications';
import { VscError, VscVerified } from "react-icons/vsc";
import { useParams, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { aXios } from '../../config';
import { useEffect } from 'react';

const ResetPassword = () => {

    const navigate = useNavigate();
    const { token } = useParams();




    const form = useForm({
        validate: zodResolver(restPasswordSchema),
        initialValues: {
            password: "",
            confirmPassword: ""
        },
    });

    const resetMailOtpMutation = useMutation(
        (data) =>
            aXios.post("/auth/change-password", data)
    );

    const handleSubmit = (data) => {
        resetMailOtpMutation.mutate({ token, password: data.password });
    }

    useEffect(()=>{
        const {error, data} = resetMailOtpMutation;

        console.log({error, data,token})

        if (data?.status === 200) {
            Notifications.show(
                {
                    w: 280,
                    message: "Password reset successfully",
                    title: "Success",
                    color: "green",
                    icon: <VscVerified />
                }
            )
            navigate("/auth/sign-in")
        }
        if (error?.response?.status === 500) {
            Notifications.show(
                {
                    w: 280,
                    message: "An error occurred",
                    title: "Failed",
                    color: "red",
                    icon: <VscError />
                }
            )

        }

        if (error?.response?.status === 401) {
            Notifications.show(
                {
                    w: 280,
                    message: "Invalid token",
                    title: "Failed",
                    color: "red",
                    icon: <VscError />
                }
            )

        }

    },[resetMailOtpMutation.data, resetMailOtpMutation.error])

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
                        <Button loading={resetMailOtpMutation.isLoading} type='submit' color={"violet.5"} size='md' >Reset your password</Button>


                        <Text weight={800} color={"violet.5"} size={13} align='center'><A to={"/auth/sign-in"}>Return to login page</A></Text>

                    </Stack>
                </form>

            </Container>
        </>
    );
};

export default ResetPassword;
