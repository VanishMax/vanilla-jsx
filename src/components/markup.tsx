import { h } from '../pragma';
import { LikeComponent } from './like';

const App = (
  <main className="hello">
    <h1>
      Hello JSX!
    </h1>
    <LikeComponent big />
  </main>
);

export default App;
