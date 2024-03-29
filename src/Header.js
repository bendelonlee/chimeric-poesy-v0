import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const text = "<"
    return <button className='back' onClick={() => navigate('/')}>{text}</button>
}