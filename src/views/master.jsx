const React = require('react')
const PropTypes = require('prop-types')

const Master = ({ children, title, ctx }) => (
    <html>
        <head>
            <link
                href="/vendor/bootstrap-3.3.7/css/bootstrap.min.css"
                type="text/css"
                rel="stylesheet"
            />
            <link href="/css/style.css" type="text/css" rel="stylesheet" />
            <title>
                {title
                    ? `${title}`
                    : 'Today Lay'}
            </title>
        </head>
        <body>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                            TODAY LAY: gambling seed money for minors
                        </a>
                    </div>
                    <Userbox ctx={ctx} />
                </div>
            </nav>

            <div className="container">
                {/* Flash */}
                {ctx.flash &&
                    ctx.flash.message && (
                        <div
                            className={`alert alert-${ctx.flash.message[0]}`}
                            role="alert"
                        >
                            {ctx.flash.message[1]}
                        </div>
                    )}

                {children}

                <div className="footer text-muted text-center">
                    <hr />
                    <p>
                        Thank you for playing !
                    </p>
                </div>
            </div>

            {/* Custom javascript defined for our app */}
            <script src="/js/app.js" />
        </body>
    </html>
)

Master.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    ctx: PropTypes.object.isRequired,
}

const Userbox = ({ ctx }) => {
    if (ctx.currUser) {
        return [
            <form
                className="navbar-right"
                method="POST"
                action={`/sessions/${ctx.currSessionId}`}
            >
                <input type="hidden" name="_method" value="DELETE" />
                <button className="btn btn-link navbar-btn" type="submit">
                    Logout
                </button>
            </form>,
            <div className="btn-group navbar-right">
                <a
                    className="btn btn-default navbar-btn"
                    href={ctx.currUser.url}
                >
                    <span className="glyphicon glyphicon-user" />{' '}
                    {ctx.currUser.uname}{' '}
                    {ctx.currUser.role === 'ADMIN' && (
                        <span className="label label-primary">Admin</span>
                    )}
                    {ctx.currUser.role === 'MOD' && (
                        <span className="label label-primary">Mod</span>
                    )}
                </a>
                {ctx.currUser.role === 'ADMIN' && (
                    <a href="/admin" className="btn btn-default navbar-btn">
                        Admin Panel
                    </a>
                )}
            </div>,
        ]
    } else {
        return [
            <a
                className="btn btn-default navbar-btn navbar-right"
                href="/login"
            >
                Login
            </a>,
            <span className="navbar-text navbar-right" />,
            <a
                className="btn btn-primary navbar-btn navbar-right"
                href="/register"
            >
                Register
            </a>,
        ]
    }
}

module.exports = Master
