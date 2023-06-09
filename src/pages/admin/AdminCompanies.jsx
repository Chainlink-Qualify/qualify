import {
    Modal,
    Avatar,
    TextInput,
    MultiSelect,
    Table,
    Checkbox,
    ActionIcon,
    Flex,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import { BiDotsHorizontalRounded, BiGroup, BiMoney, BiSearch } from "react-icons/bi";
const AdminCompanies = () => {
    const data = [
        {
            id: 1,
            name: "Fatima Aminu",
            email: "Teemah@qualify.com",
            duration: "20th Feb, 2022 - 20th Feb, 2023",
            Subs_type: "Yearly",
            img: "",
        },
        {
            id: 2,
            name: "Fatima Aminu",
            email: "Teemah@qualify.com",
            duration: "20th Feb, 2022 - 20th Feb, 2023",
            Subs_type: "Yearly",
            img: "",
        },
        {
            id: 3,
            name: "Fatima Aminu",
            email: "Teemah@qualify.com",
            duration: "20th Feb, 2022 - 20th Feb, 2023",
            Subs_type: "Yearly",
            img: "",
        },
        {
            id: 4,
            name: "Fatima Aminu",
            email: "Teemah@qualify.com",
            duration: "20th Feb, 2022 - 20th Feb, 2023",
            Subs_type: "Yearly",
            img: "",
        },
    ];
    const [searchValue, setSearchValue] = useState("");
    const [users, setUsers] = useState(data);
    const [showModal, setShowModal] = useState(false);

    const filtered = users.filter(
        ({ email, name }) =>
            email.trim().toLowerCase().includes(searchValue.trim().toLowerCase()) ||
            name.trim().toLowerCase().includes(searchValue.trim().toLowerCase())
    );

    const [user, setUser] = useState({ name: "", email: "" });
    const { name, email, duration } = user;
    const selectUser = (id) => {
        setUser(users.find((ele) => ele.id === id));
        setShowModal(true);
    };

    return (
        <>
            <Modal
                opened={showModal}
                onClose={() => setShowModal(false)}
                title={
                    <>
                        <Avatar
                            src={
                                "data:image/jpeg;base64,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"
                            }
                            size={100}
                            radius={"50%"}
                        />
                    </>
                }
                styles={{
                    close: {
                        position: "absolute",
                        right: "20px",
                        top: "20px",
                    },
                    body: {
                        padding: "30px",
                        marginTop: "20px !important",
                    },
                    header: {
                        backgroundColor: "#F8F8F8",
                    },
                    title: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "30px",
                    },
                }}
                size={500}
            >
                <TextInput label={"Company name"} value={name} />
                <TextInput label={"Email"} type="email" value={email} />
                <MultiSelect
                    defaultValue={"standard"}
                    data={[
                        { value: "Standard", label: "standard" },
                        { value: "Premium", label: "premium" },
                    ]}
                    label={"Subscription type"}
                />
                <TextInput label={"Duration"}  value={duration} />
            </Modal>

            <div className="table_container">
                <h3>Registered Companies</h3>
                <div className="card_container">
                    <div className="card">
                        <BiMoney /> 
                        <h1>175</h1>
                        <p>Standard Users</p>
                    </div>
                    <div className="card">
                        <BiGroup />
                        <h1>2,500</h1>
                        <p>Premium Users</p>
                    </div>
                </div>
                <TextInput
                    icon={<BiSearch />}
                    mt={20}
                    mb={20}
                    placeholder="Search by name or email"
                    w={350}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Table>
                    <thead>
                        <tr>
                            <th>
                                <Checkbox />
                            </th>
                            <th>Name</th>

                            <th>Email</th>

                            <th>Subs Type</th>

                            <th>Duration</th>

                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {filtered.map(({ duration, email, id, img, name, Subs_type }) => (
                            <tr key={id}>
                                <td>
                                    <Checkbox />
                                </td>

                                <td onClick={() => selectUser(id)}>
                                    <Flex gap={10} align={"center"}>
                                        <Avatar src={img} size={35} radius={35} />
                                        {name}
                                    </Flex>
                                </td>
                                <td>{email}</td>

                                <td>
                                    <ActionIcon size={"xs"} variant="subtle">
                                        {Subs_type}
                                    </ActionIcon>
                                </td>
                                <td>{duration}</td>

                                <td>
                                    <ActionIcon>
                                        <BiDotsHorizontalRounded size={22} />
                                    </ActionIcon>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default AdminCompanies;
