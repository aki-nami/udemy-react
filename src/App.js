import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 18},
    { name: "Hanako", age: 20}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>hi, i'm {props.name} and i'm {props.age} years old</div>
}
export default App;
