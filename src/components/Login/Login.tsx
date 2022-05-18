import React, { useState ,useEffect} from 'react'

// interface Props {

// }


const Login: React.FunctionComponent = (props) => {

 const [provider, setProvider] = useState<string>('');
 const [url, setUrl] = useState<string>('');

 useEffect(() => {
   setProvider("")
   setUrl("")
 }, [])
 
 return (
  <div>login</div>
 )
}

export default Login