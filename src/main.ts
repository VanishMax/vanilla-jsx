import './style.css';
import App from './components/app';

const app = document.querySelector<HTMLDivElement>('#app')!

app.append(App as unknown as Node);
