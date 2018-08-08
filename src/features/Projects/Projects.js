import React from 'react';
import { Grid } from '@material-ui/core';
import SimpleMediaCard from '../SimpleMediaCard/SimpleMediaCard';

const Projects = () => {
	return (
		<Grid container>
			<Grid item sm>
				<SimpleMediaCard />
			</Grid>
			<Grid item sm>
				<SimpleMediaCard />
			</Grid>
			<Grid item sm>
				<SimpleMediaCard />
			</Grid>
		</Grid>
	);
};

export default Projects;
