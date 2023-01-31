import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlantInfoScreen = ({ plantData }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: plantData.imageUrl }}
                style={styles.plantImage}
            />
            <Text style={styles.plantName}>{plantData.name}</Text>
            <Text style={styles.plantInfo}>{plantData.info}</Text>
            <Text style={styles.plantCare}>{plantData.care}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    plantImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    plantName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    plantInfo: {
        fontSize: 18,
        marginBottom: 10,
    },
    plantCare: {
        fontSize: 18,
    },
});

export default PlantInfoScreen;
