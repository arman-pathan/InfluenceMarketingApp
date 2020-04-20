import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Joi from "joi-browser";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import "react-widgets/dist/css/react-widgets.css";
import {If} from "react-if";
import moment from "moment";
import momentLocaliser from "react-widgets-moment";
import UserProfileFormEventHandlers from "./UserProfileFormEventHandlers";
import {getProfile, saveProfile} from "../../actions/userProfileActions";
import "../../css/userProfile.css";

const userRoles = require("../../utils/Constants").UserRoles;
const TaskCategories = require("../../utils/Constants").TaskCategories;
const Gender = require("../../utils/Constants").Gender;

momentLocaliser(moment);

class UserProfile extends UserProfileFormEventHandlers {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            aboutMe: "",
            city: "",
            streetAddress: "",
            state: "",
            country: "",
            zipcode: "",
            gender: "",
            phone: "",
            dateOfBirth: "",
            taskCategories: [],
            errors: {},
            exists: true,
            role: "",
            company: "",
            isCurrentUser: true //to different between current user and the visiting user
        };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleAboutMe = this.handleAboutMe.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleStreetAddress = this.handleStreetAddress.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handleZipcode = this.handleZipcode.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleDateOfBirth = this.handleDateOfBirth.bind(this);
        this.handleTaskCategories = this.handleTaskCategories.bind(this);
        this.handleCompany = this.handleCompany.bind(this);
    }

    schema = {
        firstName: Joi.string()
            .max(20)
            .required()
            .regex(/^[a-zA-Z\s]*$/)
            .label("First Name"),
        lastName: Joi.string()
            .max(20)
            .required()
            .regex(/^[a-zA-Z\s]*$/)
            .label("Last Name"),
        aboutMe: Joi.string().max(3000).label("About me"),
        streetAddress: Joi.string().max(30).label("Street Address"),
        city: Joi.string()
            .max(20)
            .regex(/^[a-zA-Z\s]*$/)
            .label("City"),
        state: Joi.string()
            .max(5)
            .regex(/^[a-zA-Z\s]*$/)
            .label("State"),
        country: Joi.string()
            .max(20)
            .regex(/^[a-zA-Z\s]*$/)
            .label("Country"),
        zipcode: Joi.string()
            .min(5)
            .max(5)
            .regex(/^[0-9]*$/)
            .label("Zipcode"),
        phone: Joi.string()
            .max(10)
            .min(10)
            .regex(/^[0-9]*$/)
            .label("Contact Number"),
        company: Joi.string().max(20).required().label("Company"),
    };

    componentDidMount() {
        if (this.props.location.state)
            this.setState({isCurrentUser: false})

        // TODO: Get username from local storage
        const username = this.props.location.state ? this.props.location.state.email : "sheena@gmail.com";

        this.props.getProfile(username, (response) => {
            if (response.status === 200) {
                this.setState({
                    firstName: response.data.message.name
                        ? response.data.message.name.firstName
                        : "",
                    lastName: response.data.message.name
                        ? response.data.message.name.lastName
                        : "",
                    aboutMe: response.data.message.aboutMe,
                    city: response.data.message.address
                        ? response.data.message.address.city
                        : "",
                    streetAddress: response.data.message.address
                        ? response.data.message.address.streetAddress
                        : "",
                    state: response.data.message.address
                        ? response.data.message.address.state
                        : "",
                    country: response.data.message.address
                        ? response.data.message.address.country
                        : "",
                    zipcode: response.data.message.address
                        ? response.data.message.address.zipcode
                        : "",
                    gender: response.data.message.gender,
                    phone: response.data.message.phone,
                    dateOfBirth: response.data.message.dateOfBirth,
                    taskCategories:
                        response.data.role === userRoles.INFLUENCER
                            ? response.data.message.taskCategories
                            : "",
                    role: response.data.role,
                    company:
                        response.data.role === userRoles.SPONSOR
                            ? response.data.message.company
                            : "",
                });
            } else {
                this.setState({exists: false});
            }
        });
    }

    handleProfile = (e) => {
        e.preventDefault();
        // TODO: Get username from local storage
        const email = "sheena@gmail.com";

        const data = {
            name: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
            },
            address: {
                streetAddress: this.state.streetAddress,
                city: this.state.city,
                state: this.state.state,
                country: this.state.country,
                zipcode: this.state.zipcode,
            },
            aboutMe: this.state.aboutMe,
            phone: this.state.phone,
            gender: this.state.gender,
            dateOfBirth: this.state.dateOfBirth,
            taskCategories: this.state.taskCategories,
            company: this.state.company,
        };

        this.props.saveProfile(data, email).then(() => {
            if (this.props.updated) {
                window.location.reload();
                window.alert("Profile updated successfully!");
            } else
                window.alert("Profile could not be updated. Please try again later.");
        });
    };

    render() {
        // TODO: if user is not logged in, redirect to home

        if (!this.state.exists) {
            return (
                <React.Fragment>
                    <p className="not_found">Profile does not exist</p>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div className="main">
                        <div className="display_photo">
                            <img
                                // TODO: add image
                                src="https://source.unsplash.com/random"
                                width="300"
                                height="200"
                                alt="User has not uploaded anything yet"
                            />
                            <If condition={this.state.isCurrentUser === true}>
                                <input
                                    type="file"
                                    name="files"
                                    // onChange={this.onPhotoChange}
                                />
                            </If>
                        </div>

                        <div className="profileName">
                            {this.state.firstName} {this.state.lastName}
                        </div>

                        <form>
                            <div className="profile_body">
                                <div className="profile_information_left">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            placeholder="First Name"
                                            onChange={this.handleFirstName}
                                            name="firstName"
                                            value={this.state.firstName}
                                            autoFocus={true}
                                            error={this.state.errors.firstName}
                                            disabled={this.state.isCurrentUser === false}
                                        />
                                        {this.state.errors.firstName && (
                                            <div className="error">
                                                {this.state.errors.firstName}{" "}
                                            </div>
                                        )}
                                    </div>
                                    <br/>

                                    <div className="form-group ">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            placeholder="Last Name"
                                            onChange={this.handleLastName}
                                            name="lastName"
                                            value={this.state.lastName}
                                            error={this.state.errors.lastName}
                                            disabled={this.state.isCurrentUser === false}
                                        />
                                        {this.state.errors.lastName && (
                                            <div className="error">{this.state.errors.lastName} </div>
                                        )}
                                    </div>
                                    <br/>

                                    <div className="form-group ">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="streetAddress"
                                            placeholder="Street Address"
                                            onChange={this.handleStreetAddress}
                                            name="streetAddress"
                                            value={this.state.streetAddress}
                                            error={this.state.errors.streetAddress}
                                            disabled={this.state.isCurrentUser === false}
                                        />
                                        {this.state.errors.streetAddress && (
                                            <div className="error">
                                                {this.state.errors.streetAddress}{" "}
                                            </div>
                                        )}
                                    </div>
                                    <br/>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            placeholder="City"
                                            name="city"
                                            onChange={this.handleCity}
                                            value={this.state.city}
                                            error={this.state.errors.city}
                                            disabled={this.state.isCurrentUser === false}
                                        />
                                        {this.state.errors.city && (
                                            <div className="error">{this.state.errors.city} </div>
                                        )}
                                    </div>
                                    <br/>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            placeholder="State"
                                            name="state"
                                            onChange={this.handleState}
                                            value={this.state.state}
                                            error={this.state.errors.state}
                                            disabled={this.state.isCurrentUser === false}
                                        />
                                        {this.state.errors.state && (
                                            <div className="error">{this.state.errors.state} </div>
                                        )}
                                    </div>
                                    <br/>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="country"
                                            placeholder="Country"
                                            name="country"
                                            onChange={this.handleCountry}
                                            value={this.state.country}
                                            error={this.state.errors.country}
                                            disabled={this.state.isCurrentUser === false}
                                        />
                                        {this.state.errors.country && (
                                            <div className="error">{this.state.errors.country} </div>
                                        )}
                                    </div>
                                    <br/>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="zipcode"
                                            placeholder="Zipcode"
                                            name="zipcode"
                                            onChange={this.handleZipcode}
                                            value={this.state.zipcode}
                                            error={this.state.errors.zipcode}
                                            disabled={this.state.isCurrentUser === false}
                                        />
                                        {this.state.errors.zipcode && (
                                            <div className="error">{this.state.errors.zipcode} </div>
                                        )}
                                    </div>
                                    <br/>

                                    <select
                                        className="form-control"
                                        name="gender"
                                        id="gender"
                                        placeholder="Gender"
                                        value={this.state.gender}
                                        onChange={this.handleGender}
                                        onMouseOver={this.handleGender}
                                        error={this.state.errors.gender}
                                        disabled={this.state.isCurrentUser === false}
                                    >
                                        <option value="" selected disabled>Select Gender</option>
                                        {Gender.map(value => (
                                            <option value={value} >{value}</option>
                                        ))}
                                    </select>
                                    {this.state.errors.gender && (
                                        <div className="error">{this.state.errors.gender} </div>
                                    )}
                                    <br/>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Contact Number"
                                            name="phone"
                                            onChange={this.handlePhone}
                                            value={this.state.phone}
                                            error={this.state.errors.phone}
                                            disabled={this.state.isCurrentUser === false}
                                        />
                                        {this.state.errors.phone && (
                                            <div className="error">{this.state.errors.phone} </div>
                                        )}
                                    </div>
                                </div>

                                <div className="profile_information_right">
                                    <div className="form-group">
                    <textarea
                        className="form-control"
                        name="aboutMe"
                        id="aboutMe"
                        rows={8}
                        onChange={this.handleAboutMe}
                        placeholder="About me"
                        error={this.state.errors.aboutMe}
                        value={this.state.aboutMe}
                        disabled={this.state.isCurrentUser === false}
                    />
                                        {this.state.errors.aboutMe && (
                                            <div className="error">{this.state.errors.aboutMe} </div>
                                        )}
                                    </div>
                                    <br/>

                                    <b>
                                        <label>Date of Birth: &nbsp; </label>
                                    </b>
                                    <DateTimePicker
                                        onChange={this.handleDateOfBirth}
                                        value={new Date(this.state.dateOfBirth)}
                                        name="dateOfBirth"
                                        id="dateOfBirth"
                                        time={false}
                                        placeholder="Date of Birth"
                                        error={this.state.errors.dateOfBirth}
                                        disabled={this.state.isCurrentUser === false}
                                    />
                                    {this.state.errors.dateOfBirth && (
                                        <div className="error">{this.state.errors.dateOfBirth} </div>
                                    )}
                                    <br/>

                                    <If condition={this.state.role === userRoles.SPONSOR}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="company"
                                                placeholder="Company"
                                                onChange={this.handleCompany}
                                                name="company"
                                                value={this.state.company}
                                                error={this.state.errors.company}
                                                disabled={this.state.isCurrentUser === false}
                                            />
                                            {this.state.errors.company && (
                                                <div className="error">
                                                    {this.state.errors.company}{" "}
                                                </div>
                                            )}
                                        </div>
                                    </If>

                                    <If condition={this.state.role === userRoles.INFLUENCER}>
                                        <div className="form-group">
                                            <b>
                                                <label className="task-categories">
                                                    Task Categories: &nbsp;{" "}
                                                </label>
                                            </b>
                                            <div className="form-check">
                                                {TaskCategories.map(value => (
                                                    <div>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value={value}
                                                            id={value}
                                                            onChange={this.handleTaskCategories}
                                                            checked={this.state.taskCategories.includes(
                                                                value)}
                                                            disabled={this.state.isCurrentUser === false}
                                                        />
                                                        <label className="form-check-label" htmlFor={value}>
                                                            {value}
                                                        </label>
                                                        <br/>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </If>
                                </div>
                            </div>
                            <If condition={this.state.isCurrentUser}>
                            <div className="submit_button">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    onClick={this.handleProfile}
                                    disabled={Object.keys(this.state.errors).length !== 0}
                                >
                                    Save
                                </button>
                            </div>
                            </If>
                        </form>
                    </div>
                </React.Fragment>
            );
        }
    }
}

UserProfile.propTypes = {
    getProfile: PropTypes.func.isRequired,
    saveProfile: PropTypes.func.isRequired,
    updated: PropTypes.object.isRequired,
};

UserProfile = reduxForm({
    form: "userProfileForm",
})(UserProfile);

UserProfile = connect(
    (state) => ({
        profile: state.userProfile.profile,
        updated: state.userProfile.updated,
    }),
    {getProfile, saveProfile}
)(UserProfile);

export default UserProfile;
