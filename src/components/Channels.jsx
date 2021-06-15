import React from 'react';
import {
  ButtonGroup, Row, Col, Button, Container,
} from 'react-bootstrap';

const Channels = () => {
  const divStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
    opacity: 0,
    pointerEvents: 'none',
  };

  const addChannel = (e) => {
    e.preventDefault();
    alert('канал');
  };

  return (
    <Container className="flex-grow-1 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white">
        <Col className="col-2 px-0 pt-5 border-end bg-light">
          <div className="d-flex justify-content-between mb-2 px-4">
            <span>Каналы</span>
            <button type="button" className="ml-auto p-0 btn btn-link" onClick={addChannel}>+</button>
          </div>
          <ul className="nav flex-column nav-pills nav-fill">
            <ButtonGroup vertical>
              <li className="nav-item">
                <button type="button" className="w-100 px-4 text-left btn">general</button>
              </li>
              <li className="nav-item">
                <button type="button" className="w-100 px-4 text-left btn btn-secondary">random</button>
              </li>
            <li className="nav-item">
              <div role="group" className="d-flex mb-2 dropdown btn-group">
                <button type="button" className="text-left flex-grow-1 nav-link btn btn-light">ooo</button>
                <button aria-haspopup="true" aria-expanded="false" type="button" className="flex-grow-0 dropdown-toggle dropdown-toggle-split btn btn-light"></button>
                <div x-placement="bottom-start" aria-labelledby="" className="dropdown-menu" style={divStyle}>
                  <a href="#" className="dropdown-item" role="button">Удалить</a>
                  <a href="#" className="dropdown-item" role="button">Переименовать</a>
                </div>
              </div>
            </li>
            </ButtonGroup>
          </ul>
        </Col>
        <Col className="col d-flex flex-column h-100">
          <Row className="bg-light mb-4 p-3 shadow-sm small" />
          <Row id="messages-box" className="chat-messages overflow-auto mb-3 p-3" />
          <Row className="border-top mt-auto py-3 px-3">
            <Col>
              <form noValidate="" className="">
                <div className="input-group">
                  <input name="body" aria-label="body" className="form-control" value="" placeholder="Введите сообщение..."/>
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">Отправить</button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Channels;
