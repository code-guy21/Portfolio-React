import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import ControlledExpansionPanels from '../ControlledExpansionPanels/ControlledExpansionPanels';

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
					style={{
						textAlign: 'center',
						width: '70%',
						margin: '0 auto',
						minWidth: '85px'
					}}
				>
					<Typography variant="headline" component="h3">
						About Me
					</Typography>
					<Typography component="p">I am an aspiring web developer</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Bio;
