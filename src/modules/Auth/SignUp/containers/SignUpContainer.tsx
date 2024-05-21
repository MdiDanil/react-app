import { FC, ReactElement, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import RoutesConst from '../../../Common/Routes/RoutesConst';

const SignUpContainer: FC = (): ReactElement => {
  const navigate = useNavigate();
  const handleSignInClick = useCallback(() => {
    navigate(RoutesConst.SIGN_IN);
  }, [navigate]);

  // ToDo: Add validation logic
  // ToDo: Create array of images and text and render it in a loop and cashe it

  return <SignUpForm handleSignInClick={handleSignInClick} />;
};

export default SignUpContainer;
