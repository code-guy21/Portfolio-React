import React from 'react';
import { Grid } from '@material-ui/core';
import SimpleMediaCard from '../SimpleMediaCard/SimpleMediaCard';

const data = [
	{
		title: 'MyNet',
		description: 'An app created with React.js, Redux, Firebase, and Firestore',
		photoURL: '/assets/MyNet.jpeg',
		address: 'https://revents-2d8d9.firebaseapp.com/'
	},
	{
		title: '5 Day Forecast',
		description: 'An app created with React.js, Redux, Firebase, and Firestore',
		photoURL: '/assets/5Day.jpeg',
		address: 'https://code-guy21.github.io/WeatherApp/'
	},
	{
		title: 'YouTube Search',
		description: 'An app created with React.js, Redux, Firebase, and Firestore',
		photoURL: '/assets/YouTube.jpeg',
		address: 'https://code-guy21.github.io/YouTubeClone/'
	},
	{
		title: 'ACSequencer',
		description: 'An app created with React.js, Redux, Firebase, and Firestore',
		photoURL: '/assets/SeqWeb.jpeg',
		address: 'http://www.acsequencer.com/'
	},
	{
		title: 'Face Recognition',
		description:
			'An app created with React.js, Redux, Firebase, and Firestore ',
		photoURL: '/assets/FaceRec.jpeg',
		address: 'https://facerecognapp.herokuapp.com/'
	}
];

const Projects = () => {
	return (
		<Grid container justify="center" spacing={16}>
			{data.map((project, i) => {
				return (
					<Grid key={i} item xl={3} lg={4} md={4} sm={10} xs={12}>
						<SimpleMediaCard
							address={project.address}
							photoURL={project.photoURL}
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
