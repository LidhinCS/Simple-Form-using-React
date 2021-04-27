import React, { Component } from "react";
import "../css/App.css";

import AddDetails from "./AddDetails";

import ListDetails from "./ListDetails";

import { findIndex } from "lodash";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      formDisplay: true,

      lastIndex: 0,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointment = this.addAppointment.bind(this);

    this.updateInfo = this.updateInfo.bind(this);
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay,
    });
  }

  updateInfo(name, value, id) {
    let tempApts = this.state.myAppointments;
    let aptIndex = findIndex(this.state.myAppointments, {
      aptId: id,
    });
    tempApts[aptIndex][name] = value;
    this.setState({
      myAppointments: tempApts,
    });
  }

  addAppointment(apt) {
    let tempApts = this.state.myAppointments;
    apt.aptId = this.state.lastIndex;
    tempApts.unshift(apt);
    this.setState({
      myAppointments: tempApts,
      lastIndex: this.state.lastIndex + 1,
    });
  }
  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddDetails
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addAppointment={this.addAppointment}
                />

                <ListDetails
                  appointments={this.state.myAppointments}
                  updateInfo={this.updateInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
