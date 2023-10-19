import React, { useState } from 'react';
import './OptionBox.scss';
import { YEAR_DATE, MONTH_DATE, DAY_DATE, PHONEFRONT } from './registerData';

const OptionBox = ({
  date,
  suffix,
  birthYear,
  birthMonth,
  birthDay,
  setBirthYear,
  setBirthMonth,
  setBirthDay,
  phoneFront,
  setPhoneFront,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const selectControl = () => {
    setIsToggled(!isToggled);
  };

  const makeOption = (dateOption, changeDate) => {
    return dateOption.map((dateObj) => (
      <li
        key={dateObj.id}
        className="option"
        onClick={() => changeDate(dateObj.value)}
        value={dateObj.value}
      >
        {dateObj.value}
        {suffix}
      </li>
    ));
  };

  const selectValue = () => {
    switch (date) {
      case 'YEAR':
        return `${birthYear}${suffix}`;
      case 'MONTH':
        return `${birthMonth}${suffix}`;
      case 'DAY':
        return `${birthDay}${suffix}`;
      case 'PHONEFRONT':
        return `${phoneFront}`;
      default:
        return '';
    }
  };

  return (
    <div className="optionBox">
      <div
        className="select"
        onClick={selectControl}
        tabIndex="0"
        onBlur={() => setIsToggled(false)}
      >
        <div className="selected">
          <div className="selected-value">{selectValue()}</div>
          <div className="arrow" />
        </div>

        {isToggled && (
          <ul>
            {date === 'YEAR' && makeOption(YEAR_DATE, setBirthYear)}
            {date === 'MONTH' && makeOption(MONTH_DATE, setBirthMonth)}
            {date === 'DAY' && makeOption(DAY_DATE, setBirthDay)}
            {date === 'PHONEFRONT' && makeOption(PHONEFRONT, setPhoneFront)}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OptionBox;
