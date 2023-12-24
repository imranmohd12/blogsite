import {Logo,Container,LogoutBtn} from '../index';
import { Link } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';

const Header = ()=>{
    const authStatus = useSelector((state)=>state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name : 'Home',
            slug : '/',
            active : true,
        },
        {
            name : 'Login',
            slug : '/login',
            active : !authStatus,
        },
        {
            name : 'Signup',
            slug : '/signup',
            active : !authStatus,
        },
        {
            name : 'All Posts',
            slug : '/allposts',
            active : authStatus,
        },
        {
            name : 'Add Posts',
            slug : '/addposts',
            active : authStatus,
        }
    ]
    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item)=>(
                            item.active ? (
                                <li key={item.name}>
                                <button
                                onClick={()=>navigate(item.slug)}
                                >{item.name}</button>
                                </li>
                            ) : null
                        ))}
                        {authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;