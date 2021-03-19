import '../App.css'

const Login = (props) => {
  const {
    
    setEmail,
    setPassword,
    handleLogin,
    
    errorMessage,
  } = props;
  
  

  return (
    <>
    {/* <div className="container mt-5 bg-danger "> */}
      {/* <div className="d-flex flex-column mx-auto justify-content-center  col  p-2" > */}
      

      <div className="container h-100 align-items-center d-flex ">
      
      <div className="border bl  border-primary rounded col-md-5 p-4 mx-auto text-center">

        
      <h3 className="text-center">Iniciar Sesión</h3>

      <label className="float-left font-weight-bold">Email</label>

        <input
          className="form-control" 
          type="text" 
          placeholder="Email"
          autoFocus
          required
          name="email"
        
          onChange={(e)=> setEmail(e.target.value)}
      />
      

      <label className="float-left mt-3 font-weight-bold">Password</label>
        <input
          className="form-control" 
          type="password"
          placeholder="Password" 
          required
          name="password" 
          onChange={(e)=> setPassword(e.target.value)}
        />
        <span className="my-2 font-weight-bold d-block">{errorMessage}</span>
        
        <button className="btn-block btn btn-lg btn-primary mt-1" onClick={handleLogin}>Login</button>
      
          </div>
        </div>
        {/* </div>   */}
    </>
  )
};

export default Login;