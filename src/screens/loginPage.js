import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { API } from '../config/API';

const loginPage = ({ navigation }) => {
	const [form, setForm] = useState({
		username: '',
		password: '',
	});

	const handleChangeUsername = value => {
		setForm({ username: value, password: form.password });
	};

	const handleChangePassword = value => {
		setForm({ username: form.username, password: value });
	};
	const handleToHome = () => {
		navigation.navigate('Home');
	};

	const handleSubmit = async () => {
		try {
			// Configuration
			const config = {
				headers: {
					'Content-type': 'application/json',
				},
			};

			// Data body
			const body = JSON.stringify(form);
			console.log(form);

			// Insert data for login process
			const res = await API.post('/login', body, config);
			if (res.status === 200) {
				ToastAndroid.showWithGravity(
					'login success',
					ToastAndroid.LONG,
					ToastAndroid.CENTER
				);
				handleToHome();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.body}>
			<View style={styles.container}>
				<Text style={styles.title}>Login</Text>
				<TextInput
					onChangeText={value => handleChangeUsername(value)}
					placeholder="Username"
					style={styles.input_title}
				></TextInput>
				<TextInput
					keyboardType="default"
					onChangeText={value => handleChangePassword(value)}
					placeholder="Password"
					style={styles.input_task}
					secureTextEntry={true}
				></TextInput>
				<View style={styles.btn_wrapper}>
					<TouchableOpacity
						style={[styles.button, { backgroundColor: '#EB06FF' }]}
						onPress={handleToHome}
					>
						<Text style={{ color: '#fff' }}>Back</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, { backgroundColor: '#031956' }]}
						onPress={handleSubmit}
					>
						<Text style={{ color: '#fff' }}>Login</Text>
					</TouchableOpacity>
				</View>
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
	container: {
		width: '90%',
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#fff',
		margin: 15,
		marginTop: 55,
	},
	input_title: {
		marginTop: 20,
		backgroundColor: '#fff',
		alignItems: 'stretch',
		height: '10%',
		paddingHorizontal: 15,
		borderRadius: 15,
	},
	input_task: {
		backgroundColor: '#fff',
		marginTop: 10,
		height: '10%',
		paddingHorizontal: 15,
		borderRadius: 15,
	},
	btn_wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	button: {
		height: 40,
		width: 100,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		margin: 20,
	},
});

export default loginPage;
