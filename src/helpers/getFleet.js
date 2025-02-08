import AnnForm from '../assets/images/formations/AnnForm.jpg';
import ElenaForm from '../assets/images/formations/ElenaForm.jpg';
import IvanForm from '../assets/images/formations/IvanForm.jpg';
import JaneForm from '../assets/images/formations/JaneForm.jpg';
import JonathanForm from '../assets/images/formations/JonathanForm.jpg';
import MaryForm from '../assets/images/formations/MaryForm.jpg';
import MorpheusForm from '../assets/images/formations/MorpheusForm.jpg';
import NicolasForm from '../assets/images/formations/NicolasForm.jpg';
import PhilipForm from '../assets/images/formations/PhilipForm.jpg';
import Sho_WuFrom from '../assets/images/formations/Sho_WuFrom.jpg';
import SophiaForm from '../assets/images/formations/SophiaForm.jpg';

import Ann from '../assets/images/admirals/Ann.jpg';
import Elena from '../assets/images/admirals/Elena.jpg';
import Ivan from '../assets/images/admirals/Ivan.jpg';
import Jane from '../assets/images/admirals/Jane.jpg';
import Jonathan from '../assets/images/admirals/Jonathan.jpg';
import Mary from '../assets/images/admirals/Mary.jpg';
import Morpheus from '../assets/images/admirals/Morpheus.jpg';
import Nicolas from '../assets/images/admirals/Nicolas.jpg';
import Philip from '../assets/images/admirals/Philip.jpg';
import Sho_Wu from '../assets/images/admirals/Sho_Wu.jpg';
import Sophia from '../assets/images/admirals/Sophia.jpg';

export const infoAdmiralForm = (number = 1) => {
  switch (number) {
    case 1:
      return ElenaForm;
    case 2:
      return AnnForm;
    case 3:
      return Sho_WuFrom;
    case 4:
      return PhilipForm;
    case 5:
      return MaryForm;
    case 6:
      return NicolasForm;
    default:
      break;
  }
};

export const infoAdmiral = (number = 1) => {
  switch (number) {
    case 1:
      return Elena;
    case 2:
      return Ann;
    case 3:
      return Sho_Wu;
    case 4:
      return Philip;
    case 5:
      return Mary;
    case 6:
      return Nicolas;
    default:
      break;
  }
};
