import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';

class CurrentImage extends Component {

  render() {
    return (
     <Image
      style={styles.image}
      source={{uri: this.props.navigation.state.params.currentImage}}
     />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  }
});
export default CurrentImage;
