import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const User_dashboard = () => {
    const state = useSelector((state) => state.user.value);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.label}>Username:</Text>
                    <Text style={styles.info}>{state.username}</Text>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.label}>Password:</Text>
                    <Text style={styles.info}>{state.password}</Text>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.label}>Roles:</Text>
                    <Text style={styles.info}>{state.roles}</Text>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.label}>fingerprint:</Text>
                    <Text style={styles.info}>{state.fingerscann}</Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    info: {
        fontSize: 18,
    },
});

export default User_dashboard;
