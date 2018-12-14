import Header from '../components/Header';
import Head from 'next/head';

const generalLayout = {
    'text-align': 'center'
}

const responsiveImg = {
    width: "50%"
}

export default () => (
    <div>
        <div className="container section" style={generalLayout}>
            <h1>Home Page</h1>
        </div>
    </div>
  )