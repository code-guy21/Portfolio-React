import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const Bio = () => {
	return (
		<Grid container justify="center" spacing={16}>
			<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
				<Grid
					style={{ margin: '0 auto' }}
					item
					xl={2}
					lg={3}
					md={3}
					sm={4}
					xs={5}
				>
					<Paper elevation={0} style={{ backgroundColor: '#fafafa' }}>
						<img
							style={{ width: '100%', height: '100%' }}
							src="/assets/blackandwhite.png"
							alt="profile"
						/>
					</Paper>
				</Grid>
			</Grid>
			<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
					My name is Alexis San Javier and I'm currently a Web Developer looking
					to improve and gain experience. My main focus is on the front-end,
					building responsive UI's with React and Redux.
				</Typography>
			</Grid>
			<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
				<SocialMediaIcons />
			</Grid>
		</Grid>
	);
};

export default Bio;
