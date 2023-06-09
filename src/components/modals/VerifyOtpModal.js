import React from 'react'
import { Button, Container, Flex, Stack, TextInput, Text, Drawer } from '@mantine/core';
import logo from "../../assets/logo.png";


function VerifyOtpModal({showModal, setShowModal, email, handleResendMail}) {
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
                    <Flex justify={"center"} mt={20} mb={130}>
                        <img src={logo} alt="" />

                    </Flex>
                    <div className="header">
                        <h2>Verify Email Address</h2>
                        <p>
                            "A six digit code has been sent to "
                            <Text weight={"bold"} color={"black"} size={13} align='center'>{email}</Text>
                        </p>
                    </div>
                    <Container mb={100}>
                    </Container>

                    <Stack>
                        <TextInput label={"OTP"} placeholder='******' />
                        <Flex bg={"white"} align={'center'} justify={"flex-end"} gap={4}>
                            <p 
                            onClick={handleResendMail}
                            style={{
                                textAlign: "right",
                                position: "absolute",
                                transform: "translateY(-5px)",
                                backgroundColor: "white",
                                fontSize: "12px",
                                fontWeight: "500",
                                cursor:"pointer" 
                            }} >Resend OTP</p>
                        </Flex>
                        <Button color={"violet.5"} size='md' >Verify</Button>

                    </Stack>
                </div>
            </Drawer>
    </>
  )
}

export default VerifyOtpModal