import React from 'react'
import { BrowserRouter as Router, Switch, Route,Link,useParams,useRouteMatch } from "react-router-dom";


function Example (){
    return(
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>淘宝</Link></li>
                    <li><Link to='/topics'>京东</Link></li>
                </ul>
                <Switch>
                    <Route  exact path='/'>
                        <Bao />
                    </Route>

                    <Route path='/topics'>
                        <Dongs />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Bao(){
    return <h3>我是淘宝页面</h3>
}

function Dongs(){
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>我是京东页面</h2>
            <ul>
                <li>
                    <Link to={`${url}/个人内容`}>个人首页</Link>
                </li>
                <li>
                    <Link to={`${url}/内容信息`}>详情资料</Link>
                </li>
                <li>
                    <Link to={`${url}/收藏内容信息`}>我的收藏</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>内容详情</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );

}

function Topic(){
    let { topicId } = useParams();
    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}

export default Example