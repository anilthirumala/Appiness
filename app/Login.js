 /**
  * @author Anil
  * @created 2019-04-23
  * @version 1.0
  */

import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
const window = Dimensions.get("window");

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {userName:null,password:null}
  }
  onTapSubmit=()=>{
    if(this.state.userName===null || this.state.userName.length<1)
    {
            alert('UserName cannot be blank');
            return;
    }
    if(this.state.password===null || this.state.password.length<1)
    {
            alert('Password cannot be blank');
            return;
    }
    if(this.state.userName==='prashant@gmail.com' && this.state.password==='prashant123')
    {
      this.props.navigation.navigate('DashBoard');
           
    }else{ 
      alert('UserName/Password is wrong...');
    return;
  }
    
  }
  render() {
    return (
      <View style={{flex:1,alignItems:'center',  justifyContent:'center',maxHeight:window.height,backgroundColor:'cyan'}}>
        <ScrollView >
           <View style={{height:150}}/>
    
         <TextInput style = {styles.input} 
             autoCapitalize="none" 
             onSubmitEditing={() => this.passwordInput.focus()} 
             autoCorrect={false} 
             value={this.state.userName}
             onChangeText={(userName) => {this.setState({userName})}}
             returnKeyType="next" 
             placeholder='User Name' 
            
            />

<TextInput style = {styles.input}   
            returnKeyType="go" 
      
            placeholder='Password' 
            value={this.state.password}
             onChangeText={(password) => {this.setState({password})}}
            secureTextEntry/>

<TouchableOpacity style={styles.buttonContainer} 
                   onPress={this.onTapSubmit}
                   >
           <Text  style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity> 
</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   
    container: {
      flex:1,
     padding: 20
    },
    input:{
        height: 40,
        width:200,
        marginBottom: 10,
        padding: 10,
        borderWidth: 0.1,
        color: '#000',
        borderRadius: 0,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
  
});
