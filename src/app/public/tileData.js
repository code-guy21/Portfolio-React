import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/PermIdentity';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import { Link } from 'react-router-dom';

export const mailFolderListItems = (
	<div>
		<ListItem component={Link} to="/" button>
			<ListItemIcon>
				<InboxIcon />
			</ListItemIcon>
			<ListItemText primary="Bio" />
		</ListItem>
		<ListItem component={Link} to="/projects" button>
			<ListItemIcon>
				<StarIcon />
			</ListItemIcon>
			<ListItemText primary="Projects" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<SendIcon />
			</ListItemIcon>
			<ListItemText primary="Resume" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<DraftsIcon />
			</ListItemIcon>
			<ListItemText primary="Cover Letter" />
		</ListItem>
	</div>
);

export const otherMailFolderListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<MailIcon />
			</ListItemIcon>
			<ListItemText primary="Extras" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<DeleteIcon />
			</ListItemIcon>
			<ListItemText primary="Social Media" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ReportIcon />
			</ListItemIcon>
			<ListItemText primary="Spam" />
		</ListItem>
	</div>
);
