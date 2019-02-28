import React, {Component} from 'react';
import './Contacts.css'

class Contacts extends Component {
    render() {
        return <div className='contacts'>
            <h3>Наши контакты</h3>

            <h1><a href="https://vk.com/archieff">Моя страница</a></h1>
            <h1><a href="http://attractor-school.com/bishkek">Страница компании которая меня обучает</a></h1>
        </div>;
    }
}

export default Contacts;