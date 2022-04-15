
import {useState, useEffect} from 'react';
//import PropTypes from 'prop-types';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section'
import Notification from './Notification/Notification';
import { AppBlock } from './App.styled';

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositivePercentage(Math.round(
        (good / (good + neutral + bad)) * 100,
      ))
  }, [good, neutral, bad])
 
  const onLeaveFeedback = (event) => {
    const { name }  = event.target;
    switch (name) {
      case 'good':
        setGood((prevState) => prevState + 1);
        break;
      case 'neutral':
        setNeutral((prevState) => prevState + 1);
        break;
      case 'bad':
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
 }

//  const onLeaveFeedback = (option) => {
//         this.setState(prevState => {
//             return ({
//                 [option]: prevState[option] + 1
//             })
//         })
//       this.countTotalFeedback();
//       this.countPositiveFeedbackPercentage();
//     }

        return (
          <AppBlock>
            <Section
              title="Please leave feedback">
              
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onClick={onLeaveFeedback} />
            </Section>

            
            <Section title="Statistics">
              {(total > 0)
                ?  
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positivePercentage} />
                :
                <Notification message="There is no feedback"></Notification>
              }   
              </Section>
               
        </AppBlock>
      )
    
}


 