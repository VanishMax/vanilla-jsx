import './style.css';
import App from './components/markup';

const app = document.querySelector<HTMLDivElement>('#app')!

app.append(App as unknown as Node);
