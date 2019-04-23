/**
  * @author Anil
  * @created 2019-04-23
  * @version 1.0
  */
import React from 'react';
 
import { StyleSheet, FlatList, Text, View, Alert } from 'react-native';
 
export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  users: [
         { "id":1,
         "name":"test1",
         "age" : "11",
         "gender":"male",
         "email" : "test1@gmail.com",
         "phoneNo" : "9738452245"
         },
         {
         "id" : 2,
         "name":"test2",
         "age" : "12",
         "gender":"male",
         "email" : "test2@gmail.com",
         "phoneNo" : "9738452245"
         
         },
         {
         "id":3,
         "name":"test3",
         "age" : "13",
         "gender":"male",
         "email" : "test3@gmail.com",
         "phoneNo" : "9738452245"
         },
         {
         "id":4,
         "name":"test4",
         "age" : "14",
         "gender":"male",
         "email" : "test4@gmail.com",
         "phoneNo" : "9738452245"
         },
         {
         "id":5,
         "name":"test5",
         "age" : "15",
         "gender":"male",
         "email" : "test5@gmail.com",
         "phoneNo" : "9738452245"
         },
         {
         "id":6,
         "name":"test6",
         "age" : "16",
         "gender":"male",
         "email" : "test6@gmail.com",
         "phoneNo" : "9738452245"
         }],
    };
  }
  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: 'black'}}/>
    );
  };
  
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.users}
          //data defined in constructor
          ItemSeparatorComponent={this.FlatListItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View style={{backgroundColor:'cyan'}}>
              
              <Text
                style={styles.item}
              >
               Name: {item.name}
              </Text>
              <Text
                style={styles.item}
                >
               Age: {item.age}
              </Text>
              <Text
                style={styles.item}
                >
               Gender: {item.gender}
              </Text>
              <Text
                style={styles.item}
                >
               Email: {item.email}
              </Text>
              <Text
                style={styles.item}
                >
               MobileNo: {item.phoneNo}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
 
  item: {
    padding: 5,
    fontSize: 18,
    height: 50,
  },
});