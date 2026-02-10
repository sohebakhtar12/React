import Header from "./01header.jsx";
import Footer from "./01Footer.jsx";

import Food from "./01Food.jsx";
import Card from "./02Card.jsx";
import Button from "./03Button.jsx";
import Student from "./04StudentUseProps.jsx";
import UserGreeting from "./05UserGreeting.jsx";
import List from "./06List.jsx";

function App() {
  return (
    <>
       <h1>------------------Topic-3 BUTTON---------------------------------</h1>
      <Button />
      <h1>------------------Topic-2 CARD---------------------------------</h1>
      <Card />
      <Card />
      <h1>------------------Topic-1 INRO REACT---------------------------------</h1>
      <h1>Hello Soheb </h1>
      <Header />
      <Footer />
      <Food />
      <h1>--------------------Topic-4 Using props-------------------------------</h1>
      
      <Student name="Soheb Akhtar" age={23} isStudent={true} />
      {/* <Student name="Sarifh Nawaz" age={25} isStudent={false} />
      <Student name="Sawanaz Rani" age={27} isStudent={false} />
      <Student name="Johar Ali" age="34" isStudent={false} /> */}
      <Student />

      <h1>---------------------Topic-5 Conditional Rendering------------------------------</h1>

      <UserGreeting isLoggedIn={true}/>
      
      <h1>---------------------Topic-6 Array convert into List ------------------------------</h1>
     <List/>
    </>
  );
}

export default App;
