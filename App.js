import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          //検索ワード入力欄の角を丸くする
          round
          //プレースホルダー
          placeholder="Type Here..."
          //テキストが変更されるたびに、updateSearch関数を呼び出す。
          onChangeText={this.updateSearch}
          value={search}
        />
        <View style = {styles.textContainer}>
        <Text style = {styles.text}>{search}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer:{
    padding:9,
  },
  text:{
    fontSize:27,
  }
});