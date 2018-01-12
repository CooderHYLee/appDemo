/**
 * Author：lihongye
 * Create Date：2018/1/12
 * Modified By：lihongye
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from 'react'
import loadingImg from '../../images/loading/loading.png'
import * as Ons from 'react-onsenui'
import Tab from '../tab/Tab'
import Navigator from '../../common/Navigator'

const Loading = (props) => {
    return (
        <div>
            <img className="loadingImg" src={loadingImg}/>
            <Ons.Button onClick={()=> props.navigator.pushPage({
                    comp: Tab,
                    props: {key: "tab",}
                }
            )} className="loadingApp">启动应用</Ons.Button>
        </div>
    )
}

export default (props) => {
    return(
        <div>
            <Navigator initialRoute={{comp: Loading, props: {key: "Loading"}}} app={props.navigator}/>
        </div>
    )

}