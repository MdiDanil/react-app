import React, { FC, ReactElement } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { text } from '../../../../internationalization';

interface SignUpFormProps {
  handleSignInClick: () => void;
}

const SignUpForm: FC<SignUpFormProps> = (
  props: SignUpFormProps,
): ReactElement => {
  const { handleSignInClick } = props;

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
        <FormGroup>
          <Label hidden>{text.t('auth:password')}</Label>
          <Input placeholder={text.t('auth:password')} type='password' />
        </FormGroup>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col>
            <Button>Submit</Button>
          </Col>
          <Col>
            <Button onClick={handleSignInClick}>{text.t('auth:signIn')}</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default React.memo(SignUpForm);
