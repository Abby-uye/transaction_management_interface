
import styles from './index.module.css';
import React,{ useState } from 'react';
import {login} from "../../features/reduxUtils/slices/auth";
import { useAppDispatch } from '../../features/reduxUtils/stores';
import { RootState } from '../../features/reduxUtils/stores';
import logo from "../../assets/Group 3.png";
const SignIn :React.FC = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({ email, password }))
    };
    return(
        <div>
            <div className={styles.logoDiv}>
                <img src={logo} alt={"logo"}/>
            </div>
            <div className={styles.signInContainer}>
                <p className={styles.SignIn}>Sign In</p>
                <form className={styles.signInForm} onSubmit={handleSubmit}>
                    <div className={styles.formElements}>


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
                    <button className={styles.submitButton} onClick={handleSubmit} type="submit">Sign in</button>
                </form>
            </div>
        </div>

    );

}
