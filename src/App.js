import "./App.css";
import Landing from "./components/Landing";
import UserInfo from "./components/UserInfo";
import Summary from "./components/Summary";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [step, setStep] = useState(1);
  const [summary, setSummary] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className='App'>
      <Landing changeStep={setStep} step={step} />
      <UserInfo
        setShow={setShow}
        setSummary={setSummary}
        changeStep={setStep}
        step={step}
      />
      <Summary summary={summary} changeStep={setStep} step={step} />
      <Modal changeStep={setStep} setShow={setShow} show={show} />
    </div>
  );
}

export default App;
