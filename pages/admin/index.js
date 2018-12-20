import Link from 'next/link'


export default () => (
    <div>
        <div className="container section">
            <h1>Admin Home Page</h1>
            <p> Eventually a login form will be here. For now, please pretend like you logged in and 
                <Link href="admin/dashboard"> 
                    <a> click here like you were redirected.</a> 
                </Link>
            </p>
        </div>
    </div>
  )
