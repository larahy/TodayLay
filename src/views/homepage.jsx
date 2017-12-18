const React = require('react')
const config = require('../config')
const PropTypes = require('prop-types')
const MessagePanel = require('./partials/message-panel')

const Homepage = ({ ctx, messages }) => [

    <Jumbotron ctx={ctx} />,
    <Userbox ctx={ctx} />,
    <EggSpreadsheet />,


    <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
            <NewMessagePanel ctx={ctx} />
            <h2>Recent Guesses</h2>
            {messages.length === 0 ? (
                <span>No guesses. Give it a go ...</span>
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

    <div className="jumbotron text-center">
        <h1>
            <a href="/" style={{ color: '#333' }}>
                TODAY LAY
            </a>
        </h1>
        <audio autoplay="true" controls src="./audio/lay.mp3" type="audio/mpeg">
</audio>
</div>
)

const EggSpreadsheet = () => (
<div id="customers">
<table>
  <tr>
    <th>Calendar date</th>
    <th>9am Temp 'C'</th>
    <th>No of Eggs</th>
    <th>Total Weight</th>
    <th>Blue Egg</th>
    <th>White Egg</th>
    <th>Light Brown Egg</th>
    <th>Small Brown Egg</th>
    <th>Large Brown Egg</th>
  </tr>

 <tr><td>Saturday, November 18</td><td>7.6</td><td>5</td><td>294g</td><td>50g</td><td>67g</td><td>57g</td><td>54g</td><td>66g</td></tr>
 <tr><td>Sunday, November 19</td><td>11.9</td><td>5</td><td>297g</td><td>56g</td><td>63g</td><td>55g</td><td>54g</td><td>69g</td></tr>
 <tr><td>Monday, November 20</td><td>10</td><td>3</td><td>225g</td><td>51g</td><td>&nbsp;</td><td>53g</td><td>53g</td><td>68g</td></tr>
 <tr><td>Tuesday, November 21</td><td>12.5</td><td>4</td><td>237g</td><td>53g</td><td>79g</td><td>53g</td><td>52g</td><td>&nbsp;</td></tr>
 <tr><td>Wednesday, November 22</td><td>12.4</td><td>3</td><td>187g</td><td>49g</td><td>68g</td><td>&nbsp;</td><td>&nbsp;</td><td>70g</td></tr>
 <tr><td>Thursday, November 23</td><td>11.0</td><td>4</td><td>249g</td><td>51g</td><td>65g</td><td>&nbsp;</td><td>58g</td><td>75g</td></tr>
 <tr><td>Friday, November 24</td><td>6.2</td><td>4</td><td>239g</td><td>55g</td><td>&nbsp;</td><td>57g</td><td>56g</td><td>71g</td></tr>
 <tr><td>Saturday, November 25</td><td>5.2</td><td>4</td><td>248g</td><td>52g</td><td>72g</td><td>&nbsp;</td><td>52g</td><td>72g</td></tr>
 <tr><td>Sunday, November 26</td><td>&nbsp;</td><td>4</td><td>229g</td><td>52g</td><td>66g</td><td>58g</td><td>53g</td><td>&nbsp;</td></tr>
 <tr><td>Monday, November 27</td><td>6.0</td><td>1</td><td>57g</td><td>&nbsp;</td><td>&nbsp;</td><td>57g</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Tuesday, November 28</td><td>6.0</td><td>5</td><td>320g</td><td>56g</td><td>72g</td><td>58g</td><td>60g</td><td>74g</td></tr>
 <tr><td>Wednesday, November 29</td><td>2.6</td><td>4</td><td>244g</td><td>54g</td><td>65g</td><td>&nbsp;</td><td>55g</td><td>70g</td></tr>
 <tr><td>Thursday, November 30</td><td>2.6</td><td>2</td><td>111g</td><td>53g</td><td>&nbsp;</td><td>58g</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Friday, December 01</td><td>2.5</td><td>&nbsp;</td><td>0g</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Saturday, December 02</td><td>3.5</td><td>5</td><td>305g</td><td>50g</td><td>63g</td><td>58g</td><td>59g</td><td>75g</td></tr>
 <tr><td>Sunday, December 03</td><td>7.3</td><td>4</td><td>238g</td><td>55g</td><td>&nbsp;</td><td>59g</td><td>54g</td><td>70g</td></tr>
 <tr><td>Monday, December 04</td><td>10.2</td><td>5</td><td>298g</td><td>50g</td><td>71g</td><td>55g</td><td>53g</td><td>69g</td></tr>
 <tr><td>Tuesday, December 05</td><td>8.3</td><td>3</td><td>168g</td><td>50g</td><td>63g</td><td>55g</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Wednesday, December 06</td><td>7.6</td><td>2</td><td>116g</td><td>&nbsp;</td><td>59g</td><td>57g</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Thursday, December 07</td><td>10.0</td><td>3</td><td>218g</td><td>54g</td><td>&nbsp;</td><td>56g</td><td>42g</td><td>66g</td></tr>
 <tr><td>Friday, December 08</td><td>3.1</td><td>5</td><td>316g</td><td>52g</td><td>70g</td><td>69g</td><td>58g</td><td>67g</td></tr>
 <tr><td>Saturday, December 09</td><td>2.9</td><td>5</td><td>295g</td><td>49g</td><td>64g</td><td>56g</td><td>56g</td><td>70g</td></tr>
 <tr><td>Sunday, December 10</td><td>2.2</td><td>1</td><td>51g</td><td>51g</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
 <tr><td>Monday, December 11</td><td>2.8</td><td>3</td><td>189g</td><td>&nbsp;</td><td>72g</td><td>59g</td><td>58g</td><td>&nbsp;</td></tr>
 <tr><td>Tuesday, December 12</td><td>3.6</td><td>5</td><td>302g</td><td>55g</td><td>64g</td><td>56g</td><td>53g</td><td>74g</td></tr>
 <tr><td>Wednesday, December 13</td><td>3.5</td><td>5</td><td>303g</td><td>51g</td><td>71g</td><td>59g</td><td>51g</td><td>71g</td></tr>
 <tr><td>Thursday, December 14</td><td>3.6</td><td>4</td><td>254g</td><td>51g</td><td>68g</td><td>&nbsp;</td><td>60g</td><td>75g</td></tr>
 <tr><td>Friday, December 15</td><td>4.0</td><td>3</td><td>172g</td><td>51g</td><td>&nbsp;</td><td>63g</td><td>58g</td><td>&nbsp;</td></tr>
 <tr><td>Saturday, December 16</td><td>6.9</td><td>3</td><td>196g</td><td>&nbsp;</td><td>67g</td><td>&nbsp;</td><td>55g</td><td>74g</td></tr>
 <tr><td>Sunday, December 17</td><td>7.5</td><td>4</td><td>256g</td><td>58g</td><td>72g</td><td>&nbsp;</td><td>55g</td><td>71g</td></tr>

</table>
</div>
    )

const NewMessagePanel = ({ ctx }) => (
    <form method="POST" action="/messages">
        <div id="guess" className="panel panel-default">
            <div className="panel-body">
                <p className="lead text-center">How many eggs do you think were laid today?</p>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="eggs-input"
                        name="eggs"
                        placeholder=""
                        required
                        maxLength="255"
                    >
                        {ctx.flash.params && ctx.flash.params.eggs}
                    </textarea>
                </div>
                <p className="lead text-center">And what was the total weight of all the eggs?</p>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="weight-input"
                        name="weight"
                        placeholder=""
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
            <div class='introtext jumbotron text-center'>
                <h2>Welcome back {' '} {ctx.currUser.uname}{' '}</h2>
                <p>Your Current Credit is {' £'}{ctx.currUser.email} {' '}</p>
        <p>Today's temperature is 6.8 'C'</p>
        <p><a id="button" href="#guess">PLAY TODAY LAY TODAY!</a> </p>
    
            </div>,
        ]
    } else {
        return [
        <div class='jumbotron introtext text-center'>
        <p>
            To win gambling credit please study the instructions and table below, then <a href="/register"> REGISTER</a> to get winning! Or if you already have an account please <a href="/login"> LOGIN</a>
        </p>
        <h2>Egg number prediction</h2>
<p>There will be £5 for predicting the correct number of eggs laid.
We have so far recorded the eggs laid over 30 days.  108 eggs have been laid, therefore an average of 3.6 eggs per day.</p>

<h2>Total egg weight prediction</h2>
<p>£5 for predicting, within 10%, the total egg weight for the day.
Over 30 days 6614 grams of eggs have been laid. Average weight per day therefore,  220 grams.</p>
        </div>,
        ]
    }
}

Homepage.propTypes = {
    messages: PropTypes.array.isRequired,
    ctx: PropTypes.object.isRequired,
}

module.exports = Homepage
