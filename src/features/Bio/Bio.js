import React from 'react';
import {
	Paper,
	Typography,
	Grid,
	Avatar,
	IconButton,
	Icon
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	avatar: {
		margin: 10,
		backgroundColor: '#fafafa'
	},
	pinkAvatar: {
		margin: 10,
		color: '#fff',
		backgroundColor: '#fafafa'
	},
	greenAvatar: {
		margin: 10,
		color: '#fff',
		backgroundColor: '#fafafa'
	},
	row: {
		display: 'flex',
		justifyContent: 'center'
	}
};

const Bio = ({ classes }) => {
	return (
		<Grid container justify="center" spacing={16}>
			<Grid
				style={{ maxHeight: '500px' }}
				item
				xl={12}
				lg={12}
				md={12}
				sm={12}
				xs={12}
			>
				<img
					src="https://images.unsplash.com/photo-1518081461904-9d8f136351c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a815e999d0f593c8c8bbcb6473b0d39&auto=format&fit=crop&w=1377&q=80"
					style={{ width: '100%', height: '100%' }}
					alt="header"
				/>
			</Grid>
			<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
				<Typography
					variant="display1"
					style={{
						textAlign: 'center',
						color: 'black',
						paddingTop: '15px',
						textDecoration: 'underline'
					}}
				>
					About
				</Typography>
				<Typography
					style={{
						width: '80%',
						margin: '0 auto',
						fontSize: '20px',
						padding: '15px'
					}}
					variant="display1"
					align="center"
				>
					Hello, my name is Alexis San Javier and i'm currently an aspiring web
					developer. My main focus is on the front-end using React and Redux to
					build user friendly websites with clean and minimal design.
				</Typography>
			</Grid>
			<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
				<div className={classes.row}>
					<IconButton>
						<svg
							style={{ width: 24, height: 24, fill: '#3b5998' }}
							viewBox="0 0 24 24"
						>
							<path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
						</svg>
					</IconButton>
					<IconButton>
						<svg
							style={{ width: 24, height: 24, fill: '#1DA1F2' }}
							viewBox="0 0 24 24"
						>
							<path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
						</svg>
					</IconButton>
					<IconButton>
						<svg
							style={{ width: 24, height: 24, fill: '#0077B5' }}
							viewBox="0 0 24 24"
						>
							<path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
						</svg>
					</IconButton>
					<IconButton>
						<svg
							style={{ width: 24, height: 24, fill: '#ff0000' }}
							viewBox="0 0 24 24"
						>
							<path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
						</svg>
					</IconButton>
				</div>
			</Grid>
		</Grid>
	);
};

export default withStyles(styles)(Bio);
