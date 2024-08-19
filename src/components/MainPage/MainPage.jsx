import {Maybe} from '../Maybe/index.js';
import FormLogin from '../FormLogin/FormLogin.jsx';
import {SearchFilms} from '../SearchFilms/index.js';
import {useUserContext} from '../../provider/user/index.js';


const MainPage = () => {


    const {isLogin} = useUserContext();
    
    
    return (
        <Maybe when={!!isLogin} fallback={
            <FormLogin/>
        }>
            <SearchFilms/>
        </Maybe>
    );
};

export default MainPage;