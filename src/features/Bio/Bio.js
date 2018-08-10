import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';

const Bio = () => {
	return (
		<Grid container justify="center" spacing={16}>
			<Grid
				style={{ border: '1px solid black' }}
				item
				lg={2}
				md={2}
				sm={3}
				xs={5}
			>
				<Paper
					elevation={0}
					style={{
						backgroundColor: '#fafafa'
					}}
				>
					<img
						style={{ height: '100%', width: '100%' }}
						src="/assets/profile.png"
						alt="profile"
					/>
				</Paper>
			</Grid>

			<Grid style={{ border: '1px solid black' }} item lg={12} xs={12}>
				<Paper
					elevation={1}
					style={{
						textAlign: 'center',
						width: '70%',
						margin: '0 auto',
						minWidth: '85px'
					}}
				>
					<Typography variant="headline" component="h3">
						Title
					</Typography>
					<Typography component="p">Bio</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Bio;
