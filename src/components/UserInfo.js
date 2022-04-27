import { useEffect, useState } from "react";
function UserInfo(props) {
  const [userInfo, setUserInfo] = useState({
    name: "azeemuddin",
    age: 25,
    country: "Hong Kong",
    premiumSelected: "Standard",
    premiumCost: null,
    currency: "HKD",
  });
  const [currencyMap, setCurrecyMap] = useState({
    "Hong Kong": {
      currency: "HKD",
      rate: 1,
    },
    USA: {
      currency: "USD",
      rate: 2,
    },
    Australia: {
      currency: "AUD",
      rate: 3,
    },
  });
  const [premiumType, setPremiumType] = useState({
    Standard: 0,
    Safe: 0.5,
    SuperSafe: 0.75,
  });

  useEffect(() => {
    if (userInfo.age <= 100) {
      const premium = userInfo.age * 10 * currencyMap[userInfo.country].rate;
      const type = premiumType[userInfo.premiumSelected];
      const calculated = premium + type * premium;
      setUserInfo({ ...userInfo, premiumCost: calculated });
    } else {
      setUserInfo({ ...userInfo, premiumCost: 0 });
    }
  });

  const updateSummaryAndStep = () => {
    if (userInfo.age <= 100) {
      props.changeStep(3);
      setUserInfo({
        ...userInfo,
        currency: currencyMap[userInfo.country].currency,
      });
      props.setSummary(userInfo);
    } else {
      props.setShow(true);
    }
  };

  return (
    <div
      className={`${
        props.step === 2 ? "d-block w-50 mx-auto" : "d-none"
      } text-center`}
    >
      <h1 className='font-weight-600 '>Tell use about yourself</h1>
      <div className='text-left'>
        <label htmlFor='name'>Name</label>
        <input
          className='p-3 form-control'
          type='text'
          autoComplete='off'
          onChange={(event) =>
            setUserInfo({ ...userInfo, name: event.target.value })
          }
          value={userInfo.name}
          id='name'
        />
        <label htmlFor='age'>Age</label>
        <input
          className='p-3 form-control'
          type='text'
          autoComplete='off'
          onChange={(event) =>
            setUserInfo({ ...userInfo, age: event.target.value })
          }
          value={userInfo.age}
          id='age'
        />
        <label htmlFor='Country'>Where do you live</label>
      </div>
      <div>
        <select
          name='country'
          value={userInfo.country}
          id='country'
          className='w-100 p-3 form-control'
          onChange={(event) =>
            setUserInfo({ ...userInfo, country: event.target.value })
          }
        >
          <option value='Hong Kong'>Hong Kong</option>
          <option value='USA'>USA</option>
          <option value='Australia'>Australia</option>
        </select>
      </div>

      <div className='text-left'>
        <input
          className='p-3 mr-2 form-control'
          type='radio'
          name='premium'
          checked={true}
          id='Standard'
          onChange={(event) =>
            setUserInfo({ ...userInfo, premiumSelected: event.target.value })
          }
          value='Standard'
        />
        <label className='mr-3' htmlFor='Standard'>
          Standard
        </label>
        <input
          className='p-3 mr-2 form-control'
          type='radio'
          name='premium'
          id='Safe'
          onChange={(event) =>
            setUserInfo({ ...userInfo, premiumSelected: event.target.value })
          }
          value='Safe'
        />
        <label className='mr-3' htmlFor='Safe'>
          Safe
        </label>
        <input
          className='p-3 mr-2 form-control'
          type='radio'
          name='premium'
          id='SuperSafe'
          onChange={(event) =>
            setUserInfo({ ...userInfo, premiumSelected: event.target.value })
          }
          value='SuperSafe'
        />
        <label className='mr-3' htmlFor='Super Safe'>
          Super Safe
        </label>
      </div>

      <div className='m-3 text-left ml-0'>
        Your premium is: {userInfo.premiumCost}
        {currencyMap[userInfo.country].currency}
      </div>
      <div>
        <button
          className='bg-green shadow-1 px-5 py-4 rounded border-0 text-lg mr-3'
          onClick={() => props.changeStep(1)}
        >
          Back
        </button>
        <button
          className='bg-green shadow-1 px-5 py-4 rounded border-0 text-lg'
          onClick={() => updateSummaryAndStep()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
