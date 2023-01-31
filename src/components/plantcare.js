import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface PlantData {
  id: number,
  name: string,
  scientificName: string,
  sunlightRequirements: string,
  wateringSchedule: string,
  soilType: string,
  temperatureRange: string,
  humidityLevels: string,
  fertilizationRequirements: string,
  pruningTips: string,
  pestsAndDiseases: string,
  additionalTips: string,
}

const plants: PlantData[] = [
  {
    id: 1,
    name: 'African Violet',
    scientificName: 'Saintpaulia',
    sunlightRequirements: 'Bright, indirect light',
    wateringSchedule: 'Keep the soil moist but not waterlogged',
    soilType: 'Well-draining soil mix',
    temperatureRange: '65-75°F (18-24°C)',
    humidityLevels: 'Moderate',
    fertilizationRequirements: 'Fertilize every 2 weeks',
    pruningTips: 'Prune leggy stems and faded flowers',
    pestsAndDiseases: 'Common pests include spider mites and mealybugs',
    additionalTips: 'Rotate the plant every few weeks for even growth',
  },
  // Add more plants here...
];

const PlantCareTipsScreen = (props: { plantId: number }) => {
  const { plantId } = props;
  const [plantData, setPlantData] = useState<PlantData | null>(null);

  React.useEffect(() => {
    setPlantData(plants.find(plant => plant.id === plantId));
  }, [plantId]);

  if (!plantData) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{plantData.name} Care Tips</Text>
      <Text style={styles.subheader}>Scientific Name: {plantData.scientificName}</Text>
      <ScrollView style={styles.careTipsContainer}>
        <Text style={styles.careTipHeader}>Sunlight Requirements:</Text>
        <Text style={styles.careTip}>{plantData.sunlightRequirements}</Text>

        <Text style={styles.careTipHeader}>Watering Schedule:</Text>
        <Text style={styles.careTip}>{plantData.wateringSchedule}</Text>

        <Text style={styles.careTipHeader}>Soil Type:</Text>
        <Text style={styles.careTip}>{plantData.soilType}</Text>

        <Text style={styles.careTipHeader}>Temperature Range:</Text>
        <Text style={styles.careTip}>{plantData.temperatureRange}</Text>

        <Text style={styles.careTipHeader}>Humidity Levels:</Text>
        <Text style={styles.careTip}>{plantData.humidityLevels}</Text>

        <Text style={styles.careTipHeader}>F


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  scientificName: {
    fontSize: 16,
    marginBottom: 10,
  },
  careTipsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  careTip: {
    marginBottom: 10,
    fontSize: 16,
  },
});

export default PlantCareTipsScreen;
