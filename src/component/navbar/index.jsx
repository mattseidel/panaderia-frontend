import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser, logout } from "../../stores/action/authActions";
import { getRecipes } from '../../stores/action/recipesActions'
import Login from "../auth/login";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: "Home", url: "/", icon: "fas fa-home" },
        { name: "Recetas", url: "/recetas", icon: "fas fa-utensils" },
      ],
      open: true,
    };
  }

  componentDidMount() {
    this.props.getRecipes()
    this.props.loadUser();
  }

  handleLogout = () => {
    this.props.logout();
  };

  handleChange() {
    let open = !this.state.open;
    this.setState({ open });
  }

  render() {
    let { user } = this.props.user.auth;
    return (
      <nav>
        <div className="hamburguer" onClick={() => this.handleChange()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={this.state.open ? "nav-links" : "nav-links open"}>
          {this.state.links.map((link) => (
            <li>
              <Link to={link.url}>
                <i className={link.icon}></i>
                {link.name}
              </Link>
            </li>
          ))}
          {this.props.user.auth.isAuthenticated === false ? (
            <li>
              <Login />
            </li>
          ) : (
            <>
              <li>{user.nombre}</li>
              <li>
                <button onClick={() => this.handleLogout()} className="button">
                  <i class="fas fa-sign-out-alt"></i> Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state,
});

const mapStateToDispatch = (dispatch) => {
  dispatch(loadUser);
};

export default connect(mapStateToProps, { loadUser, logout, getRecipes })(Navbar);
