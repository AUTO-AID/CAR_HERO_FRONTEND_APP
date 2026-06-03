import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ service }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardIcon}>{service.icon}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{service.title}</Text>
        <Text style={styles.cardDescription}>{service.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row-reverse',
    padding: 14,
    marginBottom: 12,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardIcon: {
    fontSize: 26,
    backgroundColor: '#B57EDC22',
    borderRadius: 24,
    padding: 10,
    marginLeft: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
  },
  cardDescription: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
});

export default Card;
