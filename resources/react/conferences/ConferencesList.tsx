import * as React from "react";
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    DateField,
    TextField,
    EditButton,
    TextInput,
    DateInput,
    ShowButton,
    SimpleShowLayout,
    DateTimeInput,
    Show, RichTextField
} from 'react-admin';
import ForumIcon from '@mui/icons-material/Forum';
import {ReactPropTypes} from "react";
import checkAuth from "../util/checkAuth";
import { RichTextInput } from 'ra-input-rich-text';

export const ConferenceIcon = ForumIcon;

export const ConferencesList = (props: ReactPropTypes) => (
    <List {...props} disableAuthentication hasCreate={checkAuth()} hasShow={true}>
        <Datagrid bulkActionButtons={checkAuth() ? undefined : false}>
            <TextField source="title" />
            <DateField source="date" />
            <TextField source="country" />
            <TextField source="city" />
            {checkAuth() ? <EditButton /> : null}
            <ShowButton/>
        </Datagrid>
    </List>
);

export const ConferencesShow = (props: ReactPropTypes) => (
    <Show disableAuthentication actions={false}>
        <SimpleShowLayout>
            <TextField source="title" />
            <DateField source="date" />
            <TextField source="country" />
            <TextField source="city" />
            <RichTextField source="description" />
            <TextField source="link" />
        </SimpleShowLayout>
    </Show>
);

const ConferenceTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const ConferencesEdit = (props: ReactPropTypes) => (
    <Edit title={<ConferenceTitle record={undefined} />} {...props}>
        <SimpleForm>
            <TextInput source="title" name="title"/>
            <RichTextInput source="description" name="description"/>
            <DateTimeInput source="date" name="date"/>
            <TextInput source="country" name="country"/>
            <TextInput source="city" name="city"/>
            <TextInput source="link" name="link"/>
        </SimpleForm>
    </Edit>
);

export const ConferencesCreate = (props: ReactPropTypes) => (
    <Create title="Create a Conference" {...props}>
        <SimpleForm>
            <TextInput source="title" name="title" required={true}/>
            <RichTextInput source="description" name="description" isRequired={true}/>
            <DateTimeInput source="date" name="date" required={true}/>
            <TextInput source="country" name="country" required={true}/>
            <TextInput source="city" name="city" required={true}/>
            <TextInput source="link" name="link" required={true}/>
        </SimpleForm>
    </Create>
);
