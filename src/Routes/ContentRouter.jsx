import {Route,Switch} from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Main=lazy(()=>import('@src/components/Main/Main.jsx'));

const Content=()=>{
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path='/' exact component={Main} />
            </Switch>
        </Suspense>
    )
}

export default Content;