import { FC, ReactElement, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import RoutesConst from '../../../Common/Routes/RoutesConst';

const SignInContainer: FC = (): ReactElement => {
  const navigate = useNavigate();
  const handleSignUpClick = useCallback(() => {
    navigate(RoutesConst.SIGN_UP);
  }, [navigate]);

  // ToDo: Add validation logic

  return <SignInForm handleSignUpClick={handleSignUpClick} />;
};

export default SignInContainer;
