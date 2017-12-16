const React = require('react')
const config = require('../config')
const PropTypes = require('prop-types')
const MessagePanel = require('./partials/message-panel')

const Homepage = ({ ctx, messages }) => [
<xmaseggs ctx={ctx} />,
    <Jumbotron ctx={ctx} />,
    <Userbox ctx={ctx} />,



    <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
            <NewMessagePanel ctx={ctx} />
            <h2>Recent Guesses</h2>
            {messages.length === 0 ? (
                <span>No messages. Wanna be the first?</span>
            ) : (
                [
                    messages.map(message => (
                        <MessagePanel ctx={ctx} message={message} />
                    )),
                    <p className="text-center">
                        <div className="col-lg-6 col-lg-offset-3">
                            <a
                                className="btn btn-default btn-block"
                                href="/messages"
                            >
                                View All →
                            </a>
                        </div>
                    </p>,
                ]
            )}
        </div>
    </div>,

    <script src="https://www.google.com/recaptcha/api.js" />,

    <script src="/js/on-recaptcha-success.js" />,
]

const Jumbotron = () => (
    <div
        className="jumbotron text-center"
        style={{ backgroundColor: 'inherit' }}
    >
        <h1>
            <a href="/" style={{ color: '#333' }}>
                Today Lay
            </a>
        </h1>
        <img
            src="/img/chicken.jpg"
            height="350"
            width="350"
            alt="skeleton icon"
        />
        <table id="customers">
  <tr>
    <th>Calendar date</th>
    <th>9 am Temp</th>
    <th>No of Eggs</th>
    <th>Total Weight</th>
    <th>Blue Egg</th>
    <th>White Egg</th>
    <th>Light Brown Egg</th>
    <th>Small Brown Egg</th>
    <th>Large Brown Egg</th>
  </tr>
 <tr><td>Saturday, November 18, 2017</td><td>7.6 'C'</td><td>5</td><td>294 gms</td><td>50 gms</td><td>67 gms</td><td>57 gms</td><td>54 gms</td><td>66 gms</td></tr>
 <tr><td>Sunday, November 19, 2017</td><td>11.9 'C'</td><td>5</td><td>297 gms</td><td>56 gms</td><td>63 gms</td><td>55 gms</td><td>54 gms</td><td>69 gms</td></tr>
 <tr><td>Monday, November 20, 2017</td><td>&nbsp;</td><td>3</td><td>174 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>53 gms</td><td>53 gms</td><td>68 gms</td></tr>
 <tr><td>Tuesday, November 21, 2017</td><td>12.5 'C'</td><td>4</td><td>237 gms</td><td>53 gms</td><td>79 gms</td><td>53 gms</td><td>52 gms</td><td>&nbsp;</td></tr>
 <tr><td>Wednesday, November 22, 2017</td><td>12.4 'C'</td><td>3</td><td>187 gms</td><td>49 gms</td><td>68 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>70 gms</td></tr>
 <tr><td>Thursday, November 23, 2017</td><td>11.0 'C'</td><td>3</td><td>198 gms</td><td>&nbsp;</td><td>65 gms</td><td>&nbsp;</td><td>58 gms</td><td>75 gms</td></tr>
 <tr><td>Friday, November 24, 2017</td><td>6.2 'C'</td><td>4</td><td>239 gms</td><td>55 gms</td><td>&nbsp;</td><td>57 gms</td><td>56 gms</td><td>71 gms</td></tr>
 <tr><td>Saturday, November 25, 2017</td><td>5.2 'C'</td><td>4</td><td>248 gms</td><td>52 gms</td><td>72 gms</td><td>&nbsp;</td><td>52 gms</td><td>72 gms</td></tr>
 <tr><td>Sunday, November 26, 2017</td><td>&nbsp;</td><td>3</td><td>177 gms</td><td>&nbsp;</td><td>66 gms</td><td>58 gms</td><td>53 gms</td><td>&nbsp;</td></tr>
 <tr><td>Monday, November 27, 2017</td><td>6.0 'C'</td><td>1</td><td>57 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>57 gms</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Tuesday, November 28, 2017</td><td>6.0 'C'</td><td>5</td><td>320 gms</td><td>56 gms</td><td>72 gms</td><td>58 gms</td><td>60 gms</td><td>74 gms</td></tr>
 <tr><td>Wednesday, November 29, 2017</td><td>2.6 'C'</td><td>4</td><td>244 gms</td><td>54 gms</td><td>65 gms</td><td>&nbsp;</td><td>55 gms</td><td>70 gms</td></tr>
 <tr><td>Thursday, November 30, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Friday, December 01, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Saturday, December 02, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Sunday, December 03, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Monday, December 04, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Tuesday, December 05, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Wednesday, December 06, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Thursday, December 07, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Friday, December 08, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Saturday, December 09, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Sunday, December 10, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Monday, December 11, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Tuesday, December 12, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Wednesday, December 13, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Thursday, December 14, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Friday, December 15, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Saturday, December 16, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Sunday, December 17, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Monday, December 18, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Tuesday, December 19, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Wednesday, December 20, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Thursday, December 21, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Friday, December 22, 2017</td><td>&nbsp;</td><td>&nbsp;</td><td>0 gms</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td></td></tr>


</table>
    </div>
)

const NewMessagePanel = ({ ctx }) => (
    <form method="POST" action="/messages">
        <div className="panel panel-default">
            <div className="panel-body">
                <p className="lead text-center">How many eggs do you think were laid today?</p>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="eggs-input"
                        name="eggs"
                        placeholder="500??"
                        required
                        maxLength="255"
                    >
                        {ctx.flash.params && ctx.flash.params.eggs}
                    </textarea>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="weight-input"
                        name="weight"
                        placeholder="60g"
                        required
                        maxLength="255"
                    >
                    </textarea>
                </div>
            </div>
            <div className="panel-footer text-right">
                <button
                    type="submit"
                    class="g-recaptcha btn btn-default"
                    data-badge="inline"
                    data-sitekey={config.RECAPTCHA_SITEKEY}
                    data-callback="onRecaptchaSuccess"
                >
                    Submit{' '}
                    {ctx.currUser ? `as ${ctx.currUser.uname}` : 'anonymously'}
                </button>
            </div>
        </div>
    </form>
)

const Userbox = ({ ctx }) => {
    if (ctx.currUser) {
        return [
            <div >
                <p style={{ marginTop: '20px' }}>Welcome back {' '} {ctx.currUser.uname}{' '}</p>
            </div>,
        ]
    } else {
        return [
        <div>
        <p style={{ marginTop: '20px' }}>
            Greetings Manxman, to win gambling credit please <a href="/register"> REGISTER</a> or <a href="/login"> LOGIN</a>,
        </p>
        </div>,
        ]
    }
}

Homepage.propTypes = {
    messages: PropTypes.array.isRequired,
    ctx: PropTypes.object.isRequired,
}

module.exports = Homepage
