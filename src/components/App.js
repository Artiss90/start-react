import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default function App() {
  const responseFacebook = response => {
    console.log(response);
  };

  return (
    <div>
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={false}
        fields="name,email,picture"
        onClick={e => console.log(e)}
        scope="public_profile,user_friends,user_actions.books"
        callback={responseFacebook}
      />
    </div>
  );
}
