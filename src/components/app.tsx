import { h } from '../pragma';
import { LikeComponent } from './like';

export const App = (
  <main className="hello">
    <h1>
      Hello JSX!
    </h1>
    <LikeComponent big />
  </main>
);
