import React, {Component} from 'react';
import {connect} from "react-redux";
import {StyleSheet, Text, View, Image, TouchableHighlight, ScrollView} from 'react-native';
import {fetchGalleryData} from "../../redux-stuff/actions/fetchGalleryData";

class GalleryList extends Component {

  componentWillMount() {
    this.props.onFetchGalleryData()
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
     <ScrollView>
       <View style={styles.container}>
         {
           this.props.galleryData.map((value, id) =>
            <View key={id}
                  style={styles.item}
            >
              <Text>{value.user.name}</Text>
              <Text>{`${value.description !== null ? value.description : ''}`}</Text>
              <TouchableHighlight onPress={() => navigate('Image', {currentImage: value.urls.raw})}>
                <Image
                 style={{width: 150, height: 150}}
                 source={{uri: value.urls.small}}
                />
              </TouchableHighlight>
            </View>
           )
         }
       </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  }
});
export default connect(
 state => ({
   galleryData: state.galleryData,
 }), dispatch => ({
   onFetchGalleryData: () => {
     dispatch(fetchGalleryData());
   }
 }))(GalleryList);