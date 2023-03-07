import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(()=>{
            navigate(-1);
        }, 1500)
    }, [])
    

    return (
        <div className='grid place-content-center w-full h-screen gap-2'>
            <h1>404 | Error</h1>
            <p>Cannot Find file requested</p>
        </div>
    );
}

export default ErrorPage;