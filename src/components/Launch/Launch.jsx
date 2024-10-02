import logo from '../../img/logo.png';
import { LaunchStyled, LaunchImg, LaunchTitle, LaunchTitleSpan } from './Launch.styled';

export const Launch = () => {
  return (
    <container>
      <LaunchStyled>
        <LaunchImg src={logo} alt="img" />
        <LaunchTitle>FIT<LaunchTitleSpan>BODY</LaunchTitleSpan></LaunchTitle>
      </LaunchStyled>
    </container>
  );
};
