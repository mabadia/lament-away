const React = require('react');
const Def = require('./Default');

function Error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry we cant find this page</p>
                <img src="" />
            </main>
        </Def>
    )
}