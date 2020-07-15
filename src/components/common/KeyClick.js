import React from 'react';
import PropTypes from 'prop-types';
import a11yClickEvent from '../../util/a11yClickEvent';

class KeyClick extends React.Component {
	@a11yClickEvent
	eventHandler(e) {
		this.props.handler(e);
	}
	render() {
		const child = React.Children.only(this.props.children);
		return React.cloneElement(child, {
			onClick: this.eventHandler.bind(this),
			onKeyDown: this.eventHandler.bind(this),
			className: `${child.props.className || ''} ${this.props.className || ''}`,
			...(this.props['data-testid'] && { ['data-testid']: this.props['data-testid'] })
		});
	}
}

KeyClick.propTypes = {
	children: PropTypes.node,
	handler: PropTypes.func,
	className: PropTypes.string,
	['data-testid']: PropTypes.string
};

export default KeyClick;
