
import styles from './index.module.css';
import React,{ useState } from 'react';
import {login, signup} from '../../features/reduxUtils/slices/auth';
import { useAppDispatch } from '../../features/reduxUtils/stores';
import { RootState } from '../../features/reduxUtils/stores';
import { useSelector } from 'react-redux';
 import logo from "../../assets/Group 3.png";


const CreateAnAccount: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const tokens = "RVSEC-8bb756a159b787007fa50b556b45d11d0b49c0c0c0a7b47b3364fa7d094009d2b404a106a71103b9aecb33f73b82f5be-1662632092469"
     localStorage.setItem("token", tokens);
    const storage = localStorage.getItem("token")
    console.log(storage);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(signup({ firstName, lastName, email, password }))
    };

    const {token, user, loading } = useSelector((state:RootState) => state.auth)

    console.log({token, user, loading})
    return (
        <div>
        <div className={styles.logoDiv}>
            <img src={logo} alt={"logo"}/>
        </div>
    <div className={styles.creatAccountContainer}>
        <p className={styles.createAccount}>Create Account</p>
            <form className={styles.createAccountForm} onSubmit={handleSubmit}>
                <div className={styles.formElements}>
                    <label className={styles.formLabel}>First name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder={"Enter first name"}
                    />

                    <label className={styles.formLabel}>Last name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder={"Enter last name"}

                    />
                    <label className={styles.formLabel}>Email Address</label>
                    <input
                        type="text"
                        name="email"
                        placeholder={"Enter email"}
                    />
                    <label className={styles.formLabel}>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder={"Enter password"}

                    />
                </div>
                <button className={styles.submitButton} onClick={handleSubmit} type="submit">Create Account</button>
            </form>
        </div>
        </div>
    );
};

export default CreateAnAccount;
