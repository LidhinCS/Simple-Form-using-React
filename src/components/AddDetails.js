import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import "./Comp.css";

class AddDetails extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      education: "",
      gender: "",
      phone: "",
      email: "",
      skill: "",
      itemList: [
        "React Js,",
        "Node Js,",
        "Express Js,",
        "Next Js,",
        "Vue Js,",
        "Mongo Db,",
      ],
      ed: "",
      selected: false,
      emailerror: "Enter email",
      phoneerror: "",
      nameerror: "Enter name",
      listerror: "",
      phoneerror1: "Enter phone",
      test: "",
      testlist: [],
      emailerror1: "",
      phoneerror2: "",
      gendererror: "",
      skillerror: "",
      eduerror: "",
      placehold: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.validate = this.validate.bind(this);
    this.handleChangess = this.handleChangess.bind(this);
    this.multiple = this.multiple.bind(this);
  }

  validate = () => {
    let emailerror1 = "";
    let phoneerror = "";
    let phoneerror1 = "";
    let nameerror = "";
    let phoneerror2 = "";
    let gendererror = "";
    let skillerror = "";
    let eduerror = "";

    let val = this.state.phone;
    if (!this.state.email.includes("@")) {
      emailerror1 = "Enter valid email";
    }

    if (!this.state.phone) {
      phoneerror1 = "phone cannot be blank";
    }
    if (val.length > 10 || val.length < 10) {
      phoneerror2 = "Phone number should be 10 digits";
    }

    if (!Number(val)) {
      phoneerror = "Only numbers";
    }
    if (!this.state.name) {
      nameerror = "Name cannot be blank";
      this.setState({
        placehold: "placehold",
      });
    }
    if (!this.state.gender) {
      gendererror = "Gender cannot be blank";
    }
    if (!this.state.testlist.length) {
      skillerror = "Skills cannot be empty please select again";
    }
    if (!this.state.education.length) {
      eduerror = "Educations cannot be empty";
    }
    if (
      emailerror1 ||
      phoneerror ||
      nameerror ||
      phoneerror1 ||
      phoneerror2 ||
      gendererror ||
      skillerror ||
      eduerror
    ) {
      this.setState({
        emailerror1,
        phoneerror,
        nameerror,
        phoneerror1,
        phoneerror2,
        gendererror,
        skillerror,
        eduerror,
      });
      return false;
    }

    return true;
  };

  handleAdd(e) {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      let tempApt = {
        name: this.state.name,
        education: this.state.education,
        gender: this.state.gender,
        phone: this.state.phone,
        email: this.state.email,
        testlist: this.state.testlist,
      };

      this.props.addAppointment(tempApt);

      this.setState({
        name: "",
        education: "",

        phone: "",
        email: "",
        
        eduerror: "",
        skillerror: "",
        phoneerror2: "",
        phoneerror: "",
        phoneerror1: "",
        emailerror: "",
        gendererror: "",
      });
      this.props.toggleForm();
    } else {
      console.log("error");
    }
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log(this.state.ed);
  }
  handleChangess(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      selected: true,
    });
  }

  multiple(e) {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);

    this.setState({
      testlist: value,
    });
    console.log(this.state.testlist);
  }

  render() {
    return (
      <div
        className={
          "card textcenter mt-3 " +
          (this.props.formDisplay ? "" : "add-appointment")
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Click to add details
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="petName"
                readOnly
              >
                Name
              </label>

              <div className="col-md-10">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      <Badge variant="success">N</Badge>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder={this.state.nameerror}
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    onChange={this.handleChange}
                    value={this.state.name}
                    name="name"
                    id={this.state.placehold}
                  />
                </InputGroup>
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="ownerName"
              >
                Educational qualification
              </label>
              <div className="col-md-10">
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control
                    as="select"
                    name="education"
                    onChange={this.handleChange}
                    value={this.state.education}
                  >
                    <option disabled value="">
                      Select an option
                    </option>
                    <option value="Matriculation">Matriculation</option>
                    <option value="Plus2">Plus2</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Btech">Btech</option>
                  </Form.Control>
                </Form.Group>{" "}
                <span style={{ color: "red" }}>{this.state.eduerror}</span>
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptDate"
              >
                Gender
              </label>

              <div className="col-md-4">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Radio
                      onChange={this.handleChange}
                      name="gender"
                      value="male"
                    />{" "}
                    <span style={{ padding: 5 }}> Male</span>
                  </InputGroup.Prepend>
                  <InputGroup.Prepend>
                    <InputGroup.Radio
                      onChange={this.handleChange}
                      name="gender"
                      value="Female"
                    />{" "}
                    <span style={{ padding: 5 }}> Female</span>
                  </InputGroup.Prepend>
                  <InputGroup.Prepend>
                    <InputGroup.Radio
                      onChange={this.handleChange}
                      name="gender"
                      value="Other"
                    />{" "}
                    <span style={{ padding: 5 }}> Other</span>
                  </InputGroup.Prepend>
                </InputGroup>
                <span style={{ color: "red" }}>{this.state.gendererror}</span>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                Phone:
              </label>

              <div className="col-md-10">
                <>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        <Badge variant="success">P</Badge>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder={this.state.phoneerror1}
                      aria-describedby="basic-addon1"
                      onChange={this.handleChange}
                      value={this.state.phone}
                      name="phone"
                    />
                  </InputGroup>
                  <span style={{ color: "red" }}>{this.state.phoneerror}</span>
                  <span style={{ color: "red" }}>{this.state.phoneerror2}</span>
                </>
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-md-2  text-md-right" htmlFor="aptNotes">
                skills:
              </label>
              <div>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Control
                    as="select"
                    multiple
                    selectedItemList={this.state.testlist}
                    onChange={this.multiple}
                  >
                    <option>React Js,</option>
                    <option>Node Js</option>
                    <option>Express Js</option>
                    <option>Next Js</option>
                    <option>Vue Js</option>
                    <option>Mongo Db</option>
                  </Form.Control>
                </Form.Group>{" "}
                <span style={{ color: "red" }}>{this.state.skillerror}</span>
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                email:
              </label>
              <div className="col-md-10">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      <Badge variant="success">E</Badge>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder={this.state.emailerror}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={this.handleChange}
                    value={this.state.email}
                    name="email"
                  />
                </InputGroup>
                <span style={{ color: "red" }}>{this.state.emailerror1}</span>
              </div>
            </div>
            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add details
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddDetails;
