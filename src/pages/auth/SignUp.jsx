import { Button, Container, Divider, Flex, PasswordInput, Stack, TextInput, Text, Drawer } from '@mantine/core';
import { Link as A, useNavigate } from 'react-router-dom';
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5"
import { useEffect, useState } from 'react';
import { useForm, zodResolver } from "@mantine/form";
import { signUpSchema } from '../../schema';
import { useMutation } from '@tanstack/react-query';
import { aXios } from '../../config';
import { Notifications } from '@mantine/notifications';
import { VscError, VscPass } from "react-icons/vsc";
import { setAuthToken } from "../../utils/auth";
import logo from "../../assets/logo.png";
import { VerifyOtpModal } from '../../components';
const SignUp = () => {

    const navigate = useNavigate();


    const [showModal, setShowModal] = useState(false)

    const form = useForm({
        validate: zodResolver(signUpSchema),
        initialValues: {
            email: "" ,
            fullname: "",
            password: "",
        },
    });

    const resendMailOtpMutation = useMutation(
        (data) =>
            aXios.post("/auth/verify/resend-token", data)
    );

    const handleResendMail = () => {
        resendMailOtpMutation.mutate({ email: form.values.email });
    }

    const signUpMutation = useMutation((data) =>
        aXios.post("/auth/register", data)
    );

    const handleSubmit = (data) => {
        signUpMutation.mutate({...data, user_type:"applicant" });
    };


    useEffect(() => {
        const { data, error } = signUpMutation
        console.log({ data, error })
        if (data?.status === 201) {
            Notifications.show(
                {
                    w: 250,
                    message: "Account created",
                    title: "Success",
                    color: "green",
                    icon: <VscPass />
                }
            )
            setAuthToken("email", form.values.email)
            setShowModal(true);
        }

        if (error?.response?.status === 409) {
            Notifications.show(
                {
                    w: 250,
                    message: "Email taken",
                    title: "Failed",
                    color: "red",
                    icon: <VscError />
                }
            )

        }


        if (error?.response?.status === 500) {
            Notifications.show(
                {
                    w: 250,
                    message: "An error occurred",
                    title: "Failed",
                    color: "red",
                    icon: <VscError />
                }
            )

        }
    }, [signUpMutation.data, signUpMutation.error])

    useEffect(()=>{
        const {data,error} = resendMailOtpMutation;
        console.log({data,error})
        if(data){
            setShowModal(true)
        }
    },[resendMailOtpMutation.data, resendMailOtpMutation.error])

    return (
        <>

          <VerifyOtpModal handleResendMail={handleResendMail} email={form.values.email} setShowModal={setShowModal} showModal={showModal} />
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
