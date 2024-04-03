import { decode } from "base-64";
global.atob = decode;
import { jwtDecode } from "jwt-decode";

 const token_decode=(token)=>
{
try
{
    const decodedToken = jwtDecode(token);
    return decodedToken.roles;


}
catch(error)
{
    console.log(error);
}


}

export default token_decode;