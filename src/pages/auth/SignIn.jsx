import {
    Stack,
    TextInput,
    PasswordInput,
    Button,
    Container,
    Divider,
    Flex,
    Text,
} from "@mantine/core";
import { Link as A, useNavigate } from "react-router-dom";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import { useForm, zodResolver } from "@mantine/form";
import { signInSchema } from "../../schema";
import { useMutation } from '@tanstack/react-query';
import axios from "axios"

const SignIn = () => {
    const navigate = useNavigate();

    const form = useForm({
        validate: zodResolver(signInSchema),
        initialValues: {
            email: "",
            password: "",
        },
    });

    const signUpMutation = useMutation((data) =>
        axios.post("/user/create", data)
    );

    const handleSubmit = (data) => {
        signUpMutation.mutate(data);
     };

    return (
        <>
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
                    <Button type="submit" color={"violet.5"} size="md">
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
