import NameComp from './NameComp';
import ResultComp from './ResultComp';

const Memoization = () => {
  console.log('Memo Parent rendered');
  return (
    <div>
      <NameComp name={'Roshan'} />
      <ResultComp result={70} />
    </div>
  );
};

export default Memoization;
