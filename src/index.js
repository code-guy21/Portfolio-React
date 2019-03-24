import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#5352ed' },
		secondary: { main: '#11cb5f' }
	}
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);
