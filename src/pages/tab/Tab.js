import React from 'react'
import * as Ons from 'react-onsenui'

const Test = () => {
    return (
        <Ons.Page
            renderToolbar={() => <Ons.Toolbar>
                {/*<div className="left"><Ons.BackButton/></div>*/}
                <div className="center">first</div>
            </Ons.Toolbar>}>
            <h1>page first</h1>
        </Ons.Page>)
}

const Test1 = () => {
    return (
        <Ons.Page
            renderToolbar={() => <Ons.Toolbar>
                {/*<div className="left"><Ons.BackButton/></div>*/}
                <div className="center">first</div>
            </Ons.Toolbar>}>
            <h1>page second</h1>
        </Ons.Page>)
}

const renderTabs = () => {
    return [
        {
            content: <Test key="first"/>,
            tab: <Ons.Tab key="first" label='first' icon='md-home'/>
        },
        {
            content: <Test1 key="second"/>,
            tab: <Ons.Tab key="second" label='second' icon='md-settings'/>
        }
    ]
}

const Tabs = () => {
    return (
        <Ons.Page>
            <Ons.Tabbar position='bottom' index={0} renderTabs={() => renderTabs()}/>
        </Ons.Page>
    )
}

export default Tabs
