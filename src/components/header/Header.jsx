import React from 'react'


const Resume = () => {
    return (
        <div className="resume-container">
        <header>
          <div className="header-content">
            <div className="avatar-container">
              <img
                src="https://i.postimg.cc/3Js03kRq/IMG-2766.jpg"
                alt="Аватарка"
                className="avatar"
              />
            </div>
            <div className="resyme">
              <h1>Imanaliev Adil</h1>
              <p>Год рождение</p>
              <p>26.09.01</p>
              <p>Телефон: <a href="tel:+0706199020">0706 199 020</a></p>
              <p>Email: <a href="mailto:imanaliev262@gmail.com">imanaliev262@gmail.com</a></p>
              <p> Разработчик, занимаюсь созданием веб-приложений.
              </p>
              <p>Стаж работы нету</p>
              <p>В чем я хорош:</p>
              <ul>
                <li className='html'>html/css</li>
                <li className='js'>js</li>
                <li className='react'>В процесе изучение Reacta </li>
              </ul>
              <p>Отучился в 9 классе 98 школы <br /> Сейчас учусь на 1 курсе по специальности фронтенд-разработчик в 99 лицее в группе f/r-24.</p>
            </div>
          </div>
        </header>
        </div> 
  );
};
export default Resume;
