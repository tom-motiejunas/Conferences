import * as React from "react";
import ReactDOM from 'react-dom'
import {Admin, fetchUtils, Options, Resource} from 'react-admin';
import AuthProvider from '../components/AuthProvider' ;
import {ConferencesList, ConferencesEdit, ConferencesCreate, ConferenceIcon, ConferencesShow} from '../conferences/ConferencesList';
import UserLayout from "../components/UserLayout/UserLayout";
import simpleRestProvider from 'ra-data-simple-rest';
import i18nProvider from "../components/i18nProvider";

const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const auth = localStorage.getItem('auth');
    const token = auth ? JSON.parse(auth).token : '';

    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('http://localhost/api', httpClient);

ReactDOM.render(<React.StrictMode>
    <Admin authProvider={AuthProvider}
           layout={UserLayout}
           dataProvider={dataProvider}
           i18nProvider={i18nProvider}>
        <Resource name="conference"
                  list={ConferencesList}
                  edit={ConferencesEdit}
                  create={ConferencesCreate}
                  show={ConferencesShow}
                  icon={ConferenceIcon}
        />
    </Admin>
</React.StrictMode>, document.getElementById('root'))
