import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import View from "./View";

class ListDetails extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
      view: "none",
      msg: "more",
    };
    this.toggleview = this.toggleview.bind(this);
  }

  toggleview(e) {
    let dis = this.state.display;
    let val = e.target.name;
    console.log(val);
    this.state.display
      ? this.setState({
          view: "none",
          display: !dis,
          msg: "more",
        })
      : this.setState({
          view: "",
          display: !dis,
          msg: "less",
        });
  }

  render() {
    return (
      <div className="appointment-list item-list mb-3">
        {this.props.appointments.map((item) => (
          <div
            className="pet-item col media py-3"
            key={item.aptId}
            name={item.aptId}
          >
            <div className="mr-3">
              <button className="pet-delete btn btn-sm btn-danger">
                <FaTimes />
              </button>
            </div>
            {console.log(item)}
            <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span
                  className="pet-name"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    this.props.updateInfo(
                      "name",
                      e.target.innerText,
                      item.aptId
                    )
                  }
                >
                  {item.name}
                </span>
              </div>

              <div className="owner-name">
                <span className="label-item">Phone: </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    this.props.updateInfo(
                      "Phone",
                      e.target.innerText,
                      item.aptId
                    )
                  }
                >
                  {item.phone}
                </span>
              </div>

              <div className="owner-name">
                <span className="label-item">Email: </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    this.props.updateInfo(
                      "email",
                      e.target.innerText,
                      item.aptId
                    )
                  }
                >
                  {item.email}
                </span>
              </div>

              <div className="owner-name">
                <span>
                  <View
                    gen={item.gender}
                    ed={item.education}
                    skill={item.testlist}
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListDetails;
