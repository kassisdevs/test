// HOC HIGHER ORDER COMPONENT
// Code resuse
// Render hijack
// Props manupilation
import React from 'react';
import reactDOM from 'react-dom';

const Template = (props) => (
  <div>
  <h1>Information</h1>
  <p>{props.text}</p>
  </div>
);

const withAdmin = (Template) => {
  return (props) => (
    <div>
    {props.isAdmin && <p>Please don not share this details</p>}
    <Template {...props} />
    </div>
  );
}

const RequireAuth = (Template) => {
  return (props) => (
    <div>
    {props.isLogged ? <Template { ...props } /> : <p>You have to login</p>}
    </div>
  );
};

const AdminTemplate = withAdmin(Template);
const UserAuth = RequireAuth(Template);

// reactDOM.render(<AdminTemplate isAdmin={true} text="This is the details" />, document.getElementById('app'));
reactDOM.render(<UserAuth isLogged={false} text="This is the details" />, document.getElementById('app'));