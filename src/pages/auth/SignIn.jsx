import {
    Stack,
    TextInput,
    PasswordInput,
    Button,
    Container,
    Divider,
    Flex,
    Text,
    Loader
} from "@mantine/core";
import { Link as A, useNavigate } from "react-router-dom";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import { useForm, zodResolver } from "@mantine/form";
import { signInSchema } from "../../schema";
import { useMutation } from '@tanstack/react-query';
import { aXios } from '../../config';
import { useEffect, useState } from "react";
import { Notifications } from '@mantine/notifications';
import { VscError, VscPass } from "react-icons/vsc";
import { setAuthToken } from "../../utils/auth";
import { VerifyOtpModal } from '../../components';


const SignIn = () => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false)


    const form = useForm({
        validate: zodResolver(signInSchema),
        initialValues: {
            email: "",
            password: "",
        },
    });

    const signInMutation = useMutation((data) =>
        aXios.post("/auth/login", data)
    );

    const handleSubmit = (data) => {
        signInMutation.mutate(data);
    };

    const resendMailOtpMutation = useMutation(
        (data) =>
            aXios.post("/auth/verify/resend-token", data)
    );

    const handleResendMail = () => {
        resendMailOtpMutation.mutate({ email: form.values.email });
    }


    useEffect(() => {
        const {data, error} = signInMutation;
        console.log({data, error})

        if (error?.response?.data?.message.includes("verified")) {
            Notifications.show(
                {
                    w: 280,
                    message: "Email not verified",
                    title: "Failed",
                    color: "red",
                    icon: <VscError />
                }
            )
            setAuthToken("email", form.values.email)
            handleResendMail()
            Notifications.show(
                {
                    w: 280,
                    message: "Sending Otp",
                    icon: <Loader  variant="dots" />,
                    color: "transparent",
                    styles: {
                        icon: {
                            backgroundColor: "white"
                        }
                    }
                }
            )
        }

        if (error?.response?.data?.message.toLowerCase().includes("invalid")) {
            Notifications.show(
                {
                    w: 280,
                    message: "Incorrect email or password",
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
                    message: "An error occurred \n Try again",
                    title: "Failed",
                    color: "red",
                    icon: <VscError />
                }
            )

        }


    }, [signInMutation.data, signInMutation.error])

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
                <h2>Sign in</h2>
                <p>Welcome back! Please enter your details.</p>
            </div>

            <form action="" onSubmit={form.onSubmit((data) => handleSubmit(data))}>
                <Stack>
                    <TextInput
                        placeholder="Jjamesjohnson@gmail.com"
                        label={"Email"}
                        {...form.getInputProps("email")}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="**************"
                        {...form.getInputProps("password")}
                    />
                    <Button loading={signInMutation.isLoading} type="submit" color={"violet.5"} size="md">
                        Sign in
                    </Button>

                    <Container p={0} w={"100%"}>
                        <Flex bg={"white"} align={"center"} justify={"center"} gap={4}>
                            <p
                                style={{
                                    textAlign: "center",
                                    position: "absolute",
                                    transform: "translateY(20px)",
                                    backgroundColor: "white",
                                    padding: "20px",
                                }}
                            >
                                or
                            </p>
                        </Flex>
                        <Divider mt={20} mb={20} />
                        <A to={"http://localhost:8084/api/v1/auth/google"}>
                            <Button color="gray" fullWidth variant="outline">
                                <Flex align={"center"} gap={4}>
                                    <IoLogoGoogle color="black" size={18} />
                                    <Text color="black">Continue with Google</Text>
                                </Flex>
                            </Button>
                        </A>

                        <A to={""}>
                            <Button mt={10} color="gray" fullWidth variant="outline">
                                <Flex align={"center"} gap={4}>
                                    <IoLogoFacebook color="black" size={18} />
                                    <Text color="black">Continue with Facebook</Text>
                                </Flex>
                            </Button>
                        </A>
                    </Container>
                    <Text color={"violet.5"} size={13} align="center">
                        <A to={"/auth/forgot-password"}>Forgot password ?</A>
                    </Text>
                    <Text color={"black"} size={13} align="center">
                        Don't have an account?{" "}
                        <A style={{ color: "#752f9f" }} to={"/auth/sign-up"}>
                            Create an account
                        </A>
                    </Text>
                </Stack>
            </form>
        </>
    );
};

export default SignIn;
