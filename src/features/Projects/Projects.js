import React from 'react';
import { Grid } from '@material-ui/core';
import SimpleMediaCard from '../SimpleMediaCard/SimpleMediaCard';

const data = [
	{
		title: 'MyNet',
		description:
			'An Social Media application that allows users to create and join events',
		photoURL: '/assets/MyNet.jpeg',
		webAddress: 'https://revents-2d8d9.firebaseapp.com/',
		github: 'https://github.com/code-guy21/revents'
	},
	{
		title: '5 Day Forecast',
		description:
			'Weather app that allows users to see a five day forecast of a particular city',
		photoURL: '/assets/5Day.jpeg',
		webAddress: 'https://code-guy21.github.io/WeatherApp/',
		github: 'https://github.com/code-guy21/WeatherApp'
	},
	{
		title: 'YouTube Search',
		description: 'An app that allows users to search for YouTube videos',
		photoURL: '/assets/YouTube.jpeg',
		webAddress: 'https://code-guy21.github.io/YouTubeClone/',
		github: 'https://github.com/code-guy21/YouTubeClone'
	},
	{
		title: 'ACSequencer',
		description:
			'Senior-Design project that involved building and programming an electronic music sequencer',
		photoURL: '/assets/SeqWeb.jpeg',
		github: 'https://github.com/code-guy21/SeqWeb/tree/master/seqWebMig/my-app',
		learnMore: 'http://www.acsequencer.com/'
	},
	{
		title: 'Face Recognition',
		description:
			'An app that implements the Clarifai API to allow users to upload images and detect faces',
		photoURL: '/assets/FaceRec.jpeg',
		webAddress: 'https://facerecognapp.herokuapp.com/',
		github: 'https://github.com/code-guy21/facedetection'
	}
];

const Projects = () => {
	return (
		<Grid container justify="center" spacing={16}>
			{data.map((project, i) => {
				return (
					<Grid key={i} item xl={3} lg={4} md={4} sm={10} xs={12}>
						<SimpleMediaCard
							webAddress={project.webAddress}
							learnMore={project.learnMore}
							photoURL={project.photoURL}
							title={project.title}
							description={project.description}
							github={project.github}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Projects;
