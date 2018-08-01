import 'config/ReactotronConfig';

import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import Post from 'components/Post';

export default class App extends Component {

	state = {
		posts: [
			{ 
				id: 1, 
				author: 'Vamos estudar', 
				subtile: 'Wallace', 
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
			},
			{
				id: 2,
				author: 'Vamos estudar de novo',
				subtile: 'Wallace',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			},
			{
				id: 3,
				author: 'Ok - Vamos estudar',
				subtile: 'Wallace',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			},
		]
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>GoNative App</Text>
				</View>
				<ScrollView style={styles.posts}>
					{this.state.posts.map(post => <Post key={post.id} author={post.author} title={post.title} content={post.content} />)}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	
	container: {
		flex: 1,
		backgroundColor: '#EE7777',
	},

	header: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		padding: 20,
		marginBottom: 20,	
		...Platform.select({
			ios: {
				paddingTop: 35
			}
		})	
	},
	headerTitle: {
		fontSize: 20
	},

	posts: {

	}
});
