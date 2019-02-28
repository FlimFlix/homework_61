import React, {Component} from 'react';
import './AboutUs.css'

class AboutUs extends Component {
    render() {
        return <div className='about'>
            <h3>Наша компания конечно же топчик</h3>
            <p>Правда у нас нет названия</p>
            <p>И в принципе мы не существуем</p>
            <small>Но это не точно</small>
            <br/>
            <h3>Вот вам парочка ссылок на документацию по реакту</h3>
            <small>мы всего лишь хотим заморочить вам голову</small>
            <br/>
            <h1><a href="https://reactjs.org/docs/hello-world.html">Hello World</a></h1>
            <h1><a href="https://reactjs.org/docs/getting-started.html">getting-started</a></h1>


        </div>;
    }
}

export default AboutUs;