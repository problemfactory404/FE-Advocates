import { useLocalSearchParams } from 'expo-router';
import { UpdateMember } from '../../../../src/pages/members/screen/updateMember';

export default function AddMemberComponent() {
  const { memberId } = useLocalSearchParams();
  return <UpdateMember id={memberId} />;
}
