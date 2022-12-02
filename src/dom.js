import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dom = () => {
    return (
        <div className="col-md-6">
            <h1>Vjudge Crawler</h1>
                <ul>
                  <li>
                    <Link to="trial">View Trial Ag-Grid</Link>
                  </li>
                </ul>
        </div>
    );
};

export default Dom;