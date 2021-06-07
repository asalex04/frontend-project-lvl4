import React from 'react';
import {
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Button,
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
  return (
    <div className="row flex-grow-1 h-75 pb-3">
      <div className="col-3 border-right">
        <div className="d-flex mb-2">
          <span>Каналы</span>
          <button type="button" className="ml-auto p-0 btn btn-link">+</button>
        </div>
        <ul className="nav flex-column nav-pills nav-fill">
          <ButtonGroup vertical>
            <Button className="nav-link btn-block mb-2 text-left btn btn-primary">general</Button>
            <Button className="nav-link btn-block mb-2 text-left btn btn-light">random</Button>
          </ButtonGroup>
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
        </ul>
      </div>
      <div className="col h-100">
        <div className="d-flex flex-column h-100">
          <div id="messages-box" className="chat-messages overflow-auto mb-3">
          </div>
          <div className="mt-auto">
            <form noValidate="" className="">
              <div className="input-group">
                <input name="body" aria-label="body" className="form-control" value="" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-primary">Отправить</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channels;
