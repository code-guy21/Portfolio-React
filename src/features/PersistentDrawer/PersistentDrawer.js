import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Projects from '../Projects/Projects';
import MyDrawer from '../MyDrawer/MyDrawer';
import Bio from '../Bio/Bio';

import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Grid
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { styling } from '../../app/common/styles';

import {
	mailFolderListItems,
	otherMailFolderListItems
} from '../../app/public/tileData';

const styles = theme => styling(theme);

class PersistentDrawer extends Component {
	state = {
		open: false,
		anchor: 'left'
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	handleChangeAnchor = event => {
		this.setState({
			anchor: event.target.value
		});
	};

	render() {
		const { classes, theme } = this.props;
		const { anchor, open } = this.state;
		let before = null;
		let after = null;

		const drawer = (
			<MyDrawer
				anchor={anchor}
				open={open}
				drawerPaper={classes.drawerPaper}
				drawerHeader={classes.drawerHeader}
				drawerClose={this.handleDrawerClose}
				direction={theme.direction}
				mailList={mailFolderListItems}
				mailOther={otherMailFolderListItems}
			/>
		);

		anchor === 'left' ? (before = drawer) : (after = drawer);

		return (
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppBar
						color="primary"
						className={classNames(classes.appBar, {
							[classes.appBarShift]: open,
							[classes[`appBarShift-${anchor}`]]: open
						})}
					>
						<Toolbar disableGutters={!open}>
							<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={this.handleDrawerOpen}
								className={classNames(classes.menuButton, open && classes.hide)}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="title" color="inherit" noWrap>
								Alexis San Javier
							</Typography>
						</Toolbar>
					</AppBar>
					{before}
					<main
						className={classNames(
							classes.content,
							classes[`content-${anchor}`],
							{
								[classes.contentShift]: open,
								[classes[`contentShift-${anchor}`]]: open
							}
						)}
					>
						<div className={classes.drawerHeader} />
						<Switch>
							<Route path="/projects" component={Projects} />
							<Route path="/" component={Bio} />
						</Switch>
					</main>
					{after}
				</div>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
