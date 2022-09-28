import * as React from "react";
import ReactDOM from 'react-dom'
import {Admin, Resource} from 'react-admin';
import AuthProvider from '../components/AuthProvider' ;
import {ConferencesList, ConferencesEdit, ConferencesCreate, ConferenceIcon} from '../conferences/ConferencesList';
import UserLayout from "../components/UserLayout/UserLayout";


ReactDOM.render(<React.StrictMode>
    <Admin authProvider={AuthProvider}
           layout={UserLayout}
    >
        <Resource name="Conferences"
                  list={ConferencesList}
                  edit={ConferencesEdit}
                  create={ConferencesCreate}
                  icon={ConferenceIcon}
        />
    </Admin>
</React.StrictMode>, document.getElementById('root'))
