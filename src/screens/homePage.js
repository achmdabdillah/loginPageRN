import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const homePage = ({ navigation }) => {
	const handleToHome = () => {
		navigation.navigate('Login');
	};
	return (
		<View style={styles.body}>
			<View style={styles.container}>
				<Text style={styles.title}>hello from Home </Text>
				<TouchableOpacity style={styles.button} onPress={handleToHome}>
					<Text style={{ color: '#fff' }}>Back</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: '#3450A1',
		alignItems: 'center',
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#fff',
		margin: 15,
		marginTop: 55,
	},
	container: {
		width: '90%',
	},
	button: {
		height: 40,
		width: 100,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		margin: 20,
		backgroundColor: '#EB06FF',
	},
});

export default homePage;
