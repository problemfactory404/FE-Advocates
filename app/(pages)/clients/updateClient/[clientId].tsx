import { useLocalSearchParams } from 'expo-router';

import { UpdateClient } from '../../../../src/pages/clients/screens/updateClient';

export default function UpdateClientComponent() {
  const { clientId } = useLocalSearchParams();
  return <UpdateClient id ={clientId}/>;
}
