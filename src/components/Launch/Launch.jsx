import logo from '../../img/logo.png';
import { LaunchStyled, LaunchImg } from './Launch.styled';

export const Launch = () => {
  return (
    <container>
      <LaunchStyled>
        <LaunchImg src={logo} alt="img" />
      </LaunchStyled>
    </container>
  );
};
