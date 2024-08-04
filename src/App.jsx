import './App.css';
import {Header} from './components/Header/index.js';
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout.jsx';
import Body from './layouts/Body/Body.jsx';
import FormLogin from './components/FormLogin/FormLogin.jsx';
import {useLocalStorage} from './hooks/useLocalstorage.hook.js';
import {Maybe} from './components/Maybe/index.js';
import {SearchFilms} from './components/SearchFilms/index.js';

const App = () => {

    const [state = [], setState] = useLocalStorage('user');

    const currentUser = state.find(el => el.isLogin);

    return (
        <>
            <HeaderLayout>
                <Header state={state} setState={setState} currentUser={currentUser}/>
            </HeaderLayout>
            <Body>
                <Maybe when={!!currentUser} fallback={
                    <FormLogin state={state} setState={setState}/>
                }>
                    <SearchFilms/>
                </Maybe>
            </Body>
        </>
    );
};

export default App;

