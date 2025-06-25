import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, NativeModules } from 'react-native';

const { HealthConnectModule } = NativeModules;

type DataState = string | null;

const Test = () => {
  const [data, setData] = useState<DataState>(null);

  const fetchData = async () => {
    try {
      const result = await HealthConnectModule.fetchAllData();
      setData(JSON.stringify(result));
    } catch (e) {
      setData('Greška pri preuzimanju podataka');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Preuzmi Health Connect podatke" onPress={fetchData} />
      {data && <Text style={styles.text}>{data}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  text: { marginTop: 16 },
});

export default Test;
