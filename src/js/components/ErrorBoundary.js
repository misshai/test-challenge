import React, {Component} from 'react';

export const withErrorBoundary = WrappedComponent => (class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			errorInfo: null
		};
	}

	componentDidCatch = (error, errorInfo) => catchFunc(error, errorInfo, this)

	render() {
		if (this.state.errorInfo) {
			return handleError(this)
		}
		// Normally, just render children
		return <WrappedComponent {...this.props}/>;
	}
});

const catchFunc = (error, errorInfo, ctx) => {
	// catch errors in any components below and re-render with error message
	ctx.setState({error: error, errorInfo: errorInfo})
	// log error messages, etc.
}

const handleError = (ctx) => (
// Error path
<div styleName={ctx.props.style || 'error'}>
	<h2>Something went wrong.</h2>
	<details styleName={{
			whiteSpace: 'pre-wrap'
		}}>
		{ctx.state.error && ctx.state.error.toString()}
		<br/> {ctx.state.errorInfo.componentStack}
	</details>
</div>);
