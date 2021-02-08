import React from 'react';
import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import DriverCard from './Components/DriverCard';
import LikeButton from './Components/LikeButton';
import ClickablePicture from './Components/ClickablePicture';
import Dice from './Components/Dice';
import Carousel from './Components/Carousel';
import NumbersTable from './Components/NumbersTable';

function App() {
  function Rating(props) {
    let result = '';
    for (let i = 0; i < 5; i++) {
      if (i < Math.round(Number(props.children))) {
        result += '★';
      } else {
        result += '☆';
      }
    }
    return <p>{result}</p>;
  }

  return (
    <div>
      <IdCard
        img="https://randomuser.me/api/portraits/men/44.jpg"
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
      />
      <IdCard
        img="https://randomuser.me/api/portraits/men/44.jpg"
        lastName="OBrien"
        firstName="Delores"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor
        r={Math.random(Math.floor() * 255)}
        g={Math.random(Math.floor() * 255)}
        b={Math.random(Math.floor() * 255)}
      />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
        name="Travis Kalanick"
        rating={<Rating>4.2</Rating>}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        carModel="Toyota Corolla Altis"
        carPlate="CO42DE"
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={<Rating>4.9</Rating>}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        carModel="Audi A3"
        carPlate="BE33ER"
      />
      <LikeButton /> <LikeButton />
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <Dice />
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <NumbersTable limit={12} />
    </div>
  );
}

export default App;
