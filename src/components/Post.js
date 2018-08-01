import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Post = props => (
	<View style={styles.container}>
		<View style={styles.header}>
			<Text style={styles.title}>{props.title}</Text>
			<Text style={styles.author}>{props.author}</Text>
		</View>
		<Text style={styles.content}>{props.content}</Text>
	</View>
);

Post.defaultProps = {
	title: "Aprendendo React Native",
	author: "Wallace Rettich",
	content: "Novo conteudo"
};

Post.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		margin: 20,
		borderRadius: 5,			
		padding: 20
	},

	header: {
		paddingBottom: 7,
		marginBottom: 7,
		borderBottomColor: '#EEEEEE',
		borderStyle: 'solid',
		borderBottomWidth: 1,
	},


	title: {
		fontSize: 20,
		marginBottom: 3,
		fontWeight: 'bold',
		color: '#333333'
	},
	 
	author: {
		fontSize: 14,
		color: '#999999',
	},
	 
	content: {
		fontSize: 16,
		color: '#666666'
	}
});

export default Post;