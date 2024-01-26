import { ReactComponent as Loginperson } from '../../assets/login-icon.svg';
import { useNavigate } from "react-router-dom";
import './login-icon.styles.css';

const LoginIcon = () => {
        const goToCheckoutHandler = () => {
            navigate('auth');
        }
        const navigate = useNavigate();
        return(
        <div className='login-icon-container' onClick={goToCheckoutHandler}>
            <Loginperson className='login-icon'/>
        </div>
    )
}

export default LoginIcon;