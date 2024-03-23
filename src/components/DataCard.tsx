import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  Avatar,
  Card,
  Dialog,
  IconButton,
  Portal,
  Text,
} from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Menu } from 'react-native-paper';

const DataCard = ({ item, title, headers, functions }: any) => {
  const [visible, setVisible] = React.useState(false);
  const [Id, setId]: any = React.useState(-1);

  const showDialog = (itemId: number) => {
    setId(itemId);
    setVisible(true);
  };
  const hideDialog = () => setVisible(false);

  const [menuVisible, setMenuVisible] = React.useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const deleteUser = () => {
    functions.goToDelete(Id);
    setVisible(false);
  };

  return (
    <>
      <Card style={{ margin: '2%' }}>
        <Card.Title
          titleVariant='titleLarge'
          style={{}}
          title={item[title]}
          left={(props) => <Avatar.Icon {...props} icon='account' />}
          right={(props) => (
            <IconButton
              {...props}
              icon='dots-vertical'
              onPress={() => openMenu()}
            />
          )}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: '1%',
          }}>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<Button> </Button>}>
            <Menu.Item
              onPress={() => {
                functions.goToUpdate(item.id);
                closeMenu();
              }}
              leadingIcon='pencil'
              title='Edit'
            />
            <Menu.Item
              onPress={() => {
                showDialog(item.id);
                closeMenu();
              }}
              leadingIcon='delete'
              title='Delete'
            />
          </Menu>
        </View>

        <Card.Content>
          <TouchableOpacity
            onPress={() => {
              console.log('Pressed')
            }}>
            {headers.map(
              (header: any) =>
                header.label !== title && (
                  <View key={header.id} style={{ flexDirection: 'row' }}>
                    <Text
                      style={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                      }}>
                      {header.label}
                      {':  '}
                    </Text>
                    <Text>{item[header.label]}</Text>
                  </View>
                )
            )}
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Icon icon='alert' />
          <Dialog.Title style={styles.title}>
            Do you want to delete?
          </Dialog.Title>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>
              <Text style={{ color: 'red' }}>Cancel</Text>
            </Button>
            <Button onPress={() => deleteUser()}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

export default DataCard;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});
