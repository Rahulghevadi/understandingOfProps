import './App.css';
import Nav from './components/Nav';
import Tweet from './components/Tweet'

function App(props) {
  const tweets = [{ name: 'Akhil', tweet: 'its my first tweet' },
  { name: 'Praveen', tweet: 'its my second tweet' },
  { name: 'Vinod', tweet: 'its my third tweet' }]
  return (
    <div className="App">
      <div><Nav /></div>
      <div><p />
        {tweets.map((tweet) => (
          <Tweet name={tweet.name} tweet={tweet.tweet} />
        ))}</div>



    </div>
  );
}

export default App;
