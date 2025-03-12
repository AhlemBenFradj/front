import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab } from 'react-bootstrap';
import { ModalData } from '../../common/DataRightSide';
import { Scrollbar } from 'react-scrollbars-custom';
import {chat,notification,friends} from '../../common/commondata';

const RightSideClose = () => {

  document.querySelector(".sidebar-right")?.classList.remove("sidebar-open");

}
const Rightside = () => (

  <div>
    <div className="sidebar sidebar-right sidebar-animate">
      <div className="panel panel-primary card mb-0 box-shadow">
        <div className="tab-menu-heading border-0 p-3">
          <div className="card-title mb-0">Notifications</div>
          <div className="card-options ms-auto" >
            <Link to="#" className="sidebar-remove" onClick={() => RightSideClose()}><i className="fe fe-x"></i></Link>
          </div>
        </div>
        <div className='panel-body tabs-menu-body latest-tasks p-0 border-0'>
          <div className='tabs-menu '>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Friend">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="Chat"><i className='fe fe-message-circle tx-15 me-2'></i>Chat</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Notification"><i className="fe fe-bell tx-15 me-2"></i>Notifications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Friend"><i className="fe fe-users tx-15 me-2"></i>Friends</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="Chat">
                {chat.map((chats)=>(
                  <div className="list d-flex align-items-center border-bottom p-3"  key={Math.random()}>
                    <div className="">
                      <span className={`avatar bg-${chats.color} brround avatar-md`}>{chats.data}</span>
                    </div>
                    <Link className="wrapper w-100 ms-3" to="#">
                      <p className="mb-0 d-flex ">
                        <b>{chats.heading}</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1"></i>
                          <small className="text-muted ms-auto">{chats.text}</small>
                          <p className="mb-0"></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
                </Tab.Pane>
                <Tab.Pane eventKey="Notification">
                  <div className="list-group list-group-flush ">
                    {notification.map((notifications)=>(
                    <div className="list-group-item d-flex  align-items-center" key={Math.random()}>
                      <img className="avatar avatar-lg brround cover-image" alt='face-12' src={notifications.src1} />
                    {notifications.class}
                      <div className="ms-3">
                        <strong>{notifications.heading}</strong> {notifications.data}
                        <div className="small text-muted">
                        {notifications.text}
                        </div>
                      </div>
                    </div>
                    ))}
                  </div>
                </Tab.Pane>
                <Scrollbar id='side3' style={{ height: '700px' }}>
                  <Tab.Pane eventKey="Friend">
                    <div className="list-group list-group-flush ">
                      {friends.map((friend)=>(
                      <div className="list-group-item d-flex  align-items-center" key={Math.random()}>
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-9' src={friend.src1} />
                          {friend.class}
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">{friend.heading}</div>
                        </div>
                        <ModalData />
                      </div>
                      ))}
                    </div>
                  </Tab.Pane>
                </Scrollbar>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Rightside.defaultProps = {};

export default Rightside;
