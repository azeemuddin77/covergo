function Summary(props) {
  if (props.summary) {
    const { name, age, country, premiumSelected, premiumCost, currency } =
      props.summary;
    return (
      <div
        className={`${
          props.step === 3 ? "d-block w-50 mx-auto" : "d-none"
        } text-center`}
      >
        <h1 className='font-weight-600 '>Summary</h1>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Where do you live:{country}</p>
        <p>Package:{premiumSelected}</p>
        <p>
          Premium:{premiumCost}
          {currency}
        </p>
        <div>
          <button
            className='bg-green shadow-1 px-5 py-4 rounded border-0 text-lg mr-3'
            onClick={() => props.changeStep(2)}
          >
            Back
          </button>
          <button
            className='bg-green shadow-1 px-5 py-4 rounded border-0 text-lg'
            onClick={() => props.changeStep(1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Summary;
