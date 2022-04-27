function Landing(props) {
  return (
    <div
      className={`${
        props.step === 1 ? "d-flex w-50 mx-auto" : "d-none"
      } text-center justify-content-center align-items-center vh-100`}
    >
      <div>
        <h1 className='font-weight-600 '>Hello There!</h1>
        <p>Let's buy some insurance. It is going to take only a few steps</p>
        <button
          className='bg-green shadow-1 px-5 py-4 rounded border-0 text-lg mt-3'
          onClick={() => props.changeStep(2)}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Landing;
