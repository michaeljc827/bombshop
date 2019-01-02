import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div className="container section">
        <nav className="navbar navbar-expand-md">
            <Link href="/">
                <img className="logo" src="/static/bomb-shop-logo-3.png"/>
            </Link>
            <Link href="/shop">
                <a style={linkStyle}>Shop</a>
            </Link>
            <Link href="/admin">
                <a style={linkStyle}>Admin</a>
            </Link>
        </nav>
    </div>
)

export default Header