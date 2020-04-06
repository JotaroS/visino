import React, {Component} from 'react';
import * as Icon from 'react-feather';

class Navigation extends Component{
    render(){
        return(
              <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                  <ul className="nav flex-column">
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>devices</span>
                        <a className="d-flex align-items-center text-muted" href="index.html">
                        <Icon.PlusCircle className="feather"/>
                        </a>
                    </h6>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                      <Icon.Box size={20} className="feather"></Icon.Box>
                        tty.usbserial.xxxx
                      </a>
                    </li>
                  </ul>
      
                  <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Add Components</span>
                    <a className="d-flex align-items-center text-muted" href="index.html">
                      <Icon.PlusCircle className="feather"/>
                    </a>
                  </h6>
                  <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Logger
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
        )
    }
}

export default Navigation;