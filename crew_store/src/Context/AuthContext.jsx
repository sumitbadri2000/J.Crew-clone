import axios from "axios"
import React from "react"

export const AuthContext = React.createContext()

export default function AuthContextProvider({children}){

    const [isAuth,setIsAuth] = React.useState(false)
    const login=async(form)=>{
        try{
          let res = await axios({
            method:"post",
            url:"https://reqres.in/api/login",
            data:{
              email:form.email,
              password:form.password
            }
          })
          setIsAuth(true)
          console.log(res)
    
        }catch(err){
          console.log(err)
        }
      }
      return(
        <AuthContext.Provider value={{isAuth,setIsAuth, login}}>
            {children}
        </AuthContext.Provider>
      )
}
