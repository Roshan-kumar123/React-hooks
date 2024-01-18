import './App.css';
import { AuthProvider } from './context/AuthContext';
import Home from './Home';
// import ReducerHook from './hooks/ReducerHook';
// import MemoHook from './hooks/MemoHook';
// import Memoization from './Memoization';
// import MemoizeFunction from './MemoizeFunction';
// import RefHook from './hooks/RefHook';
// import StateHook from './hooks/StateHook';
// import EffectHook from './hooks/EffectHook';

function App() {
  return (
    <AuthProvider>
      <Home />
      {/* <ReducerHook /> */}
      {/* <MemoHook inputNumber={9} /> */}
      {/* <Memoization /> */}
      {/* <MemoizeFunction /> */}
      {/* <RefHook /> */}
      {/* <StateHook /> */}
      {/* <EffectHook /> */}
    </AuthProvider>
  );
}

export default App;
