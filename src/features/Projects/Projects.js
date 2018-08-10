import React from 'react';
import { Grid } from '@material-ui/core';
import SimpleMediaCard from '../SimpleMediaCard/SimpleMediaCard';

const data = [
	{
		title: 'MyNet',
		description:
			'An events app created with React.js, Redux, Firebase, and Firestore',
		url: '/assets/MyNet.jpeg'
	},
	{
		title: '5 Day Forecast',
		description:
			'An events app created with React.js, Redux, Firebase, and Firestore',
		url: '/assets/5Day.jpeg'
	},
	{
		title: 'YouTube Search',
		description:
			'An events app created with React.js, Redux, Firebase, and Firestore',
		url: '/assets/YouTube.jpeg'
	},
	{
		title: 'ACSequencer',
		description:
			'An events app created with React.js, Redux, Firebase, and Firestore',
		url: '/assets/SeqWeb.jpeg'
	},
	{
		title: 'Face Recognition',
		description:
			'An events app created with React.js, Redux, Firebase, and Firestore ',
		url: '/assets/FaceRec.jpeg'
	}
];

const Projects = () => {
	return (
		<Grid container justify="center" spacing={16}>
			{data.map(project => {
				return (
					<Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
						<SimpleMediaCard
							url={project.url}
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
