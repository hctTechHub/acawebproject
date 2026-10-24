import {useState,useEffect,useRef} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"


const LoginComponent = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()
    const usernameInput = useRef(null)
    const [usernameInputError,setUsernameInputError] = useState({
        inErrorState:false,
        errorMsg:'Username is required'
    })
    const [passwordInputError,setPasswordInputError] = useState({
        inErrorState:false,
        errorMsg:'Passsword is required',
        validation:false
    })
    const passwordInput = useRef(null)
    const [user,setUser] = useState({
        username:'',
        password:''
    })
    
    const [isVisible,setIsVisible] = useState(false)
    const inputHandler = (e) => {
        const {name,value} = e.target
        if((name === 'username') && (value === '')){
            usernameInput.current.classList.add('border-red-500','border-2')
            setUsernameInputError({...usernameInputError,inErrorState:true})
        }
        else{
                usernameInput.current.classList.remove('border-red-500','border-2')
                setUsernameInputError({...usernameInputError,inErrorState:false})
        }
       if((name === 'password') && (value === '')){
            passwordInput.current.classList.add('border-red-500','border-2')
            setPasswordInputError({...passwordInputError,inErrorState:true})
        }
        else{
                passwordInput.current.classList.remove('border-red-500','border-2')
                setPasswordInputError({...passwordInputError,inErrorState:false})
        }

        setUser((user) => ({...user,[name]:value}))
        
    }
    const [bounce,setBounceTimer] = useState(true)
    const [authError,setAuthError] = useState({
        errMsg:'',
        errCode:''
    })
    const loginHandler = async (e) => {
        e.preventDefault()
        //console.log(user)
        try{
                const res = await axios.post(`${baseUrl}/login`,user)
                if(res.status === 200){
                    const token = res.data.token
                    window.localStorage.setItem("usrTkn",token)
                    navigate("/dashboard")
                }
                

        }
        catch(error){
             setAuthError({...authError,errMsg:error.response.data.error,errCode:error.response.status})
        }
    }
    
    const handleVisibility = () => {
        setIsVisible((isVisible) => !isVisible)
    }
    useEffect(() => {
        console.log(isVisible)
        console.log(user)
        console.log(bounce)
    })
   useEffect(() => {
        const timer = setTimeout(() => {
            setBounceTimer(false)
            return clearTimeout(timer)
        },1000)
   },[])
    return(
    <div className="pt-10 pb-150 bg-amber-50 h-full">
       <div className="h-[800px] bg-amber-50 flex flex-col justify-center">
            <div className="py-40 rounded-lg bg-amber-950 h-[400px] mx-auto w-[70%] flex flex-col items-center justify-center gap-6">
                    <h2 className="text-2xl text-amber-50 font-semibold">Enter Your Login Details</h2>
                    {
                        authError.errCode !='' && <div className={bounce ? 'p-3 bg-white rounded-lg animate-bounce':'p-3 bg-white rounded-lg'}>
                                            <h5 className="text-red-400">Error Code[{authError.errCode}]: {authError.errMsg}</h5>
                                        </div>
                    }
                
                   <div className="flex gap-4 w-[50%]">
                        <label for="username" className="leading-none text-amber-50">Username:</label>
                        <div className="flex flex-col w-full">
                            <input type="email"  ref={usernameInput} name="username" value={user.username} onChange={inputHandler} placeholder="Enter Username" className="px-2 py-1 rounded-sm placeholder:text-amber-950 focus:outline-0  bg-amber-50 border-b-2 w-full border-amber-950" />
                            {usernameInputError.inErrorState && <div><h4 className="text-red-500">{usernameInputError.errorMsg}</h4></div>}
                        </div>
                   </div>
                   <div className="flex gap-4 w-[50%]">
                        <label for="password" className="leading-none text-amber-50">Password:</label>
                        <div className="flex flex-col relative w-full">
                            <input type={isVisible ? "text" : "password"} ref={passwordInput} name="password" required value={user.password} onChange={inputHandler} placeholder="Enter Password" className="px-2 py-1 rounded-sm placeholder:text-amber-950 focus:outline-none bg-amber-50 border-b-2 w-full border-amber-950" />
                         {
                            (isVisible) ?
                            <svg xmlns="http://www.w3.org/2000/svg" onClick = { handleVisibility} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:cursor-pointer absolute top-1 right-0 size-6 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" onClick = {handleVisibility} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:cursor-pointer absolute top-1 right-0 size-6 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        }
                         {passwordInputError.inErrorState && <div><h4 className="text-red-500">{passwordInputError.errorMsg}</h4></div>}
                        </div>
                   </div>
                   <div className="flex gap-8 text-amber-50">
                        <span>Don't have an account yet? <a href="#" className="text-amber-200">Sign Up here</a></span>
                        <span>Forgot password? <a href="#" className="text-amber-200">Click Here</a></span>
                   </div>
                   <div className="w-full flex justify-center">
                            <button onClick={loginHandler} className="py-2 px-20 rounded-lg  bg-amber-200 text-amber-950 text-md font-semibold">Login</button>
                   </div>

            </div>

       </div>
    </div>

    )
}


export default LoginComponent