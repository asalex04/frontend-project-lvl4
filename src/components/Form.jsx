import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

const Basic = () => (
  <div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
      }}
      validationSchema={Yup.object().shape({
        nickName: Yup.string()
          .required('Nickname is required'),
        lastName: Yup.string()
          .min(6, 'Must be longer than 6 characters')
          .required('Required'),
      })}
    >
      <div className="container-fluid">
        <div className="row justify-content-center pt-5">
          <div className="col-sm-4">
            <Form>
              <form className="p-3">
                <div className="form-group">
                  <label className="form-label" htmlFor="username">Ваш ник</label>
                  <input name="username" autoComplete="username" required="" id="username" className="form-control" value="" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="password">Пароль</label>
                  <input name="password" autoComplete="current-password" required="" type="password" id="password" className="form-control" value="" />
                  <div className="invalid-feedback">Неверные имя пользователя или пароль</div>
                </div>
                <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
                <div className="d-flex flex-column align-items-center">
                  <span className="small mb-2">Нет аккаунта?</span>
                  <a href="/signup">Регистрация</a>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  </div>
);

export default Basic;
