/* REACT */
import React from "react";

const Navigation = ({ bottom }) => {
    return (
        <div className="nav-container">
            {bottom ? <BottomNav /> : <TopNav />}
        </div>
    );
};

const TopNav = () => {
    return (
        <div className="nav-container">
            <span className="input-container">
                <div className="search-icon">
                    <i className="fas fa-search"></i>
                </div>
                <input type="text" className="top-input" placeholder="Search" />
                <div className="top-input-clear-btn">
                    <i className="fas fa-times-circle"></i>
                </div>
            </span>
            <span className="nav-label">Sort:&nbsp;</span>
            <select className="top-selector">
                <option value="id">Number</option>
                <option value="name">Name</option>
                <option value="height">Height</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    );
};

const BottomNav = () => {
    return (
        <div className="nav-container">
            <div className="bottom-button-container">
                <button className="nav-btn left">
                    <i className="fas fa-caret-left"></i>
                </button>
                <button className="nav-btn">#</button>
                <button className="nav-btn right">
                    <i className="fas fa-caret-right"></i>
                </button>
            </div>

            <span className="nav-label">Show&nbsp;</span>
            <div className="bottom-button-container">
                <button className="nav-btn left">10</button>
                <button className="nav-btn">20</button>
                <button className="nav-btn right">50</button>
            </div>
            <span className="nav-label">&nbsp;per page.</span>
        </div>
    );
};

export default Navigation;
