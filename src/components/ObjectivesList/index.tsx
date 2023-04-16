import { ObjectivesSection } from "./style";
import objective1 from "../../assets/objectiveFiles/Objetivo-1.png";
import objective2 from "../../assets/objectiveFiles/Objetivo-2.png";
import objective3 from "../../assets/objectiveFiles/Objetivo-3.png";
import objective4 from "../../assets/objectiveFiles/Objetivo-4.png";

export const ObjectivesList = () => {
  const handleMouseEnter = (event: any) => {
    event.target.style.filter = "grayscale(0%)";
    event.target.nextElementSibling.style.opacity = "1";
  };

  const handleMouseLeave = (event: any) => {
    event.target.style.filter = "grayscale(100%)";
    event.target.nextElementSibling.style.opacity = "0";
  };
  return (
    <ObjectivesSection>
      <h3>objetivos</h3>
      <ul>
        <li>
          <img src={objective1} alt="" />
        </li>
        <li>
          <img src={objective2} alt="" />
        </li>
        <li>
          <img src={objective3} alt="" />
        </li>
        <li>
          <img src={objective4} alt="" />
        </li>
      </ul>
    </ObjectivesSection>
  );
};
