import React, { useState, useEffect } from "react";
import { WalletParent, ContentWrapper, CButton } from "./wallet.styles";
import { ethers } from 'ethers';
import { formatEther, Contract } from 'ethers';
import admin from '../../abi/abi_1.json';
import {showNotification} from "@mantine/notifications"

import {
       connect,
       isMetaMaskInstalled,
       getProvider,
       getSigner,
     } from '../../connection/metamask';
import { BiCheckCircle } from "react-icons/bi";




const Wallet = () => {
       const [account, setAccount] = useState("");
       const [myBalance, setMyBalance] = useState("");
       const [adminName, setAdminName] = useState("");
       const [newAccount, setNewAccount] = useState("");
       const [chainError, setChainError] = useState(null);

       useEffect(() => {
              if (account) {
                     getBalance(account);
                     setChainError(null);
              }
              console.log(account);
       }, [chainError, account]);

       const checkMetamask = async () => {
              if (isMetaMaskInstalled) {
                     if (window.ethereum.chainId === '0x13881') {
                            const userAccount = await connect();
                            console.log(userAccount);
                            console.log(setAccount);
                            setAccount(userAccount[0]);
                     } else {
                            setChainError('change to Mumbai Polygon');
                            throw new Error('change to Mumbai Polygon');
                     }
              } else {
                     throw new Error('Install metamask');
              }
       };
       const getBalance = async myAccount => {
              const provider = getProvider();
              const balance = await provider.getBalance(myAccount);
              console.log(formatEther(balance));
              setMyBalance(formatEther(balance));
              return balance;
       };

       const accountContract = async () => {
              const signer = await getSigner();
              // Create a contract
              const accountContract = new Contract(
                     "0xa7F389C7475Bad51585c39fEeBedf4c00230b513",
                     admin,
                     signer
              );
              return accountContract;
       };


       const getAccount = async () => {
              try {
                     const accountCon = await accountContract();
                     console.log(accountCon);
                     const currentAccount = await accountCon.getLead();
                     setAdminName(currentAccount);
                     console.log(currentAccount);
              } catch (error) {
                     console.log(error);
              }
       };
       const _setAccount = async () => {
              try {
                     const accountCon = await accountContract();
                     console.log(accountCon);
                     const tx = await accountCon.setLead(newAccount);
                     const receipt = await tx.wait(1);
                     console.log(receipt);
                     if (receipt.status) {
                            showNotification({
                                  message:"Transaction successful",
                                  icon:<BiCheckCircle />,
                                  color:"teal"
                            })
                            
                     }
                     console.log(receipt);
              } catch (error) {
                     console.log(error);
              }
       };

       const walletConnection = () => {
              try {
                     checkMetamask();
              } catch (error) {
                     console.log(error);
              }
       };

       const contract = new Contract("0xa7F389C7475Bad51585c39fEeBedf4c00230b513", admin, getProvider);

       contract.on("Transfer", (from, to, amount, event) => {
              console.log({
                     from: from,
                     to: to,
                     amount: amount.toString(),
                     data: event
              });
       });

       return (<WalletParent>
              <h3>My Wallet</h3>
              <p>Balance</p>
              <ContentWrapper><p><br></br>****** ETH/ $******</p>
                     <CButton onClick={_setAccount}>Connect Wallet</CButton>
              </ContentWrapper>

       </WalletParent>


       )




}


export default Wallet;

