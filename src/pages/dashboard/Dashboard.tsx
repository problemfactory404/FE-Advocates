import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SuccessMessageModal from '../../components/common/modals';

const Dashboard: React.FC = () => (
  <View>
    <View>
      <Text>Welcome to Dashboard</Text>
    </View>
    <SuccessMessageModal
      messageTime={3000}
      messageText={'Successfully Signed In'}
    />
  </View>
);
export default Dashboard;

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  messageText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#333',
    marginTop: -height * 0.15,
  },
});
