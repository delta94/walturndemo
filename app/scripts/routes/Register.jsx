import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import {Link } from "react-router-dom"
// import { ActionTypes } from "constants/index";
// import { fetchPopularRepos } from "actions/index";

// import Loader from "components/Loader";

export class Register extends PureComponent {
    // static propTypes = {
    //     dispatch: PropTypes.func.isRequired,
    //     github: PropTypes.object.isRequired
    // };

    componentWillMount() {
        // const { dispatch } = this.props;

        // dispatch(fetchPopularRepos());
    }

    handleClickCancel = e => {
        e.preventDefault();
        // const { dispatch } = this.props;

        // dispatch({ type: ActionTypes.CANCEL_FETCH });
    };

    render() {
        // const {
        //     github: { popularRepos }
        // } = this.props;
        // const output = {
        //     html: (
        //         <div className="app__private__running">
        //             <Loader />
        //             <div className="app__cancel">
        //                 <button
        //                     className="btn btn-primary btn-sm btn-icon btn-icon--lg"
        //                     onClick={this.handleClickCancel}
        //                 >
        //                     <i className="i-times-circle" />
        //                     <span>Cancel</span>
        //                 </button>
        //             </div>
        //         </div>
        //     )
        // };

        // if (popularRepos.status === "loaded") {
        //     output.html = (
        //         <div className="app__private__repos">
        //             {popularRepos.data.map(d => (
        //                 <div key={d.name}>
        //                     <a href={d.html_url} target="_blank">{`${
        //                         d.owner.login
        //                     }/${d.name}`}</a>
        //                     <div>{d.description}</div>
        //                 </div>
        //             ))}
        //         </div>
        //     );
        // }
        // const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        return (
            <div key="Private" className="app__private app__route">
                <div className="app__container">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div
                                className={
                                    `form-group${
                                        submitted && !username ? " has-error" : ""}`
                                }
                            >
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={username}
                                    onChange={this.handleChange}
                                />
                                {submitted &&
                                    !username && (
                                        <div className="help-block">
                                            Username is required
                                        </div>
                                    )}
                            </div>
                            <div
                                className={
                                    `form-group${
                                        submitted && !password ? " has-error" : ""}`
                                }
                            >
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                />
                                {submitted &&
                                    !password && (
                                        <div className="help-block">
                                            Password is required
                                        </div>
                                    )}
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                                {
                                    <img alt="img" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                                <Link to="/register" className="btn btn-link">
                                    Register
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
// function mapStateToProps(state) {
//     return { github: state.github };
// }

export default Register;
