import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = (props) => {
  
    const [userNameValue,setUserNameValue]=useState('');
    const [passwordValue,setPasswordValue]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
       axios.get('http://localhost:5000/login')
       .then((res)=>{
        const loginData=res.data.LoginData;

        loginData.map((user)=>{
          if(userNameValue===user.username && passwordValue===user.password){
            props.setIsAdmin(true);
            setPasswordValue("");
            setUserNameValue("");
        }
        else{
          toast.error('Kullanıcı adınız veya Şifreniz Hatalıdır!!!', {
            position: toast.POSITION.TOP_CE, // Uyarının konumu (isteğe bağlı)
          });
            
        }

        })

       })
       .catch((err)=>{
        console.log(err);
        toast.error('Tekrar Deneyiniz', {
          position: toast.POSITION.TOP_RIGHT, // Uyarının konumu (isteğe bağlı)
        });
       })

        
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Giriş Yap</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="text"
                  placeholder="Kullanıcı Adı"
                  value={userNameValue}
                  onChange={(e) => setUserNameValue(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Şifre"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login;
