import React from "react";
import rd from 'react-dom/client';
import Contacts from "../components/contacts";
import Card from "../components/card";
import mapFunction from "../mapFunction";
const root=rd.createRoot(document.getElementById('root'));

root.render(
    <>
        {Contacts.map(mapFunction)}
    </>
);