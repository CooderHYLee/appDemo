import React from 'react'
import * as Ons from 'react-onsenui'

const Test = (props) => {
    console.log(props)
    return (
        <Ons.Page
            renderToolbar={() => <Ons.Toolbar>

                <div className="center">first</div>
            </Ons.Toolbar>}>
            <h1>page first</h1>
            <Ons.Button onClick={()=> props.appNavigator.pushPage({
                    comp: Test2,
                    props: {key: "Test2",}
                }
            )} >跳到其他页面</Ons.Button>
        </Ons.Page>)
}

const Test1 = (props) => {
    return (
        <Ons.Page
            renderToolbar={() => <Ons.Toolbar>
                {/*<div className="left"><Ons.BackButton/></div>*/}
                <div className="center">first</div>
            </Ons.Toolbar>}>
            <h1>page second</h1>
        </Ons.Page>)
}

const Test2 = () => {
    return (
        <Ons.Page
            renderToolbar={() => <Ons.Toolbar>
                <div className="left"><Ons.BackButton/></div>
                <div className="center">first</div>
            </Ons.Toolbar>}>
            <h1>other Page</h1>
        </Ons.Page>)
}

const renderTabs = (props) => {
    console.log(props)
    return [
        {
            content: <Test key="first" appNavigator={props.appNavigator}/>,
            tab: <Ons.Tab key="first" label='first' icon='md-home'/>
        },
        {
            content: <Test1 key="second" appNavigator={props.appNavigator}/>,
            tab: <Ons.Tab key="second" label='second' icon='md-settings'/>
        }
    ]
}

const Tabs = (props) => {
    console.log(props)
    return (
        <Ons.Page>
            <Ons.Tabbar position='bottom' index={0} renderTabs={() => renderTabs({appNavigator: props.navigator})}/>
        </Ons.Page>
    )
}

export default Tabs
