import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions, 
PermissionsAndroid,
TouchableOpacity,
Text,
TextInput} from 'react-native';
import { Colours } from '../components/constants';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { MapFilter } from '../components/MapFilters';
const height = Dimensions.get('window').height;

export const MapViewScreen = () => {
    const markers = [
        {
            latitude: 49.2717299,
            longitude: -123.0693109,
            title: 'health care',
            subtitle: 'health care...'
        },
        {
            latitude: 49.282101,
            longitude: -123.0971959,
            title: 'health care 2',
            subtitle: 'health care 2'
        },
        {
            latitude: 49.2821779,
             longitude: -123.1041642,
            title: 'health care 3',
            subtitle: 'health care 3'
        },

    ]
  return (
    <View style = {{backgroundColor: '#fff', height: height}}>
      <View style={styles.mapcontainer}>
       <MapView
            onMapReady={() => {
                PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                ).then(granted => {
                alert(granted) // just to ensure that permissions were granted
                });
            }}
           provider={PROVIDER_GOOGLE}
           style={styles.maps}
           region={{
             latitude: 49.2493293,
             longitude: -123.1224315,
             latitudeDelta: 0.18,
             longitudeDelta: 0.18
           }}
           followsUserLocation={true}
           showsUserLocation={true}
           showsMyLocationButton={true}
           showsCompass={true}
           >
            { markers.map((each, i) => {
            return ( 
                <Marker
                    key={i}
                    title={each.title}
                    description={each.subtitle}
                    coordinate={{ latitude: each.latitude, longitude: each.longitude }}
                    />
            )
            }) } 
       </MapView>
       <View style = {styles.filterRow}>
            <MapFilter
                text={'Sketchy Areas'} />
            <MapFilter
                text={'Healthcare Centers'} />
           <MapFilter
                text={'Food Banks'} />
      </View>
       
      </View>
      </View>
      );
}


const styles = StyleSheet.create({
  mapcontainer: {
        height: height,
        alignItems: 'center',
        flex: 1,  
        justifyContent: 'center'
  },
  maps: {
        ...StyleSheet.absoluteFillObject,
  },
  filter: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '39%',
    height: 34,
    backgroundColor: Colours.darkBlue,
    marginBottom: 10,
    marginHorizontal: 5
},
filterText: {
    fontFamily: 'VarelaRoundRegular',
    color: Colours.black,
    fontSize: 15,
},
filterRow : {
    flexDirection: 'row', 
    alignContent: 'center', 
    alignItems: 'center', 
    alignSelf: 'stretch',
    display: 'flex',
    flexWrap: 'wrap',
    zIndex: 1,
    position: 'absolute',
    top: 10
    
}
})