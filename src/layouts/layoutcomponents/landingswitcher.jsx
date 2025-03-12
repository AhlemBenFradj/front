import React, { useEffect} from 'react';
import { Scrollbar } from 'react-scrollbars-custom';
import { Link } from 'react-router-dom';
import * as SwitcherData from '../../common/switcherdata';
import { connect } from "react-redux"
import {SwitcherAction } from '../../common/redux/action';

const Landingswitcher = ({ SwitcherAction}) => {

  useEffect(() => {
    SwitcherData.localStorageBackUp1();

  })

  return (
    <div>
      <div className="switcher-wrapper">
        <div className="demo_changer">
          <div className="form_holder sidebar-right1">
            <Scrollbar className="hor-scroll">
              <div className="row">
                <div className="predefined_styles">
                  <div className="swichermainleft text-center">
                    <div className="p-3 d-grid gap-2">
                      <Link to='https://react.spruko.com/valex/' className="btn ripple btn-primary mt-0" target='_blank'>View Demo</Link>
                      <Link className="btn ripple btn-info"  to="">Buy Now</Link>
                      <Link to='https://themeforest.net/user/spruko/portfolio' className="btn ripple btn-danger" target='_blank'>Our Portfolio</Link>
                    </div>
                  </div>
                  <div className="swichermainleft text-center">
                    <h4>LTR AND RTL VERSIONS</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">LTR</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch25" id="myonoffswitch54" className="onoffswitch2-checkbox" onClick={() => SwitcherAction("LTR")} defaultChecked />
                            <label htmlFor="myonoffswitch54" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">RTL</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch25" id="myonoffswitch55" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction("RTL") }} />
                            <label htmlFor="myonoffswitch55" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="swichermainleft">
                    <h4>Theme Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Theme</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch1" id="myonoffswitch1" onClick={() => SwitcherAction('LightTheme')} className="onoffswitch2-checkbox" defaultChecked />
                            <label htmlFor="myonoffswitch1" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Theme</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch1" id="myonoffswitch2" onClick={() => { SwitcherAction('DarkTheme') }} className="onoffswitch2-checkbox" />
                            <label htmlFor="myonoffswitch2" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                   <div className="swichermainleft">
                    <h4>Reset All Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section my-4">
                        <button className="btn btn-danger btn-block"
                          onClick={() => { SwitcherAction('ResetAll1') }}
                          type="button">Reset All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Scrollbar>
          </div>
        </div>
      </div>
    </div>
  )
};


Landingswitcher.defaultProps = {};

const mapStateToProps = (state) => ({
  local_varaiable: state
})

export default connect(mapStateToProps, { SwitcherAction})(Landingswitcher);
