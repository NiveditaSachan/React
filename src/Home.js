import React, { Component } from "react";
import {App2} from "./App2";
import "./App.css";

let imgPath= require("./images/Logo.jpg");

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export class Home extends Component() {


    render() {
        // this.state.formErrors will be referred as formErrors
        const {formErrors} = this.state;

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <a className="logo" href=""><img src={imgPath} alt="Lemoney" className="Image"></img></a>
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.firstName.length > 0 && (
                                <span
                                    class="errorMessage">{formErrors.firstName}</span>
                            )
                            }
                        </div>


                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                className={formErrors.lastName.length > 0 ? "error" : null}
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.lastName.length > 0 && (
                                <span
                                    className="errorMessage">{formErrors.lastName}</span>
                            )}
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                className={formErrors.email.length > 0 ? "error" : null}
                                placeholder="email"
                                type="text"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {emailRegex.test(formErrors.email.value) && (
                                <span
                                    class="errorMessage">{formErrors.email}</span>
                            )
                            }
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                className={formErrors.password.length > 0 ? "error" : null}
                                placeholder="password"
                                type="text"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {
                                formErrors.password.length < 6 && (
                                    <span>{formErrors.password}</span>
                                )
                            }
                        </div>

                        <div className="date">
                            <label htmlFor="date">Birthday</label>
                            <div className="birthday">

                                <select
                                    className={formErrors.day.length > 0 ? "error" : null}
                                    name="day"
                                    title="day"
                                    onChange={this.handleChange}
                                    value={this.state.day}
                                >
                                    <option value="0">Day</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>


                                <select
                                    className={formErrors.month.length > 0 ? "error" : null}
                                    name="month"
                                    title="month"
                                    onChange={this.handleChange}
                                    value={this.state.month}
                                >
                                    <option value="0">Month</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>

                                <select
                                    className={formErrors.year.length > 0 ? "error" : ""}
                                    name="year"
                                    title="year"
                                    onChange={this.handleChange}
                                    value={this.state.year}
                                >
                                    <option value="0">Year</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                </select>
                                <a id="birthdayHelp"
                                   href="https://www.google.com/search?q=date+of+birth&oq=date+of+birth&aqs=chrome..69i57j0l5.3716j0j4&sourceid=chrome&ie=UTF-8"
                                   class="birthdayHelp">Why do I need date of
                                    birth?</a>
                                <div>
                                    {formErrors.day == "Day" && (
                                        <span className="errorMessage">{formErrors.day}</span>)}

                                    {formErrors.day == "" ? null :
                                        <span className="errorMessage">{formErrors.day}</span>}

                                </div>
                                <div>
                                    {formErrors.month == "Month" && (
                                        <span className="errorMessage">{formErrors.month}</span>)}

                                    {formErrors.month == "" ? null :
                                        <span className="errorMessage">{formErrors.month}</span>}
                                </div>
                                <div>

                                    {formErrors.year == "Year" && (
                                        <span className="errorMessage">{formErrors.year}</span>)}

                                    {formErrors.year == "" ? null :
                                        <span className="errorMessage">{formErrors.year}</span>}


                                </div>
                                <div class="errorMessage">
                                    {!this.state.boolValid && (
                                        <span>All Fields are required!! </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already Have an Account?</small>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}