import React from 'react';
import { Paper, Typography, Grid, Divider } from '@material-ui/core';

const Bio = () => {
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
				<Paper>
					<Typography
						variant="display1"
						style={{
							textAlign: 'center',
							color: 'black',
							paddingTop: '15px'
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
						Hello, my name is Alexis San Javier and i'm currently an aspiring
						web developer. My main focus is on the front-end using React and
						Redux to build user friendly websites with clean and minimal design.
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Bio;
