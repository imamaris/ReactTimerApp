var React = require ('react');
var { Link, IndexLink } = require('react-router');

var Navigation = () => {
    render: {
        return(
            <div className="top-bar">

                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                           React Timer App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active-link">Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            create by <a href="http://github.com/imamaris" target="_blank">Imam</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

module.exports = Navigation;