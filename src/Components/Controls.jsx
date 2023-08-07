import { StyledControls } from "./Styles/Controls.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faPalette,
  faDroplet,
  faGaugeHigh,
  faMinimize,
  faWandMagicSparkles,
  faShapes,
  faCalculator,
  faFloppyDisk,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

import OptionTab from "./OptionTab";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

function Controls({ backgroundColor }) {
  const {
    particlesCount,
    particlesSize,
    particlesColor,
    handleBackgroundColorChange,
    handleParticlesCountChange,
    handleParticlesSizeChange,
    handleParticlesColorChange,
  } = useContext(AppContext);

  return (
    <StyledControls>
      <header className="form-header">
        <FontAwesomeIcon icon={faGear} />
        <p>BACKGROUND SETTINGS</p>
      </header>
      <OptionTab
        tabTitle={"Background color"}
        icon={faPalette}
        subTitle={"Choose color"}
        handleOnChange={handleBackgroundColorChange}
        inputType={"color"}
        currentColor={backgroundColor}
      />
      <OptionTab
        tabTitle={"Particles count"}
        icon={faCalculator}
        subTitle={"Choose count"}
        inputType={"range"}
        rangeMin={11}
        rangeMax={100}
        rangeValue={particlesCount}
        // handleParticlesCountChange={handleParticlesCountChange}
        handleOnChange={handleParticlesCountChange}
      />
      <OptionTab
        tabTitle={"Particles size"}
        icon={faMinimize}
        subTitle={"Chose size"}
        inputType={"range"}
        rangeMin={10}
        rangeMax={100}
        rangeValue={particlesSize}
        handleOnChange={handleParticlesSizeChange}
      />
      <OptionTab
        tabTitle={"Particles color"}
        icon={faDroplet}
        subTitle={"Choose color"}
        inputType={"color"}
        handleOnChange={handleParticlesColorChange}
        currentColor={particlesColor}
      />
      <OptionTab
        tabTitle={"Particles shape"}
        icon={faShapes}
        subTitle={"Choose shape"}
      />
      <OptionTab
        tabTitle={"Particles speed"}
        icon={faGaugeHigh}
        subTitle={"Choose speed"}
      />
      <OptionTab
        tabTitle={"Animation style"}
        icon={faWandMagicSparkles}
        subTitle={"Chose animation"}
      />

      {/* <label>
            <p>Background color</p>
            <input type="color" name="" id="" />
            </label>
            <label>
            <p>Particles color</p>
            <input type="color" name="" id="" />
            </label>
            <label>
            <p>Particles size</p>
            <input type="range" name="" id="" />
            </label>
            <label>
            <p>Particles speed</p>
            <input type="range" name="" id="" />
            </label> */}
      <button className="reset-button">
        <FontAwesomeIcon icon={faFloppyDisk} /> SAVE SETTINGS
      </button>
      <button className="reset-button">
        <FontAwesomeIcon icon={faRotateLeft} />
        RESET SETTINGS
      </button>
    </StyledControls>
  );
}

export default Controls;
