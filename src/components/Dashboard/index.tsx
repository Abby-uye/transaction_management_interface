
import NavBar from "../NavBar";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import addTransactionImage from "../../assets/add.png";

const Dashboard: React.FC = () => {
    const [referenceList, setReferenceList] = useState<string[]>([]);

    const [amount, setAmountList] = useState<string[]>([]);

    const [currency, setCurrencyList] = useState<string[]>([]);

    useEffect(() => {
        const handleDisplayTransactionList = async () => {
            const authenticationToken = "RVSEC-8bb756a159b787007fa50b556b45d11d0b49c0c0c0a7b47b3364fa7d094009d2b404a106a71103b9aecb33f73b82f5be-1662632092469";
            try {
                const response = await fetch('https://integrations.getravenbank.com/v1/accounts/transactions', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${authenticationToken}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const transactions = data.data.transactions.slice(0, 15)
                const references = transactions.map((transaction: { reference: string }) => transaction.reference);
                const amount = transactions.map((transaction: { _value: string }) => transaction._value);
                const currency = transactions.map((transaction: { currency: string }) => transaction.currency);
                setReferenceList(references);
                setAmountList(amount)
                setCurrencyList(currency)

            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        handleDisplayTransactionList();
    }, []);

    return (
        <>
            <NavBar />
            <div className={styles.dashboard}>
                <div className={styles.sideBar}>
                    <div className={styles.userProfile}>
                        <div className={styles.nameAbrv}>
                            TU
                        </div>

                        <div className={styles.userDetails}>
                            <span className={styles.name}>Test User</span>
                            <span>email</span>
                        </div>
                    </div>

                    <div>
                        {/* Placeholder for other sidebar items */}
                    </div>
                </div>

                <div>
                    <div className={styles.transactionContainer}>
                        <div className={styles.transaction}>
                            <h3>Transactions</h3>
                            <p>View all your transaction in the list of product</p>
                        </div>

                        <div>
                            <img src={addTransactionImage} alt={"add transaction"} width={30}/>
                        </div>
                    </div>

                    <div className={styles.transactionTable}>
                        <div>
                            <h3>Reference</h3>
                        </div>

                        <div>
                            <h3>Amount</h3>
                        </div>

                        <div>
                            <h3>Transaction Date</h3>
                        </div>

                        <div>
                            <h3>Updated Last</h3>
                        </div>

                        <div>
                            <h3>Status</h3>
                        </div>

                        <div>
                            <h3>Action</h3>
                        </div>
                    </div>

                    <div className={styles.transactionValues}>

                        <ul>
                            {referenceList.map((reference, index) => (
                                <li key={index}>
                                    <span>{reference}</span>
                                </li>
                            ))}
                        </ul>

                             <ul>
                        {currency.map((currency, index) => (
                            <li key={index}>
                                <span>{currency}</span>
                            </li>
                        ))}</ul>

                        <ul>
                            <div className={styles.amountList} >

                                {amount.map((amount, index) => (
                                    <li key={index}>
                                        <span>{amount}</span>
                                    </li>
                                ))}
                            </div>
                        </ul>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Dashboard;

