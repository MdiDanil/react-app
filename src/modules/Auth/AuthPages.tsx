import { FC, ReactElement } from 'react';
import { SignInContainer } from './SignIn';
import { SignUpContainer } from './SignUp';

const SignInPage: FC = (): ReactElement => <SignInContainer />;
const SignUpPage: FC = (): ReactElement => <SignUpContainer />;

export { SignInPage, SignUpPage };
