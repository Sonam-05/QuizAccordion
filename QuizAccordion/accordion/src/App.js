import { React, lazy, Suspense } from 'react';
import './App.css';
const Quiz = lazy(() => import('./components/Quiz'))

function App() {
  return (
    <div className="App">
      <h1 className="mainHeading">Quiz</h1>
      <section className="blank"></section>
      <Suspense fallback={<div>Please wait...loading...</div>}>
        <Quiz />
      </Suspense>
    </div>
  );
}

export default App;
