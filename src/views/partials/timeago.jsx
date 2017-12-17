const React = require('react')
const PropTypes = require('prop-types')
const belt = require('../../belt')

const Timeago = ({ date }) => (
    <p>{date.toLocaleDateString()}</p>
)

Timeago.propTypes = {
    date: PropTypes.instanceOf(Date),
}

module.exports = Timeago
