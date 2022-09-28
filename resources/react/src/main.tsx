import * as React from "react";
import ReactDOM from 'react-dom'
import { Admin, Resource } from 'react-admin';
import AuthProvider from '../components/AuthProvider' ;

import { ConferencesList, ConferencesEdit, ConferencesCreate, ConferenceIcon } from '../conferences/ConferencesList';

ReactDOM.render(<React.StrictMode>
    <Admin authProvider={AuthProvider}>
        <Resource name="Conferences"
                  list={ConferencesList}
                  edit={ConferencesEdit}
                  create={ConferencesCreate}
                  icon={ConferenceIcon}
                />
    </Admin>
</React.StrictMode>, document.getElementById('root'))
