import React, {useEffect} from 'react'
import {Router} from "./Router";
import {client} from "./lib/AppoloClient";
import {ApolloProvider} from '@apollo/client';
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App