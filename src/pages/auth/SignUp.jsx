import { Button, Container, Divider, Flex, PasswordInput, Stack, TextInput, Text, Drawer } from '@mantine/core';
import { Link as A } from 'react-router-dom';
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5"
import { useEffect, useState } from 'react';
import { useForm, zodResolver } from "@mantine/form";
import { signUpSchema } from '../../schema';
import { useMutation } from '@tanstack/react-query';
import { aXios } from '../../config';

const SignUp = () => {
    const [showModal, setShowModal] = useState(false)

    const form = useForm({
        validate: zodResolver(signUpSchema),
        initialValues: {
            email: "",
            fullname: "",
            password: "",
        },
    });

    const signUpMutation = useMutation((data) =>
        aXios.post("/auth/register", data)
    );

    const handleSubmit = (data) => {
        signUpMutation.mutate({...data, user_type:"applicant" });
    };

    useEffect(() => {
        const { data, error } = signUpMutation
        console.log({ data, error })
    }, [signUpMutation.data, signUpMutation.error])

    return (
        <>

            <Drawer
                opened={showModal}
                onClose={() => setShowModal(false)}
                position='bottom'
                padding={0}
                styles={{
                    inner: {
                        justifyContent: "flex-end !important",
                        paddingRight: "40px",
                    },
                    close: {
                        display: "none"
                    },
                    content: {
                        height: "max-content !important",
                        width: "450px !important",
                        maxWidth: "430px !important",
                        minWidth: "430px !important",
                        borderRadius: "3px !important",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "flex-end"
                    }
                }}
            >
                <div className="form_container">
                    <Container mt={20} mb={130}>
                        QUANT

                    </Container>
                    <div className="header">
                        <h2>Verify Email Address</h2>
                        <p>
                            "A six digit code has been sent to "
                            <Text weight={"bold"} color={"black"} size={13} align='center'>jamesJohn@gmail.com</Text>
                        </p>
                    </div>
                    <Container mb={100}>
                    </Container>

                    <Stack>
                        <TextInput label={"OTP"} placeholder='******' />
                        <Flex bg={"white"} align={'center'} justify={"flex-end"} gap={4}>
                            <p style={{
                                textAlign: "right",
                                position: "absolute",
                                transform: "translateY(-5px)",
                                backgroundColor: "white",
                                fontSize: "12px",
                                fontWeight: "500",
                            }} >Resend OTP</p>
                        </Flex>
                        <Button color={"violet.5"} size='md' >Verify</Button>

                    </Stack>
                </div>
            </Drawer>
            <div className="header">
                <h2>Create your account</h2>
                <p>Enter the fields below to get started</p>
            </div>

            <form onSubmit={form.onSubmit(data => handleSubmit(data))}>
                <Stack>
                    <TextInput placeholder='James Johnson' label={"Full name"} {...form.getInputProps("fullname")} />
                    <TextInput placeholder='Jjamesjohnson@gmail.com' label={"Email"} {...form.getInputProps("email")} />
                    <PasswordInput label="Password" placeholder='**************'  {...form.getInputProps("password")} />
                    <Button loading={signUpMutation.isLoading} type='submit' color='violet.5' size='md' >Sign up</Button>
                    <Container p={0} w={"100%"}>
                        <Flex bg={"white"} align={'center'} justify={"center"} gap={4}>
                            <p style={{
                                textAlign: "center",
                                position: "absolute",
                                transform: "translateY(20px)",
                                backgroundColor: "white",
                                padding: "20px"
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
                    <Text color={"black"} size={13} align='center'>Already have an account? <A style={{ color: "#752f9f" }} to={"/auth/sign-in"}>Sign in</A></Text>

                </Stack>
            </form>
        </>
    );
};

export default SignUp;
