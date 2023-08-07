import { StyledOptionTab } from "./Styles/OptionTab.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function OptionTab({
  tabTitle,
  subTitle,
  icon,
  currentColor,
  handleOnChange,
  inputType,
  rangeMin,
  rangeMax,
  rangeValue,

}) {
  const [optionActive, setOptionActive] = useState(false);

  const handleOptionActive = (e) => {
    e.preventDefault();
    setOptionActive(!optionActive);
  };

  return (
    <StyledOptionTab optionActive={optionActive}>
      <header className="option-header">
        <div className="title-container">
          <FontAwesomeIcon icon={icon} />
          <p>{tabTitle}</p>
        </div>
        <button
          className="chevron-button"
          onClick={(e) => handleOptionActive(e)}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </header>
      {optionActive && (
        <div className="option-body">
          <label>
            <p className="option-body-text">{subTitle}</p>
            {inputType === "color" && (
              <input
                type="color"
                name=""
                id=""
                value={currentColor}
                onChange={handleOnChange}
              />
            )}

            {inputType === "range" && (
              <input
                type="range"
                name=""
                id=""
                min={rangeMin}
                max={rangeMax}
                value={rangeValue}
                onChange={handleOnChange}
              />
            )}
          </label>
        </div>
      )}
    </StyledOptionTab>
  );
}

export default OptionTab;
