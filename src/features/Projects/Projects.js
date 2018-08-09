import React from 'react';
import { Grid } from '@material-ui/core';
import SimpleMediaCard from '../SimpleMediaCard/SimpleMediaCard';

const data = [
	{
		title: 'MyNet',
		description:
			'An events app created with React.js, Redux, Firebase, and Firestore'
	},
	{
		title: '5 Day Forecast',
		description:
			'An weather app created with React.js and Redux, that gives users a 5 day forecast of the city of their choosing'
	},
	{
		title: 'YouTube Search',
		description:
			'A simple app that implements the YouTube search API to allow for the lookup of videos'
	},
	{
		title: 'ACSequencer',
		description:
			'Senior Design project that involved the creation of an electronic music sequencer with BlueTooth enabled data transfer'
	},
	{
		title: 'Face Recognition',
		description:
			'A react app that implements the Clarifai face detection API to '
	}
];

const Projects = () => {
	return (
		<Grid container justify="center" spacing={16}>
			{data.map(project => {
				return (
					<Grid item>
						<SimpleMediaCard
							title={project.title}
							description={project.description}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Projects;
