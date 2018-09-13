import React from 'react';
import { Drawer, Divider, List, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const MyDrawer = ({
	anchor,
	open,
	drawerPaper,
	drawerHeader,
	drawerClose,
	direction,
	mailList,
	mailOther
}) => {
	console.log(drawerPaper);
	return (
		<Drawer
			variant="persistent"
			anchor={anchor}
			open={open}
			classes={{ paper: drawerPaper }}
		>
			<div className={drawerHeader}>
				<IconButton onClick={drawerClose}>
					{direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</div>
			<Divider />
			<List>{mailList}</List>
		</Drawer>
	);
};

export default MyDrawer;
