import {Maybe} from '../Maybe/index.js';
import FormLogin from '../FormLogin/FormLogin.jsx';
import {SearchFilms} from '../SearchFilms/index.js';
import {useUserContext} from '../../provider/user/index.js';


const MainPage = () => {


    const {user} = useUserContext();
    
    
    return (
        <Maybe when={!!user} fallback={
            <FormLogin/>
        }>
            <SearchFilms/>
        </Maybe>
    );
};

export default MainPage;