
import { Wrapper } from './components/Wrapper/Wrapper';
import { Screen } from './components/Screen/Screen';
import { BtnBox } from './components/BtnBox/BtnBox';
import { Button } from './components/Button/Button';
import { CalcProvider } from './context/CalcContext';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <BtnBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </BtnBox>
      </Wrapper>
    </CalcProvider>
  );

};

export default App;
