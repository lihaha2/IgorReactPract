import './App.css';
import './feedback.min.css';
import React, { Component } from "react";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import one from '../src/img/1.jpg'
import two from '../src/img/2.jpg'
import three from '../src/img/3.jpg'
import four from '../src/img/4.jpg'
import five from '../src/img/5.jpg'

class SliderGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className="gallery__wrapper">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          className="slider__first"
          arrows={false}
          autoplay={true}
        >
          <img className="slider__first-img" src={one} alt="" />
          <img className="slider__first-img" src={two} alt="" />
          <img className="slider__first-img" src={three} alt="" />
          <img className="slider__first-img" src={four} alt="" />
          <img className="slider__first-img" src={five} alt="" />
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          arrows={false}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          className="slider__second"
        >
          <img className="slider__img" src={one} alt="" />
          <img className="slider__img" src={two} alt="" />
          <img className="slider__img" src={three} alt="" />
          <img className="slider__img" src={four} alt="" />
          <img className="slider__img" src={five} alt="" />
        </Slider>
      </div>
    );
  }
}

const App = () => {
  const [handleItem, setHandleItem] = React.useState(1)
  const titles = ['Стеклоделие (стекловарение)', 'Технология', 'История', 'Муранское стекло', 'Технологии производства', 'Старинное стекло Англии']

  return (
    <div className="wrapper">
      <h1 className="content__title">Cтеклодувочные мастерские</h1>
      <div className="gallery">
        <SliderGallery />
      </div>
      <div className="content">
        <nav className="content__nav">
          <button style={handleItem === 1 ? { backgroundColor: '#aaa' } : { backgroundColor: '#bbb' }} onClick={() => setHandleItem(1)} className="content__nav-item">Глава 1</button>
          <button style={handleItem === 2 ? { backgroundColor: '#aaa' } : { backgroundColor: '#bbb' }} onClick={() => setHandleItem(2)} className="content__nav-item">Глава 2</button>
          <button style={handleItem === 3 ? { backgroundColor: '#aaa' } : { backgroundColor: '#bbb' }} onClick={() => setHandleItem(3)} className="content__nav-item">Глава 3</button>
          <button style={handleItem === 4 ? { backgroundColor: '#aaa' } : { backgroundColor: '#bbb' }} onClick={() => setHandleItem(4)} className="content__nav-item">Глава 4</button>
          <button style={handleItem === 5 ? { backgroundColor: '#aaa' } : { backgroundColor: '#bbb' }} onClick={() => setHandleItem(5)} className="content__nav-item">Глава 5</button>
          <button style={handleItem === 6 ? { backgroundColor: '#aaa' } : { backgroundColor: '#bbb' }} onClick={() => setHandleItem(6)} className="content__nav-item">Глава 6</button>
        </nav>
        <div className="content__body">
          <h2>{titles[handleItem - 1]}</h2>
          <p style={handleItem === 1 ? { display: 'block', opacity: 1 } : { display: 'none', opacity: 0 }}>
            Одна из древнейших технологий в материальной культуре, но сравнительно молодая отрасль промышленности. Основное сырьё при получении наиболее употребимых видов стекла — кремнезём. Варка стекла в настоящее время производится по нескольким методам, но общими для них являются достаточно строгие технологические параметры, основными из которых являются условия высокой чистоты производства и управляемый высокотемпературный режим, подразумевающие наличие соответствующего оборудования и инструментария. Продукты стеклоделия всегда имели и будут находить применение во всех областях деятельности человека.
          </p>
          <p style={handleItem === 2 ? { display: 'block', opacity: 1 } : { display: 'none', opacity: 0 }}>
            Процесс получения стекла подразумевает использование различных видов исходного сырья, что и предопределяет свойства его продуктов. Соответственно и потребность получения заданных свойств заставляет предъявлять определённые требования к компонентам. Как уже было отмечено, главным, самым доступным и дешёвым, а потому и наиболее употребимым в практике стеклоделия, является кремнезём; однако любая модификация требует использования дополнительных реактивов, что и определяет конечную стоимость изделия.          </p>
          <p style={handleItem === 3 ? { display: 'block', opacity: 1 } : { display: 'none', opacity: 0 }}>
            Первоначально считалось, что первая последовательная методика получения стекла была разработана и практиковалась в Египте, однако ряд археологических исследований XX века поставил под сомнение этот приоритет.          </p>
          <p style={handleItem === 4 ? { display: 'block', opacity: 1 } : { display: 'none', opacity: 0 }}>
            Муранское (венецианское) стекло — стекло, изготовленное по старинным технологиям, возникшим на острове Мурано близ Венеции.          </p>
          <p style={handleItem === 5 ? { display: 'block', opacity: 1 } : { display: 'none', opacity: 0 }}>
            Изначально мастерские стеклодувов располагались в небольших одноэтажных зданиях. У печи работали трое: мастер, его помощник и мальчик-ученик.
            Изготовление любого стекла начинается с песка. Для производства муранского стекла традиционно использовался песок из французского леса Фонтенбло, один из чистейших в мире. Песок нагревается до температуры 1200—1400 °C.
            Разогрев стеклянную массу, мастер берёт специальную трубку с мундштуком на одном конце и утолщением для забора стекла на другом. За две тысячи лет существования ремесла эта трубка не претерпела существенных изменений. Дополнительные декоративные материалы могут добавляться как в стеклянную массу, так и на поверхность выдуваемого «пузыря». Спектр изготавливаемых изделий чрезвычайно широк: вазы, бокалы, блюдца, подсвечники, фигурки животных, пресс-папье, абажуры, бусы и т. д.          </p>
          <p style={handleItem === 6 ? { display: 'block', opacity: 1 } : { display: 'none', opacity: 0 }}>
            Во время раннего Средневековья стекло, выпускавшееся в Англии, по составу было близко к европейским образцам на основе древесной золы. В X—XI веках в Англию начали приглашать французских мастеров для изготовления оконных стёкол. В храмах романского периода на верхнем ярусе присутствовали окна, и на стёкла был устойчивый спрос. Во время строительства крупных соборов (в Кентербери, Солсбери) такая необходимость возросла. В XI веке начали массово производить витражи, которыми украшались храмы. С XII века витражи были во всех готических соборах Англии.          </p>
        </div>
      </div>

      <div className="feedback">
        <div className="feedback__form">
          <div className="feedback__form-group">
            <label htmlFor="">Имя</label>
            <input type="text" placeholder="Максим Сосочкин" />
          </div>
          <div className="feedback__form-group">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="example@ex.com" />
          </div>
          <div className="feedback__form-group">
            <label htmlFor="">Телефон</label>
            <input type="tel" placeholder="+7 921 547 8329" />
          </div>
          <div className="feedback__form-group">
            <label htmlFor="">Сообщение</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Пишите все, что думаете"></textarea>
          </div>
          <button className="btn u-black u-btn u-btn-rectangle u-btn-submit u-button-style u-btn-1b">Отправить отзыв</button>
        </div>
      </div>
    </div>
  )
}

export default App