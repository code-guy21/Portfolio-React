import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';

const Bio = () => {
	return (
		<Grid container justify="center" spacing={16}>
			<Grid item lg={2} md={2} sm={3} xs={5}>
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

			<Grid item lg={12} xs={12}>
				<Paper
					elevation={1}
					style={{ textAlign: 'center', width: '70%', margin: '0 auto' }}
				>
					<Typography variant="headline" component="h3">
						This is a sheet of paper.
					</Typography>
					<Typography component="p">
						Paper can be used to build surface or other elements for your
						application.
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Bio;
