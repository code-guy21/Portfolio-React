import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
	media: {
		height: 0,
		paddingTop: '56.25%'
	}
};

function SimpleMediaCard(props) {
	const { classes, title, description, url } = props;
	return (
		<Card className="grow" elevation={2} style={{ margin: '10px' }}>
			<CardMedia
				className={classes.media}
				image={
					url ||
					'http://www.animalspot.net/wp-content/uploads/2013/01/Reptile.jpg'
				}
				title="Contemplative Reptile"
			/>
			<CardContent>
				<Typography gutterBottom variant="headline" component="h2">
					{title}
				</Typography>
				<Typography component="p">{description}</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}

export default withStyles(styles)(SimpleMediaCard);
