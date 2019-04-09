import React from 'react';
import { Grid } from '@material-ui/core';
import SimpleMediaCard from '../SimpleMediaCard/SimpleMediaCard';
import data from './ProjectData';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const Projects = () => {
	return (
		<Grid container justify="center" spacing={16}>
			<Stagger in>
				{data.map((project, i) => {
					return (
						<Fade in>
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
						</Fade>
					);
				})}
			</Stagger>
		</Grid>
	);
};

export default Projects;
