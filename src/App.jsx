import React, {useState} from 'react';
import FetchGithub from './Components/FetchGithub';
import FetchGithubHook from './Components/FetchGithubHook';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
    //estado
    const [componentClass, setComponentClass] = useState(true)

    //metodo para cambiar entre componente de clase o hook
    const changeComponent = () => {
        setComponentClass(prevComponent => (!prevComponent))
    }

    return(
        <>
        <Button color="primary" onClick={changeComponent}>Cambiar componente</Button>
        {componentClass ? <FetchGithub/> : <FetchGithubHook/>}
        </>
    )
}

export default App;