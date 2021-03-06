import React, { Component } from "react";
import { Link } from "react-router";
import { t } from "c-3po";

class SettingsAuthenticationOptions extends Component {
  render() {
    return (
      <ul className="text-measure">
        <li>
          <div className="bordered rounded shadowed bg-white p4">
            <h2>{t`Sign in with Google`}</h2>
            <p
            >{t`Allows users with existing Plena Data accounts to login with a Google account that matches their email address in addition to their Plena Data username and password.`}</p>
            <Link
              className="Button"
              to="/admin/settings/authentication/google"
            >{t`Configure`}</Link>
          </div>
        </li>

        <li className="mt2">
          <div className="bordered rounded shadowed bg-white p4">
            <h2>{t`LDAP`}</h2>
            <p
            >{t`Allows users within your LDAP directory to log in to Plena Data with their LDAP credentials, and allows automatic mapping of LDAP groups to Plena Data groups.`}</p>
            <Link
              className="Button"
              to="/admin/settings/authentication/ldap"
            >{t`Configure`}</Link>
          </div>
        </li>
      </ul>
    );
  }
}

export default SettingsAuthenticationOptions;
