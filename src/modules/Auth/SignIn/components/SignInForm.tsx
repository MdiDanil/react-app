import React, { FC, ReactElement } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { text } from '../../../../internationalization';

interface SignInFormProps {
  handleSignUpClick: () => void;
}

const SignInForm: FC<SignInFormProps> = (
  props: SignInFormProps,
): ReactElement => {
  const { handleSignUpClick } = props;
  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
      <Form>
        <FormGroup>
          <Label hidden>{text.t('auth:email')}</Label>
          <Input placeholder={text.t('auth:email')} type='email' />
        </FormGroup>
        <FormGroup>
          <Label hidden>{text.t('auth:password')}</Label>
          <Input placeholder={text.t('auth:password')} type='password' />
        </FormGroup>
        <Container className='d-flex justify-content-center align-items-center'>
          <Button> {text.t('auth:submit')}</Button>
          <Button onClick={handleSignUpClick}>{text.t('auth:signUp')}</Button>
        </Container>
      </Form>
    </Container>
  );
};

export default React.memo(SignInForm);
