
import React from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import { useState } from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const ContactStack = createStackNavigator();
const CPUStack = createStackNavigator();
const RAMStack = createStackNavigator();
const GPUStack = createStackNavigator();
const OSStack = createStackNavigator();
const CSStack = createStackNavigator();
const motherBoardStack = createStackNavigator();
const powerSupplyStack = createStackNavigator();
const storageStack = createStackNavigator();
const gamingStack = createStackNavigator();
const howStack = createStackNavigator();


const Drawer = createDrawerNavigator();


//first
function HomeStackScreen({navigation}){
  return(
    <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </HomeStack.Navigator>
  )
}
function AboutStackScreen({navigation}){
  return(
    <AboutStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >

      <AboutStack.Screen name="About" component={AboutScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </AboutStack.Navigator>
  )
}
function ContactStackScreen({navigation}){
  return(
    <ContactStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <ContactStack.Screen name="Contact" component={ContactScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </ContactStack.Navigator>
  )
}
function CPUStackScreen({navigation}){
  return(
    <CPUStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <CPUStack.Screen name="CPU" component={CPUScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </CPUStack.Navigator>
  )
}
function RAMStackScreen({navigation}){
  return(
    <RAMStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <RAMStack.Screen name="RAM" component={RAMScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </RAMStack.Navigator>
  )
}
function OSStackScreen({navigation}){
  return(
    <OSStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <OSStack.Screen name="OS" component={OSScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </OSStack.Navigator>
  )
}
function GPUStackScreen({navigation}){
  return(
    <GPUStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <GPUStack.Screen name="GPU" component={GPUScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </GPUStack.Navigator>
  )
}
function CSStackScreen({navigation}){
  return(
    <CSStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <CSStack.Screen name="Cooling System" component={coolingScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </CSStack.Navigator>
  )
}
function motherBoardStackScreen({navigation}){
  return(
    <motherBoardStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <motherBoardStack.Screen name="Motherboard" component={motherBoardScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </motherBoardStack.Navigator>
  )
}
function powerSupplyStackScreen({navigation}){
  return(
    <powerSupplyStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <powerSupplyStack.Screen name="Power Supply" component={powerSupplyScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </powerSupplyStack.Navigator>
  )
}
function storageStackScreen({navigation}){
  return(
    <storageStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <storageStack.Screen name="Storage" component={storageScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </storageStack.Navigator>
  )
}
function gamingStackScreen({navigation}){
  return(
    <gamingStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <gamingStack.Screen name="Gaming Peripherals" component={gamingScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </gamingStack.Navigator>
  )
}
function howStackScreen({navigation}){
  return(
    <howStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:"#45494f",
        },
      headerTintColor:"white",
      
      }}
      >
      <howStack.Screen name="How To Build?" component={howScreen} options={{
        headerLeft:() => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#45494f"
          onPress={() => navigation.openDrawer()}></Icon.Button>),
          headerRight: () => (
            <Image style={styles.headerPic}
            source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}
 
            />
          )}}/>
    </howStack.Navigator>
  )
}






//second
function HomeScreen({navigation}){
  return(
    <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
      <Swiper autoplay horizontal={false} height={200} >
      <View style={styles.slide}>
          <Image 
          source={{uri:'https://img-17.ccm2.net/D6U8BTHt725j955FrEJc2ELUq9o=/2048x/317e4774e98c48e8a7c26cbcd5651a26/ccm-faq/Incognito_Chrome_0.jpg'}}
          resizeMode="cover"
          style={styles.sliderImage}
          />
        </View>
      
        <View style={styles.slide}>
          <Image 
          source={{uri:'https://lh3.googleusercontent.com/proxy/swRcv2jo1PIMQEiffwL2uxLrLZeobkJu6vLWfS5Tns0yav08xRumSFjIEV-q-0i2ACMQMNizvOZ-3p7MM4rCHPdU3cXyKsPskNyIx_yBHJwNz33LBKe4hSKqReAfwcfFAtpE-HUj4eEXohTGJpKfuPu2LN-kf_AI8hguPZf86i02eea3'}}
          resizeMode="cover"
          style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image 
          source={{uri:'https://i.pcmag.com/imagery/articles/06LiQJzDE1OdJcUdbgqwz1X-1..1569470572.jpg'}}
          resizeMode="cover"
          style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image 
          source={{uri:'https://images-na.ssl-images-amazon.com/images/I/7137LNOE2AL._AC_SL1500_.jpg'}}
          resizeMode="cover"
          style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image 
          source={{uri:'https://cdn.vox-cdn.com/thumbor/SEwxL1qWHjlDDQcL3zNYoFw9sWU=/0x0:2640x1749/1200x800/filters:focal(1109x664:1531x1086)/cdn.vox-cdn.com/uploads/chorus_image/image/69129616/twarren_rtx3080.0.jpg'}}
          resizeMode="cover"
          style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image 
          source={{uri:'https://cdn.mos.cms.futurecdn.net/WMjYxCy5DxJPfnns9UL4dF-1200-80.jpg'}}
          resizeMode="cover"
          style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image 
          source={{uri:'https://www.techsiting.com/wp-content/uploads/2018/12/Water-liquid-cooling-PC-case.png'}}
          resizeMode="cover"
          style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image 
          source={{uri:'https://cdn.vox-cdn.com/thumbor/FzKlO26j5YZtH36zuUGRG3xtCNs=/0x0:1600x1067/1200x800/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/63234240/IbANElpk.0.png'}}
          resizeMode="cover"
          style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image 
          source={{uri:'https://qph.fs.quoracdn.net/main-qimg-b51f26bf17a7fbe2433bb81f6ddee082'}}
          resizeMode="cover"
          style={styles.sliderImage}
          />
        </View>
      </Swiper>
      </View>
      <Text style={styles.textBrand}>Incognito</Text>
      <Text style={styles.textRed}> Components:</Text>
      <View style={styles.space} />
      <View style={{height: 100}} >





      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        >

            <View style={styles.homeSCrollview}>
              
              <Image
              source={{uri:'https://www.computerhope.com/jargon/c/cpu.png'}}
              style={styles.smallPic}
              resizeMode="contain"
              />
              <Text style={styles.smallPicDesc}> CPU</Text>
                </View>

            <View style={styles.homeSCrollview}>
              
              <Image
              source={{uri:'https://lh3.googleusercontent.com/proxy/7JffBHDHiLDUBkc0XtZnZSgAfA94ysfXJenuxj9MfGWhcH_-LTP5tyPqHhbhRcfUlofVucPFg20PnjadkbXUmkMB_CZKI4xBiOHtQDITvkunwzEZ5-6EScpuLjSol8lA-Dnd5e8'}}
              style={styles.smallPic}
              resizeMode="contain"
              />
              <Text style={styles.smallPicDesc}> Motherboard</Text>
                </View>

            <View style={styles.homeSCrollview}>
              
              <Image
              source={{uri:'https://purepng.com/public/uploads/large/purepng.com-ramelectronicsram-941524673788z0ok7.png'}}
              style={styles.smallPic}
              resizeMode="contain"
              />
              <Text style={styles.smallPicDesc}> Ram</Text>
                </View>

            <View style={styles.homeSCrollview}>
              
              <Image
              source={{uri:'https://lh3.googleusercontent.com/proxy/i1i3kGxqM_9FMKBJTRysP5Q7GXauum1thQijW8R4tdJ2MMYRQN6vZR5skHMl6Nhm1LSb_2Ev8nKchIk2nnGzZAmzr47psaKDeqIGF2QqsSntx4bFOGZrPldbY76J3hY'}}
              style={styles.smallPic}
              resizeMode="contain"
              />
              <Text style={styles.smallPicDesc}> GPU</Text>
                </View>

            <View style={styles.homeSCrollview}>
              
              <Image
              source={{uri:'https://pngimg.com/uploads/hard_disc/Hard%20disc%20PNG,%20hard%20drive%20PNG%20images%20free%20download,%20HDD%20PNG_PNG12038.png'}}
              style={styles.smallPic}
              resizeMode="contain"
              />
              <Text style={styles.smallPicDesc}> Storage</Text>
                </View>

            <View style={styles.homeSCrollview}>
              
              <Image
              source={{uri:'https://www.pngkey.com/png/full/532-5325323_standard-atx-form-factor-evga-br-700w-psu.png'}}
              style={styles.smallPic}
              resizeMode="contain"
              />
              <Text style={styles.smallPicDesc}> PSU</Text>
                </View>

            <View style={styles.homeSCrollview}>
              
              <Image
              source={{uri:'https://lh3.googleusercontent.com/proxy/iaveEafiHvK4dDHqzzVnzkErBPBIJE05CYSOzTxRJTmgmmLgXJPohZh5eB4bkD1BtPTeCnMOo2NGUuOVKiob9wCb8MyVPZbOrqyxiCDlOmfe4JYaWli9INgrdMq4x4wiOv3URGtBSntxaGI'}}
              style={styles.smallPic}
              resizeMode="contain"
              />
              <Text style={styles.smallPicDesc}> System Cooling</Text>
                </View>

            <View style={styles.homeSCrollview}>
              
              <Image
              source={{uri:'https://www.gigabyte.com/FileUpload/Global/news/1483/XK700.png'}}
              style={styles.smallPic}
              resizeMode="contain"
              />
              <Text style={styles.smallPicDesc}> Gaming Peripherals</Text>
                </View>

            <View style={styles.homeSCrollview}>
              
              <Image
              source={{uri:'https://www.freeiconspng.com/uploads/os-windows-icon-15.png'}}
              style={styles.smallPic}
              resizeMode="contain"
              />
              <Text style={styles.smallPicDesc}> OS</Text>
                </View>

      </ScrollView>
      </View>
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.space} />
      <TouchableOpacity
        style={styles.buttonLogin} onPress={() => navigation.navigate("About")}>
        <Text style={styles.buttonText}>Go to About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonLogin} onPress={() => navigation.navigate("How To Build?")}>
        <Text style={styles.buttonText}>Learn How to Build</Text>
      </TouchableOpacity>
      {/* <Button onPress={() => navigation.navigate("About")} title="Go to profile" color="red"></Button>
     <Button onPress={() => navigation.navigate("Contact")} title="Go to Contact" color="red"></Button> */}


</View>
</ImageBackground>
  )
}
function AboutScreen({navigation}){
  return(
    <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
<ScrollView style={styles.scrollView1} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} >
      <View style={styles.container}>
      
      <Text style={styles.textBrand}>About Incognito:</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.pinclipart.com/picdir/big/147-1475546_3158068-comment-incognito-mode-clipart.png'}}/>
      <Text style={styles.textRed}>Incognito is an application made by the 3rd year B.S.I.T students of Technological Institute of the Philippines</Text>
      <Text style={styles.textRed}>This application is for the people who wants to learn about computers and its basic components. The application also provided some tutorials for building a PC for the people who are planning on building their own PC.</Text>
    <View style={styles.space}></View>
    <View style={styles.space}></View>
    </View>


    <View style={styles.container2}>
      <Text style={styles.textBrand2}>Meet the</Text>
      <Text style={styles.textBrand2}>Developers</Text>
      <View style={styles.space} />
      <Text style={styles.textRed2}>Name: Rhamier Balan</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://scontent.xx.fbcdn.net/v/t1.15752-9/161267576_893202411530350_7412849823492772333_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeF1T5fyWqR5Ti03vc1p1m97U89ZDFIxbxVTz1kMUjFvFSmVOaB78peSVHoSAnTDFHen7TKSlc5GnQao0pLrP1NT&_nc_ohc=JvJr0QiXq2AAX9pJYU0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=a087e042885cb5fee53c07aedaee77b5&oe=60AB7A61'}}/>
      <Text style={styles.textRed2}>Name: Jonathan Constantino</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/178178820_150647823664252_5810598149022535384_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFO-93mnp4Q3SvqY4ewzyLWcl06OtQb4hNyXTo61BviE461SD8g-8awIYjkwP2glg9boacce7g1Td5UeP3FInJQ&_nc_ohc=Ar94dd6Qdb4AX9zcsuP&_nc_ht=scontent.fmnl9-1.fna&oh=e0d4458a4d7ebb4c4656476133ba57f4&oe=60AD3F3A'}}/>
      <Text style={styles.textRed2}>Name: Paul Keannu Garcia</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/178072185_175790561066474_6556643897438529239_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGJ-FDQV22chQ2XOp7b6J-2FzXoQ8tXMLYXNehDy1cwtn92Dv32kjssNogV3xDarTsXb3Zz4u_QnA2EGdHnucux&_nc_ohc=77pnkdkRncIAX9D0zSX&_nc_ht=scontent.fmnl9-1.fna&oh=fd5cba9533846f77629e383425624837&oe=60AD90DD'}}/>
      <Text style={styles.textRed2}>Name: John Michael Manlangit</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.15752-9/176546194_486255212692043_3343668596119981829_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeE-1DoSVKEeMJ9Wq46uaAejrtY-wUaozLiu1j7BRqjMuGEjrjcv9mM6kZEoxhMpy-Kve-Ek5-JYvq4Yi4LF3321&_nc_ohc=KTAY0czXyVIAX_AHl6H&_nc_ht=scontent.fmnl9-2.fna&oh=437983aee4043663e08dcccc7745854d&oe=60AE13E7'}}/>
      <Text style={styles.textRed2}>Name: Stephen Blue Morato</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.15752-9/175475679_475882300527281_2064653754427164057_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHqZtysfHk3IqTgwXnelLyOGtXdVhAOYS4a1d1WEA5hLpF2Yr6oByZI-s8bXoCDB1Cff4Ue7g0yYBVS2G5-I0qr&_nc_ohc=OiHlVy-pW20AX8GB_FC&_nc_ht=scontent.fmnl9-2.fna&oh=c7937da05651134e9bc1528e809e334d&oe=60AD08F0'}}/>
      <Text style={styles.textRed2}>Name: Jan Kyle Nicolas</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.15752-9/178559930_2996599143931982_260002892826140579_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGwrjMbRlUiQCUiHMHwUrZAeYuTIXo7ilV5i5MhejuKVdu3j28MqMjWEphjvdRkt-XuwjcxtsBcAzZbr-P5B9vQ&_nc_ohc=4XBBmsAiXscAX-OF7E5&_nc_oc=AQljMj7gJM2poOXCk9uRSlF6gkjqMrqv9AhlZppK9TDIUG13u46-IJkIUmO7Q90bm_TJoPyp3_BM1kARMCzpf2cb&_nc_ht=scontent.fmnl9-2.fna&oh=cb6c936b24817306377d6cf8d325424a&oe=60AAF982'}}/>
      {/* <Icon2.Button name = "navigate-before" size={30} onPress={() => navigation.navigate("About")} ></Icon2.Button>  */}
      <View style={styles.space} />
      <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
      <View style={styles.space} />
       <Icon2.Button backgroundColor="black"name = "navigate-next" size={30} onPress={() => navigation.navigate("CPU")} ></Icon2.Button>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}
function ContactScreen({navigation}){
  
const [email,setEmail] = useState('');
const [name,setName] = useState('');

  return(
    <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.textBrand}>Contact Us</Text>
      <Text style={styles.textRed}>If you have any inquiries, You can contact us at:</Text>
      <Text style={styles.textRed}>Contact Number: 1234567890{"\n"}Email Address: incognito@gmail.com{"\n"}Address: Robinsons Homes East, Antipolo City, Rizal</Text>
      <MapView
      style={{ width:400,height:200,}}
      provider={MapView.PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 14.582928219212997, 
        longitude: 121.1881645513354,
        latitudeDelta: 0,
        longitudeDelta: 0.005,
      }}
      
    />
      <Text style={styles.textRed}>You can also fill up the form below so that you can communicate with us.</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor = "gray"
        onChangeText = {(val) => setEmail(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor = "gray"
        onChangeText = {(val) => setName(val)}
      />
       <TextInput
        style={styles.inputConcern}
        placeholder="Concern"
        placeholderTextColor = "gray"
        multiline = {true}  
      />
      <Text style={styles.textRed}>Email: {email}, Name: {name}</Text>

      <TouchableOpacity
        style={styles.buttonLogin} onPress = {() => alert('Submitted')
       }>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
      <View style={styles.space} />
      <Icon2.Button backgroundColor="black"name = "navigate-next" size={30} onPress={() => navigation.navigate("How To Build?")} ></Icon2.Button>
    </View>
    </ScrollView>
    </ImageBackground>
  ) 
}
function CPUScreen({navigation}){
  return(
    <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
      <ScrollView style={styles.scrollView1} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} >
      <View style={styles.container}>
      
      <Text style={styles.textBrand}>CPU</Text>
      <Text style={styles.textRed}>Every PC has a Central Processing Unit (CPU) this acts as the brain of your system. It connects to the Motherboard and works alongside the other components processing many instructions at the same time between the different hardware and memory systems. Advancements in CPU technology now mean systems typically come at least Dual Core, Quad Core or more processors (on one single chip) instead of the traditional one core per chip.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.computerhope.com/jargon/c/cpu.png'}}/>
      <Text style={styles.textBrand}>Cores</Text>
      <Text style={styles.textRed}>Cores refer to how many processing units are reading and executing program instructions. Each chip can be made up of one, two, four, six, or eight cores. For the professional video editor or designer, having more cores will be beneficial to boosting performance and speed. If you use the PC for daily office tasks such as documents, excel, or web browsing, a dual core will suffice most of the time; for more intensive professional software, quad-core and up will be the sweet spot.</Text>
      <Text style={styles.textBrand}>Cache Memory</Text>
      <Text style={styles.textRed}>Another key factor in determining the value of CPU is the Cache Memory. This is the processor’s built-in RAM that assists in accessing the central memory (actual RAM) faster. There are different layers of cache, referred to as L1, L2, and L3 – the higher capacity yields faster response. Cache sizes usually range from 512KB to 16MB with L1 being the smallest size and L3 being the largest. All of the CPUs we recommend below have cache sizes around the L3 range, which will provide more than enough memory capacity for various productivity, business, and entertainment needs.</Text>
      <Text style={styles.textBrand}>Threads</Text>
      <Text style={styles.textRed}>Finally, Threads are the tasks that the CPU executes. Similar to cores, multithreading is only really beneficial when running multithreaded applications, such as video editing, programming, heavy multi-tasking, and 3D rendering.</Text>
      <Text style={styles.textBrand}>Intel VS. AMD</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://ferrianx.files.wordpress.com/2017/03/main-qimg-a944c7fb314b9163f69a2cc91a841d8a.png?w=640'}}/>
      <Text style={styles.textRed}>When it comes to AMD vs Intel, it all depends on what kind of use you are. AMD is a good choice for entry- and mid-level users, while Intel makes the best premium chips for pro users. This is because Intel’s high-end chips are faster and more power-efficient than AMD’s. For decades, Intel dominated AMD, and it was considered the brand leader in the CPU market. However, things turned around for AMD when they released the Ryzen 7 series, which was made to rival Intel’s Core i7 offerings. </Text>
      <Text style={styles.textRed}>AMD followed through with the launch of Ryzen 3 and 5 models. Their latest offering is the Ryzen 9 3950X, AMD’s first 16-core, 32-thread processor for mainstream use. In contrast, Intel offers the eight-core, 16-thread Core i9-9900K. The company touts it as “the best gaming processor in the world.” Intel’s Core X Processor Series has up to 18 cores and 36 threads, making it the perfect choice for high-end users who are into content creation.</Text>
      <View style={styles.space} />
      <Icon2.Button backgroundColor="black" name = "navigate-before" size={30} onPress={() => navigation.navigate("About")} ></Icon2.Button> 
      <View style={styles.space} />
      <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
      <View style={styles.space} />
       <Icon2.Button backgroundColor="black"name = "navigate-next" size={30} onPress={() => navigation.navigate("Motherboard")} ></Icon2.Button>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}
//motherboard


function RAMScreen({navigation}){
  return(
    <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
      <ScrollView style={styles.scrollView1} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} >
      <View style={styles.container}>
      
      <Text style={styles.textBrand}>RAM</Text>
      <Text style={styles.textRed}>Alternatively referred to as main memory, primary memory, or system memory, RAM (random-access memory) is a hardware device that allows information to be stored and retrieved on a computer. RAM is usually associated with DRAM, which is a type of memory module. Because data is accessed randomly instead of sequentially like it is on a CD or hard drive, access times are much faster. However, unlike ROM, RAM is a volatile memory and requires power to keep the data accessible. If the computer is turned off, all data contained in RAM is lost.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.computerhope.com/jargon/d/dimm.png'}}/>
      <Text style={styles.textBrand}>Types of RAM</Text>
      <Text style={styles.textRed}>Over the evolution of the computer, there have been different variations of RAM. Some of the more common examples are DIMM, RIMM, SIMM, SO-DIMM, and SOO-RIMM. Below is an example image of a 512 MB DIMM computer memory module, a piece of RAM found in older desktop computers. This memory module would be installed into one of the memory slots on a motherboard.</Text>
      <Text style={styles.textBrand}>What's the largest stick of RAM?</Text>
      <Text style={styles.textRed}>Currently, the largest single stick of RAM is 128 GB.</Text>
      <Text style={styles.textBrand}>History of RAM</Text>
      <Text style={styles.textRed}>The first form of RAM came about in 1947 with the use of the Williams tube. It utilized a CRT (cathode ray tube); the data was stored on the face as electrically charged spots.</Text>
      <Text style={styles.textRed}>The second widely used form of RAM was magnetic-core memory, invented in 1947. Frederick Viehe is credited with much of the work, having filed for several patents relating to the design. Magnetic-core memory works through the use of tiny metal rings and wires connecting to each ring. One bit of data could be stored per ring and accessed at any time.</Text>
      <Text style={styles.textRed}>However, RAM, as we know it today, as solid-state memory, was first invented in 1968 by Robert Dennard. Known specifically as dynamic random-access memory, or DRAM, transistors were used to store bits of data.</Text>
      <Text style={styles.textBrand}>Additional RAM information</Text>
      <Text style={styles.textRed}>As the computer boots, parts of the operating system and drivers are loaded into memory, which allows the CPU to process instructions faster and speed up the boot process. After the operating system is loaded, programs you open like the browser you're using to view this page are also loaded into memory. If too many programs are open, the computer swaps the data in the memory between the RAM and the hard disk drive.</Text>
      <Text style={styles.textRed}>A computer's performance is largely attributed to the amount of memory contained within it. If a computer does not have the recommended memory to run the operating system and its programs, it results in slower performance. The more memory a computer has, the more information and software it can load and process quickly.</Text>
      <View style={styles.space} />
      <Icon2.Button backgroundColor="black" name = "navigate-before" size={30} onPress={() => navigation.navigate("Motherboard")} ></Icon2.Button> 
      <View style={styles.space} />
      <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
      <View style={styles.space} />
       <Icon2.Button backgroundColor="black"name = "navigate-next" size={30} onPress={() => navigation.navigate("GPU")} ></Icon2.Button>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}
function gamingScreen({navigation}){
  return(
    <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
      <ScrollView style={styles.scrollView1} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} >
      <View style={styles.container}>
      
      <Text style={styles.textBrand}>Gaming Peripherals</Text>
      <Text style={styles.textRed}>Peripherals are devices that are not the computer's core architecture involved in memory and processing. Peripherals include input hardware, output hardware and storage devices. A typical desktop computer could include: inputs - mouse, keyboard, webcam, games controller. outputs - screen, printer, speakers, headphones.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.androidguys.com/wp-content/uploads/2021/01/hyperx_ces2021.jpg'}}/>
      <Text style={styles.textBrand}>Mouse</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://venturebeat.com/wp-content/uploads/2017/01/HyperX-Pulsefire-FPS_front.png?fit=400%2C250&strip=all'}}/>
      <Text style={styles.textRed}>A gaming mouse is essentially a desktop mouse with additional functions to make it suited to computer gaming and high intensity programming. These functions often include programmable buttons, higher sensitivity, adjustable weight and faster response times.</Text>
      <Text style={styles.textBrand}>Keyboard</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.pngkey.com/png/full/429-4290320_redragon-k579-mechanical-gaming-keyboard-wired-rgb-iball.png'}}/>
      <Text style={styles.textRed}>Gaming keyboards can come with either mechanical or membrane-based keys, with the choice often coming down to individual preference. For gamers, mechanical keyboards are vital for fast-paced gaming, requiring less force and depression for each tap, and delivering a firm and satisfying bounce-back.</Text>
      <Text style={styles.textBrand}>Headset</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://resource.logitechg.com/w_1000,c_limit,q_auto:best,f_auto,dpr_auto/content/dam/gaming/en/products/g231/g231-hero.png?v=1'}}/>
      <Text style={styles.textRed}>Whether you’re a hardcore PC gamer or a console baby, eventually the people you live with will probably get annoyed at the various bleeps, bloops, and gunshots of your video games. Maybe you’ve already got a great pair of headphones and a webcam with a mic to cover your multiplayer needs, but sometimes it’s nice to have it all in one place. That’s where the gaming headset comes in.</Text>
      <View style={styles.space} />
      <Icon2.Button backgroundColor="black" name = "navigate-before" size={30} onPress={() => navigation.navigate("Cooling System")} ></Icon2.Button> 
      <View style={styles.space} />
      <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
      <View style={styles.space} />
       <Icon2.Button backgroundColor="black"name = "navigate-next" size={30} onPress={() => navigation.navigate("OS")} ></Icon2.Button>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}
function OSScreen({navigation}){
  return(
    <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
      <ScrollView style={styles.scrollView1} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} >
      <View style={styles.container}>
      
      <Text style={styles.textBrand}>Operating System</Text>
      <Text style={styles.textRed}>An operating system (OS) is the program that, after being initially loaded into the computer by a boot program, manages all of the other application programs in a computer. The application programs make use of the operating system by making requests for services through a defined application program interface (API). When building a PC, you should decide on what OS would you choose depending on what you will use it for.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://therank.in/wp-content/uploads/2020/05/The-top-10-best-operating-system-OS-for-PC-and-laptop-therank.in_.jpg'}}/>
      <Text style={styles.textBrand}>Microsoft Windows</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.computerhope.com/jargon/w/windows.png'}}/>
      <Text style={styles.textRed}>Windows is the most familiar operating system to most users. Microsoft released latest version, Windows 10, in 2015, and it is a considerable improvement over previous versions such as Windows 8. The advantage of Windows is that is has a very broad range of software available. All kinds of software is available for Windows, from business software to home computing apps.</Text>
      <Text style={styles.textRed}>The disadvantage of Windows is that it does have security issues, as it is the target of a large amount of malware. If you're going to use Windows, it's important that you keep your operating system up to date.</Text>
      <Text style={styles.textRed}>One group of people for whom Windows is the best OS is gamers. If you like to play games, especially AAA titles, then the best operating system for your PC will be Windows. The selection of games available on Linux and macOS is getting better, especially since the launch of Apple Arcade and Steam bringing support platforms beyond Windows.</Text>
      <Text style={styles.textBrand}>Linux</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png'}}/>
      <Text style={styles.textRed}>One option you might not have considered in your search for the best operating system for a laptop or desktop is Linux. Linux has a reputation for being hard to use, although in recent years more user-friendly distributions have become available.</Text>
      <Text style={styles.textRed}>Linux's greatest strength is its flexibility. You can change just about anything you want in a Linux system, as long as you have the required knowledge. This is why the operating system is so popular among power users who want to perform complex tasks in an efficient way.</Text>
      <Text style={styles.textRed}>However, for the average user the learning curve for Linux is rather steep. Some people are intimidated by the command line. And it can take a long time before you learn the commands you need to use the operating system efficiently. For this reason, Linux isn't well suited to less techy-savvy users.</Text>
      <Text style={styles.textBrand}>Macintosh Operating System</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/MacOS_original_logo.svg/1200px-MacOS_original_logo.svg.png'}}/>
      <Text style={styles.textRed}>A preferred operating system among creative professionals is macOS. Unlike Windows, which you can install on most PC hardware, macOS is generally only available on Mac hardware. (You can install macOS on non-Apple hardware to create what's called a Hackintosh, but this is complex.) For most users who want to use macOS, they'll need to buy a Mac machine.</Text>
      <Text style={styles.textRed}>The advantage of macOS is its exceptional support for creative software such as Adobe Photoshop or Premier. While this kind of software is available on Windows too, it generally functions better and has more options on macOS. Another plus point for macOS is that Apple updates it regularly, and that upgrading to the latest version of the OS is usually free. It is also less frequently targeted by malware.</Text>
      <Text style={styles.textRed}>The disadvantage of macOS is that Apple hardware can be expensive, with laptops and desktops costing thousands of dollars. There's also much less free software available for macOS than other operating systems, so be prepared to spend more on software too.</Text>
      <View style={styles.space} />
      <Icon2.Button backgroundColor="black" name = "navigate-before" size={30} onPress={() => navigation.navigate("Gaming Peripherals")} ></Icon2.Button> 
      <View style={styles.space} />
      <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
      <View style={styles.space} />
       <Icon2.Button backgroundColor="black"name = "navigate-next" size={30} onPress={() => navigation.navigate("Contact")} ></Icon2.Button>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}
function GPUScreen({navigation}){
  return(
    <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
      <ScrollView style={styles.scrollView1} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} >
      <View style={styles.container}>

      <Text style={styles.textBrand}>GPU</Text>
      <Text style={styles.textRed}>The graphics processing unit, or GPU, has become one of the most important types of computing technology, both for personal and business computing. Designed for parallel processing, the GPU is used in a wide range of applications, including graphics and video rendering. Although they’re best known for their capabilities in gaming, GPUs are becoming more popular for use in creative production and artificial intelligence (AI).
      GPUs were originally designed to accelerate the rendering of 3D graphics. Over time, they became more flexible and programmable, enhancing their capabilities. This allowed graphics programmers to create more interesting visual effects and realistic scenes with advanced lighting and shadowing techniques. </Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://dlcdnwebimgs.asus.com/gain/80f58b58-2888-4bf3-8a2d-2f79ed76a10d/'}}/>
      <Text style={styles.textBrand}>Memory Type - GDDR</Text>
      <Text style={styles.textRed}>Memory in graphics cards works the same as regular RAM. It stores graphics data temporarily to be processed by the GPU.
      RAM in graphics cards is referred to as VRAM, and these days you are likely to see cards that use either GDDR5, GDDR5x, or GDDR6 VRAM.
      GDDR6 gives better power efficiency and performance than GDDR5X, which in turn does the same over GDDR5.</Text>
      
      <Text style={styles.textBrand}>Memory Size</Text>
      <Text style={styles.textRed}>As with regular RAM, its size is measured in GB. More RAM is always better, as there is more space to store graphical information. It is important to note that performance might not be increased by increasing the RAM beyond a certain level, as it depends on having applications or games that can properly utilize it.
      Commonly seen VRAM sizes are 4GB, 6GB, 8GB. It is worth knowing that VRAM on a graphics card cannot be changed or upgraded like regular RAM on motherboard. The VRAM is built into the hardware of the graphics card.</Text>
      <
        Text style={styles.textBrand}>Memory Bandwidth</Text>
      <Text style={styles.textRed}>Memory bandwidth can be seen as an overall assessment of the performance of the VRAM on a graphics card. Memory bandwidth is simply how fast the VRAM on your card can be accessed and utilized when in use.</Text>
      <Text style={styles.textRed}>Memory bandwidth is the product of three variables: memory clock speed, memory bus width, and the transfers-per-clock of the memory type.</Text>
      <Text style={styles.textRed}>{'\u2B24'}Memory clock speed: Measured in MHz, this variable refers to how quickly your VRAM can access the information it has stored. The higher the number, the better.</Text>
      <Text style={styles.textRed}>{'\u2B24'}Memory bus width: Bus width is similar to the lanes mentioned earlier. With each clock cycle, a wider bus width will allow for more information to be transferred. This is measured in bits, such as 128-bit and 256-bit.</Text>
      
      <Text style={styles.textBrand}>Motherboard Interface/Connection</Text>
      <Text style={styles.textRed}>Whether you're building a PC from scratch or simply upgrading the graphics card in the PC you already own, you need to make sure that the graphics card you purchase is compatible with the motherboard.
      In the past, an interface known as AGP (Accelerated Graphics Port) was widely used, but it started to phase out from 2004.
      Now, all graphics card use the PCI Express (PCIe) interface to connect to the motherboard.</Text>
      <Text style={styles.textSubTitle}>PCI-E version</Text>
      <Text style={styles.textRed}>At this time, PCIe 4.0 is only getting its first few graphics cards, so most cards you see will be PCIe 3.0 based. It is very important to know that PCIe is backward compatible, which means that any PCIe graphics card will operate in any PCIe compatible motherboard.</Text>
      <Text style={styles.textSubTitle}>Lanes</Text>
      <Text style={styles.textRed}>PCIe interface has an ‘x’ value, for example, x8 or x16. This refers to the number of lanes that the slot has. Think of these lanes as the lanes on an expressway, or pipes carrying water.
      So, x16 will be able to work at a higher bandwidth than x8 or x4. Most graphics cards are x16 nowadays.</Text>

      <Text style={styles.textBrand}>Thermal Design Power (TDP)</Text>
      <Text style={styles.textRed}>hermal design power, or thermal design point, is a good way to assess the power consumption and thermal performance of a GPU. Like the term denotes, it indicates the power required to generate the highest amount of heat that the cooling system can handle.
      This is measured in watts and it potentially affects the selection of other parts of your pc build. You must ensure that the output power rating for your PSU is sufficient to not only carry your graphics card but all other components in the system. 
      If your graphics card has a high power rating like 180W and above then it is recommended to have a PC case that has good ventilation for maximum heat dissipation.</Text>

      <Text style={styles.textBrand}>Power Connectors</Text>
      <Text style={styles.textRed}> A PCIe slot can provide power to the card slotted into it, but only 75W. Graphics cards have become so power-intensive that it did not take long for them to surpass that limit and require more power.
      Due to this, modern GPUs have power connectors that allow them to draw additional power directly from the PSU. These connectors can be either six-pin or eight-pin connectors.
      A modern graphics card can have up to 2 connectors, which can be any combination of these two. So when purchasing a PSU, besides the maximum output power, you should take note of the power connectors it has and ensures it will be able to power your graphics card.</Text>
      
      <Text style={styles.textBrand}>Display Output Ports</Text>
      <Text style={styles.textRed}>Graphics Cards often have multiple different types of video output connectors.
      Depending on the type of monitor you use, you will most likely be able to connect to the card via HDMI or DisplayPort, which are more common-place when it comes to displays.
      Some newer cards support using USB Type-C to connect, though it is less common to find monitors that support that, as it is still an emerging technology. VGA and DVI are relatively older ports which you may only see on older displays.
      If you hope to connect your PC to multiple monitors, it is important to take note of which ports are available, and the connectors that your monitors have access to.</Text>
      
      <Text style={styles.textSubTitle}>HDMI</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://lh3.googleusercontent.com/proxy/GIKbYM8Ph_R-hZ9pBm6VNQpBYiM2YxcEjqVpL-QYAYrmu82h6nEeXHFbNd6kPdhJUwqTpi8W2u8cioCYlmFK8K0qBLwDAXVJnJ6VXT7vgM4cwztPaAz5VSm3D056VNJD'}}/>
      <Text style={styles.textRed}>Currently the most ubiquitous of the port options available, HDMI has been around for a long time and good reason. It can be seen on PCs, TVs, Blu-ray players, video game consoles, and set-top boxes.
      HDMI is advantageous as it supports audio and video, both in their uncompressed forms. The newest revision, HDMI 2.0, has enough bandwidth to support resolutions of up to 4K at 60Hz, which can also allow 1080p at 144Hz.
      HDMI 2.0 also supports up to 10-bit and 12-bit color, which allows for HDR (High Dynamic Range) content playback.</Text>

      <Text style={styles.textSubTitle}>DisplayPort</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.pngkey.com/png/full/914-9142768_product-image-png-displayport.png'}}/>
      <Text style={styles.textRed}>At this point, DisplayPort is as well known as HDMI, and on its way towards having the same reach that HDMI does. Similar to HDMI, it supports both audio and video output.
      Achieving higher resolutions on DisplayPort has always been straightforward, even since the earlier revisions. DisplayPort 1.4 can render up to 4K at 144Hz, while even the 1.1 revision, which is relatively outdated, can support up to 1080p at 144Hz.
      At lower refresh rates, DisplayPort can support up to 8K resolution, making it one of the only output options that can support this coveted resolution.</Text>

      <Text style={styles.textSubTitle}>USB Type-C</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.pngarts.com/files/9/USB-Type-C-Cable-Transparent-Background-PNG.png'}}/>
      <Text style={styles.textRed}>The newest of the group, USB Type-C, improved on the foundation that USB Type-A had established. It is smaller, fully reversible, and extremely versatile. USB Type-C can transmit data, but also audio, video, and even act as a charger.
      USB Type-C can be found on laptops, tablets, and smartphones, and with its presence increasingly widening, monitors are starting to support USB-C.
      USB Type-C can support resolutions of up to 4K refreshing at 60Hz. One downside is that USB-C monitors that do not support at least DisplayPort Alt Mode 1.2 are currently not able to support Adaptive-Sync technology.</Text>

      <Text style={styles.textSubTitle}>DVI</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.pngarts.com/files/8/DVI-Cable-Transparent-Background-PNG.png'}}/>
      <Text style={styles.textRed}>DVI is a relatively older output type that is slowly being phased out in favor of hdmi and displayport.
      There are 3 types of DVI, which are DVI-A (analog, and essentially obsolete), DVI-D (digital), and DVI-I (both analog and digital signals). For DVI-D and DVI-I, there are single and dual-link variants, of which the latter can support more bandwidth.
      DVI-D is still capable, however, being able to support a maximum resolution of 1080p at 144Hz.</Text>

      <Text style={styles.textSubTitle}>VGA (D-Sub)</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://adder-assets.s3.eu-west-1.amazonaws.com/s3fs-public/styles/cta/public/images/vscd9_cable_q1.png?itok=VzkfxKID'}}/>
      <Text style={styles.textRed}>GA is the oldest display output method of those mentioned here and was primarily used in the days of CRT displays. Newer output interfaces were developed as flat-screens and higher resolutions became more prominent, as analog signals of VGA could not support the resulting resolutions.
      VGA can only support up to 1080p at only 60Hz. The VGA port can be seen on older graphics cards only. Most new and recent graphics cards and motherboards have completely removed VGA support.</Text>

      <Text style={styles.textBrand}>API Support - DirectX, OpenGL, Vulkan</Text>
      <Text style={styles.textRed}>Graphics cards are built to process graphical information for your PC, as they are specially engineered to be able to do this. However, to do this, the hardware and software must be able to communicate and send instructions to one another, and this is where a Graphics API comes in.
      An application programming interface contains a set of instructions that tell the GPU how to resolve complex graphical tasks.
      There are different APIs, which are all coded differently but can each achieve most graphical tasks required in this era.
      APIs must be specifically supported by graphics cards drive and the hardware must be able to interpret the instructions provided by the API.
      DirectX 12, OpenGL 4.6, and Vulkan 1.2 are the latest versions of the most popular APIs currently. Most popular graphics cards based on AMD or Nvidia GPUs support Vulkan and DirectX.
      It should be noted that OpenGL is being replaced by Vulkan as a cross platform 3d graphics API.</Text>

      <Text style={styles.textBrand}>AMD or Nvidia</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://cdn.mos.cms.futurecdn.net/Skk8MW4tK73kaoeDnmnwRb-970-80.jpg.webp'}}/>
      <Text style={styles.textRed}>Although Intel has a built-in GPU on their CPU, they don’t have a GPU product compared to AMD and Nvidia. When it comes to price, AMD has always been known as the more affordable brand of graphics cards, and that is true to this day especially in the mid-range and expensive ones. When it comes to performance, Nvidia surpasses AMD but the GPUs of AMD keeps on improving combined with its affordable price point. Both have features that improves visuals and performance in games especially when it uses the GPU of Nvidia with its new Ray Tracing capability.</Text>
      <Text style={styles.textRed}>There’s so much to love about both Nvidia and AMD graphics. In the end, both of these companies rely on competition with each other to thrive. Suffice to say, the Nvidia vs AMD debate requires that you understand there’s a reason Radeon and GeForce GPUs are so similar in performance right now. 
      Each company is doing its best to keep up with the mindshare of the other, and that’s good for us. They’re basically fighting for our money, learning from each other’s mistakes and legislating marked improvements along the way. </Text>
      <View style={styles.space} />
      <Icon2.Button backgroundColor="black" name = "navigate-before" size={30} onPress={() => navigation.navigate("RAM")} ></Icon2.Button> 
      <View style={styles.space} />
      <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
      <View style={styles.space} />
       <Icon2.Button backgroundColor="black"name = "navigate-next" size={30} onPress={() => navigation.navigate("Storage")} ></Icon2.Button>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}
function coolingScreen({navigation}){
  return(
    <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
      <ScrollView style={styles.scrollView1} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} >
      <View style={styles.container}>
      
      <Text style={styles.textBrand}>Fan</Text>
      <Text style={styles.textRed}>A fan is a hardware device that keeps the overall computer or a computer device cool by circulating air to or from the computer or component. The picture is an example of a fan on a heat sink.</Text>
      <Text style={styles.textRed}>The speed of a fan is measured in revolutions per minute, or RPM and the higher the RPM rating, the faster the fan spins. However, in many cases, the higher the RPM rating, the louder a fan may be.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.computerhope.com/cdn/heatsink.jpg'}}/>
      <Text style={styles.textBrand}>Types of fans found in a computer</Text>
      <Text style={styles.textRed}>Below is a listing of the different types of fans used in a computer.</Text>
      <Text style={styles.textRed}>Case fan = Alternatively referred to as a system fan, a case fan is located inside a computer, attached to the front or back of its case. Case fans help bring cool air into and blow hot air out of the case. They are available in a wide variety of sizes, but 80mm, 92mm, and 120mm (12cm) with a width of 25mm are the most common. Below is an example of how a computer case fan may look.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://m.media-amazon.com/images/I/613vVzF2ReL._AC_.jpg'}}/>
      <Text style={styles.textRed}>CPU fan = a fan on top of a computer processor. It helps pull and blow hot air off the processor, helping keep it cooler.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.bhphotovideo.com/images/images2000x2000/cooler_master_rr_212x_20pm_a1_hyper_212x_turbo_cpu_1522640.jpg'}}/>
      <Text style={styles.textRed}>Power supply fan = a fan located inside a power supply. The power supply fan blows hotter air out of the power supply and out of the computer.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://img.staticbg.com/thumb/large/oaupload/banggood/images/4D/B9/f706b5a1-39c8-4bd8-b0cd-a06158658e6c.jpg'}}/>
      <Text style={styles.textRed}>Video card fan = a fan on a video card. It helps keep more powerful video cards from overheating, especially when playing video games, editing videos, and other GPU or graphic-intensive tasks.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://i.stack.imgur.com/zZo7i.jpg'}}/>
      <Text style={styles.textBrand}>Liquid cooling</Text>
      <Text style={styles.textRed}>In a computer, water cooling or liquid cooling is a system used to reduce the temperature of its hardware, specifically the CPU and GPU. Liquid is more efficient than gas at conducting thermal energy, so liquid cooled machines maintain desired operating temperatures better than their air cooled counterparts.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://i.pinimg.com/564x/1c/66/c0/1c66c0421ea4b2d99e4272c07962deaf.jpg'}}/>
      <Text style={styles.textBrand}>Heat Sink</Text>
      <Text style={styles.textRed}>A heat sink is a device that incorporates a fan or another mechanism to reduce the temperature of a hardware component (e.g., processor). There are two heat sink types: active and passive. The picture is an example of a heat sink with both active and passive cooling mechanisms.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.extremetech.com/wp-content/uploads/2012/06/sandia-cooler.jpg'}}/>
      <Text style={styles.textBrand}>Active Heat Sink</Text>
      <Text style={styles.textRed}>Active heat sinks utilize the computer's power supply and may include a fan. Sometimes these types of heat sinks are referred to as an HSF, which is short for heat sink and fan. There are also liquid cooling systems, which have become popular in recent years.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://heatscape.com/wp-content/uploads/2017/10/COVER-Active-Cooled-Heatsinks.jpg'}}/>
      <Text style={styles.textBrand}>Passive Heat Sink</Text>
      <Text style={styles.textRed}>Passive heat sinks are those that have no mechanical components. Consequently, they are 100% reliable. Passive heat sinks are made of an aluminum finned radiator that dissipates heat through convection. For passive heat sinks to work to their full capacity, there should be a steady airflow moving across the fins.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://images.easytechjunkie.com/heatsink.jpg'}}/>
      <Text style={styles.textBrand}>What are heat spreaders?</Text>
      <Text style={styles.textRed}>Heat spreaders are another type of passive heat sink used to help dissipate the heat produced by RAM modules.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.computerhope.com/jargon/h/heatspreader.jpg'}}/>
      <Text style={styles.textBrand}>What devices in a computer use a heat sink?</Text>
      <Text style={styles.textRed}>The components that generate the most heat in your computer are the CPU (central processing unit), video card (if your computer has one), and the power supply. They always have some cooling, usually a fan. Other components that may have a heat sink include the north bridge, south bridge, and memory. It is also not uncommon to find heat sinks on other expansion cards and hard drives.</Text>
      <View style={styles.space} />
      <Icon2.Button backgroundColor="black" name = "navigate-before" size={30} onPress={() => navigation.navigate("Power Supply")} ></Icon2.Button> 
      <View style={styles.space} />
      <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
      <View style={styles.space} />
       <Icon2.Button backgroundColor="black"name = "navigate-next" size={30} onPress={() => navigation.navigate("Gaming Peripherals")} ></Icon2.Button>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}
function motherBoardScreen({navigation}){
  return(
    <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
      <ScrollView style={styles.scrollView1} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} >
      <View style={styles.container}>
      
      <Text style={styles.textBrand}>Motherboard</Text>
      <Text style={styles.textRed}>The motherboard is the main circuit board of your computer and is also known as the mainboard or logic board. If you ever open your computer, the biggest piece of silicon you see is the motherboard. Attached to the motherboard, you'll find the CPU, ROM, memory RAM expansion slots, PCI slots, and USB ports. It also includes controllers for devices like the hard drive, DVD drive, keyboard, and mouse. Basically, the motherboard is what makes everything in your computer work together.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'http://clipart-library.com/image_gallery2/Motherboard-Free-PNG-Image.png'}}/>
      <Text style={styles.textBrand}>Form Factor</Text>
      <Text style={styles.textRed}>Initially you’ll need to select a form factor. ATX motherboards are common, as is micro ATX (although these are smaller in size and reduce the number of expansions slots). When you’re buying a new motherboard and not sure what size will fit, you can always measure your old motherboard and compare it with different sizes. The ATX board is popular, as it has the addition of more expansion slots, which can be useful.</Text>
      <Text style={styles.textBrand}>Processor Socket</Text>
      <Text style={styles.textRed}>After choosing a form factor you’ll need to choose a processor socket. There has been different types of sockets used in the past however three are only applicable today. These are LGA, PGA and BGA. Intel uses LGA, whilst AMD use PGA. BGA sockets aren’t as popular as the latter because these are permanently bonded to the motherboard so they cannot be serviced or upgraded. Depending what type of socket you have on your motherboard, it will determine what processor you can buy. So this you will probably need to consider what CPU you want first, then buy your motherboard.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://previews.123rf.com/images/olegdoroshin/olegdoroshin1601/olegdoroshin160100003/52157415-cpu-socket-and-processor-on-the-motherboard.jpg'}}/>
      <Text style={styles.textBrand}>RAM (Random Access Memory)</Text>
      <Text style={styles.textRed}>Next up, RAM, short for Random Access Memory. Fundamentally the motherboard you buy will determine the amount and type of RAM you can have. Therefore it’s worth being mindful of this before making a decision buying a motherboard. Consequently, we would recommend choosing a motherboard that can accommodate at least 16 GB, even though if you don’t plan to buy that much initially, you have the option to use this memory later. In addition, look for a board that offers 4 or more memory slots. This means you can install 2 RAM modules to begin and you will have spare room for memory upgrades in future.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://previews.123rf.com/images/powerbeephoto/powerbeephoto2004/powerbeephoto200400524/144842084-closeup-on-empty-ram-or-random-access-memory-slot-on-modern-black-motherboard.jpg'}}/>
      <Text style={styles.textBrand}>PCI Slots</Text>
      <Text style={styles.textRed}>A PCI slot is a connection or port that is located on the motherboard. They have been the standard type of expansions slot for years and they allow expansion cards to be connected. Depending on how you plan to use your computer, you’ll need to consider if your motherboard has the slots to suit your requirements. If you’re a gamer, you’ll want to have at least one full speed PCI express x16 slot and you’ll need multiple of those, if you want to connect multiple cards. Motherboards also offer standard PCI slots and smaller PCI express slots for other cards, like sound cards, Wi-Fi adaptors and other connectivity expansions.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://upload.wikimedia.org/wikipedia/commons/6/67/PCI_Slots_Digon3.JPG'}}/>
      <Text style={styles.textBrand}>Features</Text>
      <Text style={styles.textRed}>If you buy a motherboard with features already built in, you don’t have to worry about buying additional expansion cards. A more common feature which is usual included on the majority of motherboards is on-board audio. However this is usually only suitable for mid-range speakers. It is worth noting that better motherboards often bundle Wi-Fi and Bluetooth features as well, but you’ll have to spend more cash for these features. Nevertheless they will reduce the need for expansion cards.</Text>
      <Text style={styles.textBrand}>SATA</Text>
      <Text style={styles.textRed}>When considering buying a motherboard you may to need consider the number of SATA ports you’ll need. Each SATA port allows you to connect an optical drive and storage drives, like a SSD or HDD. So it’s important to make sure your motherboard has all the SATA ports you need for all of your drives. It is also worth noting that you need to make sure your motherboard offers the SATA 6 gigabytes standard, which is also known as SATA 3.0. Furthermore, you might need to consider peripheral connections, for example a USB 3.0.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://qph.fs.quoracdn.net/main-qimg-303904be0469df876e6f9d79d42abd50'}}/>
      <View style={styles.space} />
      <Icon2.Button backgroundColor="black" name = "navigate-before" size={30} onPress={() => navigation.navigate("CPU")} ></Icon2.Button> 
      <View style={styles.space} />
      <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
      <View style={styles.space} />
       <Icon2.Button backgroundColor="black"name = "navigate-next" size={30} onPress={() => navigation.navigate("RAM")} ></Icon2.Button>
    </View>
    </ScrollView>
    </ImageBackground>
  )
  }
  function powerSupplyScreen({navigation}){
    return(
      <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
        <ScrollView style={styles.scrollView1} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} >
        <View style={styles.container}>
        
        <Text style={styles.textBrand}>Power Supply</Text>
        <Text style={styles.textRed}>One of the least exciting, but most important, PC components is the power supply. PCs run on electricity, of course, and that’s not provided directly from the wall to every component inside a PC’s case. Instead, electricity routes from the alternating current (AC) provided by the power company into the direct current (DC) used by PC components in the required voltage.</Text>
        <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.pngkey.com/png/full/107-1075903_zoom-enermax-platimax-80plus-platinum-power-supply-1700.png'}}/>
        <Text style={styles.textRed}>It’s tempting to buy just any power supply to run your PC, but that’s not a wise choice. A power supply that doesn’t provide reliable or clean power can cause any number of problems, including instability that can be hard to pin down. In fact, a failing power supply can often cause other problems such as random resets and freezes that can otherwise remain mysterious.</Text>
        <Text style={styles.textBrand}>Power output: How much do you need?</Text>
        <Text style={styles.textRed}>While there are several important factors to consider when choosing a power supply – just like with every PC component – identifying one of the most important factors is refreshingly simple. You don’t need to pour through benchmarks or read reviews to know how much power output you need.</Text>
        <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.newegg.com/insider/wp-content/uploads/2019/02/cryorig-taku-pc-case-overview-2.jpg'}}/>
        <Text style={styles.textBrand}>Anticipate upgrades when buying a power supply</Text>
        <Text style={styles.textRed}>Of course, you might want to run some scenarios to make sure you can handle your long-term needs. For example, upgrading to an Nvidia GeForce RTX 2080 bumps the recommendation to 631 watts, while doubling the RAM only increases the recommendation to 582 watts. If you might do both eventually, then you’ll want at least 637 watts.</Text>
        <Text style={styles.textRed}>You get the picture. Don’t just plan to meet your needs today, instead look down the road a bit and think about what changes you might want to make later. And if you’re buying a pre-built PC, then you’ll want to make sure you know what power supply it uses to make sure it can handle whatever you might want to add – or that it’s easy enough to replace at some point.</Text>
        <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.newegg.com/insider/wp-content/uploads/2018/06/GPU-in-motherboard.jpg'}}/>
        <Text style={styles.textBrand}>Efficiency matters with a PSU</Text>
        <Text style={styles.textRed}>Wattage is just one measure of a power supply’s performance. Another is its efficiency rating, which is a measure of how much DC power it sends to the PC and how much is lost primarily to heat. Efficiency is important because it affects how much you’ll spend on keeping your PC juiced up.</Text>
        <Text style={styles.textRed}>As an example, consider a PC that requires 300 watts of power. If you use a power supply with an 85% efficiency rating, your PC will pull about 353 watts of input power from your power company. A power supply that’s only 70% efficient, on the other hand, will pull 428 watts of power from the wall. Choosing the more efficient power supply will save some cash on your monthly power bill.</Text>
        <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.newegg.com/insider/wp-content/uploads/2018/09/FSP-water-cooled-PSU-4-1.jpg'}}/>
        <Text style={styles.textRed}>At the same time, a power supply with a higher efficiency rating will allow your PC to run cooler as well. Every PC component generates some heat, and that tends to work against top performance. A more efficient power supply will dissipate less heat, which will mean a quieter system thanks to fans that don’t have to run as fast or as long, better reliability, and a longer lifespan.</Text>
        <Text style={styles.textBrand}>Form factor – Will your power supply fit?</Text>
        <Text style={styles.textRed}>The next consideration is a simple one – you’ll need to pick a form factor that you’re sure will physically fit into your case. Fortunately, there are standards in terms of power supplies just as there are in cases and motherboards.</Text>
        <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.newegg.com/insider/wp-content/uploads/2019/03/dark-flash-i5-build-gaming-PC.jpg'}}/>
        <Text style={styles.textBrand}>Connectors</Text>
        <Text style={styles.textRed}>A power supply is useless if it won’t connect to and power every component in your PC. That means it needs to have all the required connector types.</Text>
        <Text style={styles.textRed}>The first connector to consider is the main connector that powers the motherboard. This connector comes in two types, 20-pin and 24-pin. The latter is increasingly popular, and it’s likely that your power supply will provide both options. Just check to be sure.</Text>
        <Text style={styles.textRed}>Next up is the processor power connector, which comes in 4-pin and 8-pin versions. As with the main power connector, many modern motherboards have switched to the larger format. Again, make sure your power supply is compatible.</Text>
        <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.newegg.com/insider/wp-content/uploads/2018/11/abs_2080build_21.jpg'}}/>
        <Text style={styles.textRed}>The most frequently used power connector is the 4-pin Molex connector. It’s used for a variety of components including older HDDs, optical drives, fans, and certain other devices. Newer SATA components have their own SATA power connector, and you can also use Molex to SATA adapters if you run out of either. And, you can even use splitter cables to increase the number of components you can connect – but keep in mind your power supply’s upper limits.</Text>
        <View style={styles.space} />
        <Icon2.Button backgroundColor="black" name = "navigate-before" size={30} onPress={() => navigation.navigate("Storage")} ></Icon2.Button> 
        <View style={styles.space} />
        <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
        <View style={styles.space} />
         <Icon2.Button backgroundColor="black"name = "navigate-next" size={30} onPress={() => navigation.navigate("Cooling System")} ></Icon2.Button>
      </View>
      </ScrollView>
      </ImageBackground>
    )
    }
    function storageScreen({navigation}){
      return(
        <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
          <ScrollView style={styles.scrollView1} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} >
          <View style={styles.container}>
          
          <Text style={styles.textBrand}>Storage</Text>
          <Text style={styles.textRed}>Storage is the component within your computer that allows you to store and access data on a long-term basis. Usually, storage comes in the form of a solid-state drive or a hard drive. Storage houses your applications, operating system and files for an indefinite period. Computers need to write information and read it from the storage system, so the speed of the storage determines how fast your system can boot up, load and access what you’ve saved.</Text>
          <Image style={styles.pic} resizeMode="contain" source={{uri:'https://img.pngio.com/storage-png-5-png-image-storage-png-216_216.png'}}/>
    
          <Text style={styles.textBrand}>HDD - Hard Drive</Text>
          <Text style={styles.textRed}>An HDD is a data storage device that lives inside the computer. It has spinning disks inside where data is stored magnetically. The HDD has an arm with several "heads" (transducers) that read and write data on the disk. It is similar to how a turntable record player works, with an LP record (hard disk) and a needle on an arm (transducers). The arm moves the heads across the surface of the disk to access different data.</Text>
          <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.freeiconspng.com/uploads/drive-hard-hard-disk-hdd-hard-drive-icon-15.png'}}/>
          <Text style={styles.textRed}>HDDs are considered a legacy technology, meaning they’ve been around longer than SSDs. In general, they are lower in cost and are practical for storing years of photos and videos or business files. They are available in two common form factors: 2.5 inch (commonly used in laptops) and 3.5 inch (desktop computers).</Text>
    
          <Text style={styles.textBrand}></Text>
          <Text style={styles.textRed}>Another key factor in determining the value of CPU is the Cache Memory. This is the processor’s built-in RAM that assists in accessing the central memory (actual RAM) faster. There are different layers of cache, referred to as L1, L2, and L3 – the higher capacity yields faster response. Cache sizes usually range from 512KB to 16MB with L1 being the smallest size and L3 being the largest. All of the CPUs we recommend below have cache sizes around the L3 range, which will provide more than enough memory capacity for various productivity, business, and entertainment needs.</Text>
    
          <Text style={styles.textBrand}>SSD - Solid State Drive</Text>
          <Text style={styles.textRed}>SSDs got their name solid state because they have no moving parts. In an SSD, all data is stored in integrated circuits. This difference from HDDs has a lot of implications, especially in size and performance. Without the need for a spinning disk, SSDs can go down to the shape and size of a stick of gum (what’s known as the M.2 form factor) or even as small as a postage stamp.</Text>
          <Image style={styles.pic} resizeMode="contain" source={{uri:'https://lh3.googleusercontent.com/proxy/e0ykJeBT7RlpSoT6LsoI2iSS4OhzAz2FTw1mAK9XXv6igp2sVvZ-XzRmSvpeJCXH3-d79W_IpYOustspXVSq1d4dflB97sRMQTs9zgUDujDJ_Jd-'}}/>
          <Text style={styles.textRed}>Their capacity or how much data they can hold varies, making them flexible for smaller devices, such as slim laptops, convertibles, or 2 in 1s. And SSDs dramatically reduce access time since users don’t have to wait for platter rotation to start up. SSDs are more expensive than HDDs per amount of storage (in gigabytes, or GB, and terabytes, or TB), but the gap is closing as SSD prices begin to drop.</Text>
          
          <Text style={styles.textSubTitle}>SATA SSD</Text>
          <Image style={styles.pic} resizeMode="contain" source={{uri:'https://shop.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-green-ssd/gallery/240gb/wd-green-ssd-240gb-right.png.thumb.1280.1280.png'}}/>
          <Text style={styles.textRed}>Speaking of types of SSD, SATA SSD is the most common type. As a type of connection interface, SATA (Serial ATA) is used by SSD to communicate data with the system. If you own a SATA SSD, you can almost guarantee that it can be used with any desktop or laptop computer you own now  even if that computer is ten years old.</Text>
          <Text style={styles.textRed}>SATA itself has a speed grade, and you will see SATA 2 and SATA 3 in any SSD considered for use, called “SATA II”/“SATA 3Gbps” or “SATA III”/“SATA 6Gbps” respectively. These indicate the maximum possible data transfer rate of the drive, provided that the drive is installed in a PC with a SATA interface that supports the same standard.
          Nowadays, SATA 3.0 is the most versatile form of SSD, with a theoretical transfer speed of 6Gb/s (750MB/s). But since some physical overhead will occur when encoding the data to be transferred, its actual transfer speed is 4.8Gb/s (600MB/s).</Text>
        
          <Text style={styles.textSubTitle}>PCIe SSD</Text>
          <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.technologyx.com/wp-content/uploads/2016/01/Intel-750-PCIe-SSD-1.png'}}/>
          <Text style={styles.textRed}>PCIe SSD is one of the types of SSD hard drives. PCIe SSD refers to a solid-state drive connected to a computer system using a PCIe interface. PCIe SSD has become a new way to increase the speed of solid-state drives (SSD) to servers and storage devices.</Text>
          <Text style={styles.textRed}>PCI Express, formally abbreviated as PCIe or PCI-e, is short for Peripheral Component Interconnect Express. As a high-speed computer expansion bus standard, PCIe can replace the older PCI, PCI-X, and AGP bus standards. In addition, PCIe is a common motherboard interface for computer graphics cards, hard drive, SSD, Wi-Fi, and Ethernet hardware connection.</Text>
    
    
          <Text style={styles.textSubTitle}>M.2 SSD</Text>
          <Image style={styles.pic} resizeMode="contain" source={{uri:'https://cdn.transcend-info.com/products/images/ModelPic/1107/Pp_1TMTS832S-.png'}}/>
          <Text style={styles.textRed}>M.2 SSD also belongs to one of the types of SSD. It was formerly known as NGFF (Next Generation Form Factor). M.2 SSDs are small circuit boards containing flash memory and controller chips, rather than slab-shaped devices containing these chips.
          The shape of M.2 SSD is similar to that of RAM, but it is much smaller and has become a standard configuration in ultra-thin notebook computers, but you will also find them on many desktop motherboards. Many high-end motherboards even have two or more M.2 slots, so you can run the M.2 SSD in RAID.</Text>
    
          <Text style={styles.textSubTitle}>U.2 SSD</Text>
          <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.m2wificards.com/wp-content/uploads/2018/10/u-2-ssd-300x165.png'}}/>
          <Text style={styles.textRed}>In terms of SSD types, U.2 SSD needs to be mentioned. A U.2 SSD is an SSD with a U.2 interface. U.2 (previously known as SFF-8639) is an interface standard defined by the SSD Form Factor Working Group (SFFWG). U.2 is developed for the enterprise market and aims to be compatible with PCI-E, SATA, SATA-E, and SAS interface standards.
          U.2 SSDs look like traditional SATA hard drives. but they utilize a different connector and send data via the speedy PCIe interface, and they're typically thicker than 2.5-inch hard drives and SSDs.</Text>
    
          <Text style={styles.textSubTitle}>NVMe SSD</Text>
          <Image style={styles.pic} resizeMode="contain" source={{uri:'https://shop.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-blue-sn550-nvme-ssd/gallery/500gb/wd-blue-sn550-nvme-ssd-front-500gb.png'}}/>
          <Text style={styles.textRed}>Different types of SSD possess different interfaces. NVMe SSD is an SSD with an NVMe interface. NVM Express (NVMe) is short for Non-Volatile Memory Host Controller Interface Specification (NVMHCIS). It is an open logical device interface specification for accessing non-volatile storage media connected via PCI Express (PCIe) bus.</Text>
          <Text style={styles.textRed}>NVM Express enables host hardware and software to take full advantage of the parallelism possible in modern SSDs. As a result, compared to the previous logical device interface, NVM Express reduces I/O overhead and brings various performance improvements, including multiple long command queues, and reduced latency.</Text>
    
          <Text style={styles.textBrand}>Advantages and Disadvantages of SSDs and HDDs</Text>
          <Text style={styles.textRed}>Hard drives are still around in budget and older systems, but SSDs are now the rule in mainstream systems and high-end laptops like the Apple MacBook Pro, which does not offer a hard drive even as a configurable option. Desktops and cheaper laptops, on the other hand, will continue to offer HDDs, at least for the next few years.</Text>
          <Text style={styles.textRed}>That said, both SSDs and hard drives do the same job: They boot your system, and store your applications and personal files. But each type of storage has its own unique traits. How do they differ, and why would you want to get one over the other?</Text>
          
          <Text style={styles.textBrand}>SSD vs. HDD Pricing</Text>
          <Text style={styles.textRed}>SSDs are more expensive than hard drives in terms of dollar per gigabyte. A 1TB internal 2.5-inch hard drive costs between $40 and $60, but as of this writing, the very cheapest SSDs of the same capacity and form factor start at around $100. That translates into 4 to 6 cents per gigabyte for the hard drive versus 10 cents per gigabyte for the SSD. </Text>
          <Text style={styles.textRed}>The differences are more drastic if you look at high-capacity 3.5-inch hard drives. For example, a 12TB 3.5-inch hard drive that sells for around $300 to $350 can push the per-gigabyte cost below 3 cents.Since hard drives use older, more established technology, they will likely remain less expensive for the foreseeable future. Though the per-gig price gap is closing between hard drives and low-end SSDs, those extra bucks for the SSD may push your system price over budget.</Text>
          
    
          <Text style={styles.textBrand}>SSD vs. HDD Maximum and Common Capacities</Text>
          <Text style={styles.textRed}>Consumer SSDs are rarely found in capacities greater than 2TB, and those are expensive. You're more likely to find 500GB to 1TB units as primary drives in systems.</Text>
          <Text style={styles.textRed}> While 500GB is considered a "base" hard drive capacity for premium laptops these days, pricing concerns can push that down to 128GB or 256GB for lower-priced SSD-based systems. Users with big media collections or who work in content creation will require even more, with 1TB to 8TB drives available in high-end systems. Basically, the more storage capacity, the more stuff you can keep on your PC. Cloud-based storage may be good for housing files you plan to share among your smartphone, tablet, and PC, but local storage is less expensive, and you have to buy it only once, not subscribe to it.</Text>
         
          <Text style={styles.textBrand}>SSD vs. HDD Speed</Text>
          <Text style={styles.textRed}>This is where SSDs shine. An SSD-equipped PC will boot in far less than a minute, often in just seconds. A hard drive requires time to speed up to operating specs, and it will continue to be slower than an SSD during normal use. A PC or Mac with an SSD boots faster, launches and runs apps faster, and transfers files faster. Whether you're using your computer for fun, school, or business, the extra speed may be the difference between finishing on time and being late.</Text>
    
          <Text style={styles.textBrand}>SSD vs. HDD Reliability and Durability</Text>
          <Text style={styles.textRed}>An SSD has no moving parts, so it is more likely to keep your data safe in the event you drop your laptop bag or your system gets shaken while it's operating. Most hard drives park their read/write heads when the system is off, but when they are working, the heads are flying over the drive platter at a distance of a few nanometers. Besides, even parking brakes have limits. If you're rough on your equipment, an SSD is recommended.</Text>
    
          <Text style={styles.textBrand}>SSD vs. HDD Form Factors</Text>
          <Text style={styles.textRed}>Because hard drives rely on spinning platters, there is a limit to how small they can be manufactured. Years back, there was an initiative to make smaller 1.8-inch spinning hard drives, but that stalled at about 320GB, and smartphone manufacturers only use flash memory for their primary storage.</Text>
          <Text style={styles.textRed}>SSDs have no such limitation, so they can continue to shrink as time goes on. SSDs are available in 2.5-inch laptop-drive sizes, but that's only for convenience in fitting within established drive bays. They are increasingly moving, though, to the M.2 form factor discussed above, and these drives come in 42mm, 60mm, 80mm, and 120mm lengths.</Text>
    
          <Text style={styles.textBrand}>SSD vs. HDD Noise, Power, and Lifespan</Text>
          <Text style={styles.textRed}>Even the quietest hard drive will emit a bit of noise when it is in use. (The drive platters spin and the read arm ticks back and forth.) Faster hard drives will tend to make more noise than those that are slower. SSDs make no noise at all; they're non-mechanical.
    
    Plus, an SSD doesn't have to expend electricity spinning up a platter from a standstill. Consequently, none of the energy consumed by the SSD is wasted as friction or noise, rendering them more efficient. On a desktop or in a server, that will lead to a lower energy bill. On a laptop or tablet, you'll be able to eke out more minutes (or hours) of battery life.</Text>
    
          <Text style={styles.textBrand}>SSD vs. HDD Storage: Breaking It Out by User</Text>
          <Text style={styles.textRed}>Hard drives win on price and capacity. SSDs work best if speed, ruggedness, form factor, noise, or fragmentation (technically, a subset of speed) are important factors to you. If it weren't for the price and capacity issues, SSDs would be the hands-down winner.</Text>
    
    
    
          <Text style={styles.textBrand}>SSD or HDD</Text>
          <Image style={styles.pic} resizeMode="contain" source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-XWN5yLHTKvDBIETWbQKoj4tbmPk1-JfxA&usqp=CAU'}}/>
          <Text style={styles.textRed}> If you are simply looking for a cheap way to store files, then you can still get a great deal with HDDs. They offer lots of terabytes at affordable prices.
          But for your “primary” drive (your operating system, application programs, and most-used files), you should upgrade to an SSD, because it offers dramatically improved speeds.</Text>
          <Text style={styles.textRed}>But regardless of whether you are using an SSD or HDD, you will need to keep your drive clean. Your operating system requires a lot of disk space to operate and running low on space can cause extreme slowdowns and even crashes.</Text>
    
          <View style={styles.space} />
          <Icon2.Button backgroundColor="black" name = "navigate-before" size={30} onPress={() => navigation.navigate("GPU")} ></Icon2.Button> 
          <View style={styles.space} />
          <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
          <View style={styles.space} />
           <Icon2.Button backgroundColor="black"name = "navigate-next" size={30} onPress={() => navigation.navigate("Power Supply")} ></Icon2.Button>
        </View>
        </ScrollView>
        </ImageBackground>
      )
    }
    
  
function howScreen({navigation}){
  return(

    
    <ImageBackground resizeMode="cover" source={{uri:'https://wallpaper.dog/large/20395916.jpg'}} style={styles.image}>
      <ScrollView style={styles.scrollView1} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} >
      <View style={styles.container}>
      
      <Text style={styles.textBrand}>Building a PC</Text>
      <View style={styles.space} />
      <Text style={styles.textBrand}>Step 1: PC Build Tools</Text>
      <Text style={styles.textRed}>The first thing you need to do to prepare is gather the tools you need to complete the build.</Text>
      <Text style={styles.textRed}>Mostly, you only need a workspace and screwdrivers in building PCs.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/s4-a5-1-tools-rwd.jpg.rendition.intel.web.1648.927.jpg'}}/>

      <Text style={styles.textBrand}>Step 2: PC Cases</Text>
      <Text style={styles.textRed}>The main thing to keep in mind when picking a case is where you're going to put the computer. Your PC's final location will dictate how big you can (or cannot) go, and it will also help determine whether various premium case features are worth splurging on. You probably don't want to pay for a tempered glass side panel if the computer will be hidden under your desk, for example.</Text>
      <Text style={styles.textRed}>Cases typically come in three sizes: Full-tower, mid-tower, and mini-tower. These are very general categories (case sizes are not standardized among manufacturers), but they're based on motherboard size.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/s4-a5-2-case-sizes-rwd.jpg.rendition.intel.web.1648.927.jpg'}}/>
      <Text style={styles.textBrand}>Step 3: Install CPU</Text>
      <Text style={styles.textRed}>The first (and very important) step is to find flat surface to place your motherboard—either a tabletop or a box. Intel and AMD CPUs also have slightly different ways of attaching to the motherboard. For Intel CPUs, you use a small lever to open the PCU retention bracket to unveil the motherboard socket. The CPU has two noticeable notches along the edges and an arrow in one of the corners to guide you. Simply match the notches and the arrow in the proper direction and let the CPU “settle” or “sit” into socket. Secure the bracket back into place and press down the lever to finish locking the CPU down.</Text>
      <Text style={styles.textRed}>AMD CPUs are much simpler to install onto the motherboard. First, flip the CPU lever from the socket and gently lower the CPU into the socket. There is an engraved triangle that should match up to another triangle on the socket. Lightly place the CPU down and lower the lever again to fully lock down the chip in place.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/s4-a5-3-cpu-process-rwd.jpg.rendition.intel.web.1648.927.jpg'}}/>
      <YoutubePlayer height={350}  width={400}videoId={"pCsJbrfdehE"} />
      <YoutubePlayer height={350}  width={400}videoId={"IP7HsNWSY4o"} />
      <Text style={styles.textBrand}>Step 4: Install CPU Cooling</Text>
      <Text style={styles.textRed}>The CPU cooler should be the next component to place onto the motherboard. Intel and AMD both offer stock coolers, but there are also third-party aftermarket coolers that may require additional instructions. For Intel stock coolers, the heatsink below the fan already comes with thermal paste – meaning you won’t need to buy a separate thermal paste. Gently situation the cooler on the CPU and press down on the push pins through the motherboard. Twist the pins clockwise (following the arrow) to lock the heatsink and cooler in place.</Text>
      <Text style={styles.textRed}>Installing an AMD cooler is very similar—only difference is that you would need to screw on the cooler with a screwdriver and bolts. On some motherboards, there could be plastic notches already screwed in place for clip-on type heat sinks. AMD’s flagship Ryzen CPUs all come with stock coolers that have to be screwed in, meaning you have to take out the plastic notches. Afterwards, line up the four corners with the holes on the motherboard and screw the bolts tightly.</Text>
      <Text style={styles.textRed}>Some coolers come with thermal paste pre-applied to the conductive material (which sits on the CPU) and some coolers do not. If your cooler does not have pre-applied thermal paste, you will need to manually apply thermal paste before you seat the cooler. To apply thermal paste, squeeze a small dot (no larger than a grain of rice) onto the middle of the CPU. Then, place the cooler on the CPU — the pressure will spread the thermal paste adequately.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/s4-a5-5-screw-in-cpu-rwd.jpg.rendition.intel.web.1648.927.jpg'}}/>
      <YoutubePlayer height={350}  width={400}videoId={"NMn-9V3WbCw"} />
      <Text style={styles.textBrand}>Step 5: Install memory (RAM)</Text>
      <Text style={styles.textRed}>The RAM slots on the motherboard is adjacent to the CPU socket, and it’s easily noticeable as most motherboards will have anywhere from two to four parallel slots with plastic retention levers on each end. First, push the levers down to free the slot for installation and then line up the notches on the slot with those on the memory sticks. Push down on the stick to hear a click and make sure the levers are back in place.</Text>
      <Text style={styles.textRed}>If you’re only using two or three RAM sticks, but have more slots available, refer back your own motherboard manual to make sure which slots need to be filled first. It’s important to place correctly because incorrect slot selection can cause a slight hit to performance.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/s4-a5-6-insert-cip-rwd.jpg.rendition.intel.web.1648.927.jpg'}}/>
      <YoutubePlayer height={350}  width={400}videoId={"VA-eGIitpsw"} />
      <Text style={styles.textBrand}>Optional:</Text>
      <Text style={styles.textRed}>You may want to perform a quick test run of your components just to make sure they all work. This test is much more difficult to perform (and troubleshoot) once everything is installed in the chassis. To do this, install GPU and connect everything to the power supply (if you don't know how to install the GPU, see section below). Make sure the power supply is connected to the motherboard (both CPU 8pin and 24pin) and GPU, then plug it in and turn it on.</Text>
      <Text style={styles.textRed}>You should now be able to tell if any of your components are dead or otherwise malfunctioning. If your motherboard is blinking lights or beeping at you, it's probably trying to tell you something. Some motherboards have a post code display (two digits) to help you identify what the problem is. To figure out what it's trying to tell you, consult your user manual. If your motherboard has no post code display, connect a display to the GPU and see if your system "posts" or starts up and displays the motherboard's logo.</Text>
      <Text style={styles.textRed}>When you are finished with the test run, turn off the power supply and wait for any LEDs on the motherboard to go dark to ensure there's no residual power in the system. Then, uninstall the GPU and unplug all power cables before proceeding with the next step.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://abecerah.com/wp-content/uploads/2021/03/9.png'}}/>
      <Text style={styles.textBrand}>Step 6: Mount Power Supply</Text>
      <Text style={styles.textRed}>Take a look at your case and figure out where the PSU is supposed to go (probably on the bottom, near the back) and how it can be oriented. Ideally, you want to orient the PSU so that its fan faces outside the case (via a vent). If your case has a vent on the bottom, you can mount the PSU upside down, so long as the bottom vent will receive decent airflow when the PC is finished.</Text>
      <Text style={styles.textRed}>If your case has no vents, mount the PSU so the fan is facing up (into the case) and make sure it has enough clearance. Attach the PSU to the case using the four screws that came with the PSU.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/s4-a5-8-insert-psu-rwd.jpg.rendition.intel.web.1648.927.jpg'}}/>
      <YoutubePlayer height={350}  width={400}videoId={"VOsrsHC4CMk"} />
      <Text style={styles.textBrand}>Step 7: Install Motherboard</Text>
      <Text style={styles.textRed}>After installing the CPU, RAM, and cooler on the motherboard, it’s time to attach the motherboard itself inside the case. The first step is correctly fitting the motherboard’s I/O plate (input/output) on the case. You’ll have to adjust the motherboard to match the ports with the corresponding I/O holes. Next, align the motherboard’s corner holes to the case’s pre-drilled holes in the back. Gently attach the motherboard to the case using the threaded brass standoffs and tighten the screws one by one.</Text>
      <Text style={styles.textRed}>If your motherboard came with an unattached I/O shield — a rectangular sheet of metal with cutouts for the motherboard's ports — you should first snap it into place in the back of your case (make sure it's oriented correctly). I/O shields usually have sharp edges, so watch your fingers.</Text>
      <Text style={styles.textRed}>Connect the power supply to the motherboard. There are two main connections — an 8-pin CPU connector toward the top of the board and a 24-pin connector from the side.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/s4-a5-9-screw-in-motherboard.jpg.rendition.intel.web.1648.927.jpg'}}/>
      <YoutubePlayer height={350}  width={400}videoId={"hrv7_gl4MAQ"} />
      <Text style={styles.textBrand}>Step 8: Install GPU</Text>
      <Text style={styles.textRed}>Find the PCIe* x16 slot on your motherboard. It will be the longest PCIe* slot and may be a different color than the others. If your motherboard has more than one PCIe* x16 slot, check the user manual to see if one slot needs to be prioritized. If any slot can be used, determine which slot you'll be using based on where other components are placed — you want your GPU to have some breathing room.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/s4-a5-10-motherboard-pins-rwd.jpg.rendition.intel.web.1648.927.jpg'}}/>
      <Text style={styles.textRed}>Remove the GPU from its antistatic packaging and carefully align it with both the rear retention bracket and the slot itself, and then gently push it into the PCIe* x16 slot (you may hear a click). The PCIe* tab on the motherboard may move into a locked position should you need to reseat the GPU.</Text>
      <Text style={styles.textRed}>Once the GPU is fully seated, secure it to the back of the case using one or two screws. If your GPU requires auxiliary power connectors, connect it to the power supply.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/s4-a5-11-insert-fans-rwd.jpg.rendition.intel.web.1648.927.jpg'}}/>
      <YoutubePlayer height={350}  width={400}videoId={"YVbjl69z3HE"} />
      <Text style={styles.textBrand}>Step 9: Install Storage</Text>
      <Text style={styles.textRed}>Whether you’re opting for hard disk drives (HDD) or solid-state drives (SSD), you’ll need at least one to store your PC system and files. Most cases will come with hard drive bays that will also fit SSDs too. Most common sizes for both drives are 3.5”, but different cases will also have bays catering to other sizes. Also follow up with the case specifications to make sure it has enough drive bays that fit your hardware. For instance, the Antec ATX Mid Tower Case has 6 internal 3.5” drive bays and 3 external 5.25” drive bays, meaning you’ll have more than enough space to fit your storage hardware.</Text>
      <Text style={styles.textRed}>Installing itself is very straightforward—simply slide the drive into the storage bay. You can also use screws to fully secure the drives to prevent them from possibly sliding off. SSDs can also come in different form factors, such as the M.2 SSD. These are internally mounted storage options that go directly on the motherboard as an expansion card. First, make sure to check if you’re getting a motherboard with M.2 slots and follow the instructions to see where the storage expansion slot is located.</Text>
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/s4-a5-12-plugs-rwd.jpg.rendition.intel.web.1648.927.jpg'}}/>
      <YoutubePlayer height={350}  width={400}videoId={"CkgbNx0i6D8"} />
      <Text style={styles.textBrand}>Step 10: Install Operating System</Text>
      <Text style={styles.textRed}>If you haven’t already prepared your operating system (OS) on a USB flash drive, now is the time to do so. Plug in the USB flash drive that contains your OS, as well as a monitor, mouse, and keyboard, and turn on your PC.</Text>
      <Text style={styles.textRed}>The first screen you see will tell you to press a key to enter the system setup or BIOS. Press the key to open BIOS. (If the screen flashes off too quickly for you to see the key, consult your motherboard's user manual.)</Text>
      <Text style={styles.textRed}>First, you'll want to check to makes sure your components are all installed and being recognized. Find the page in BIOS that shows your PC's system info (different motherboards have different BIOS setups, but you should be able to find a screen that gives you this information) and check to make sure the system is recognizing everything you've installed so far.</Text>  
      <Text style={styles.textRed}>Next, poke around BIOS until you find the Boot page (may be called "Boot Order" or "Boot Priority"). Change the boot order so that your flash drive is first and the drive you want to install your OS on (if you're using an SSD as a boot drive, you will want to install the OS here) is second.</Text>  
      <Text style={styles.textRed}>Restart your computer. Your computer will boot from the USB and the OS installer will pop up. Follow the instructions to finish the installation.</Text>  
      <Image style={styles.pic} resizeMode="contain" source={{uri:'https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/s4-a5-13-install-os-rwd.jpg.rendition.intel.web.1648.927.jpg'}}/>
      <YoutubePlayer height={350}  width={400}videoId={"MfwjISmkEJM"} />
      
      {/* <Icon2.Button name = "navigate-before" size={30} onPress={() => navigation.navigate("About")} ></Icon2.Button>  */}
      <View style={styles.space} />
      <Icon.Button name = "home" size={30} onPress={() => navigation.navigate("Home")}></Icon.Button>
      <View style={styles.space} />

    </View>
    </ScrollView>
    </ImageBackground>
  )
}





//third
export default function App() {  
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName="Home" drawerStyle={{
        backgroundColor: '#111',
      }}
      drawerContentOptions={{
        activeTintColor: '#fff', /* font color for active screen label */
        activeBackgroundColor: '#68f', /* bg color for active screen */
        inactiveTintColor: '#f5be33', /* Font color for inactive screens' labels */
      }}>
        <Drawer.Screen name="Home" component={HomeStackScreen} options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="md-home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}/>
        <Drawer.Screen name="About" component={AboutStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="md-person-circle-outline"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>
        <Drawer.Screen name="CPU" component={CPUStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="ios-hardware-chip-outline"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>
       <Drawer.Screen name="Motherboard" component={motherBoardStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="ios-desktop-outline"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>
       

        <Drawer.Screen name="RAM" component={RAMStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="ios-desktop-outline"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>
        <Drawer.Screen name="GPU" component={GPUStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="ios-desktop-outline"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>
       <Drawer.Screen name="Storage" component={storageStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="ios-desktop-outline"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>
       
       <Drawer.Screen name="Power Supply" component={powerSupplyStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="ios-desktop-outline"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>
       

       <Drawer.Screen name="Cooling System" component={CSStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="ios-desktop-outline"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>
       
       <Drawer.Screen name="Gaming Peripherals" component={gamingStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="ios-desktop-outline"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>

        <Drawer.Screen name="OS" component={OSStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="ios-logo-windows"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>

        <Drawer.Screen name="Contact" component={ContactStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="md-information-circle-outline"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>
        <Drawer.Screen name="How To Build?" component={howStackScreen} options={{
         drawerIcon: ({focused, size}) => (
           <Icon
             name="ios-construct-outline"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
           />
         ),
       }}/>
      </Drawer.Navigator>

    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({

  container:{

    textAlign:"center",
    padding:10,
    alignItems:"center",
    flex: 1,
    flexDirection: "column",

  },
  container2:{
    backgroundColor:"#3eb489",
    textAlign:"center",
    padding:25,
    alignItems:"center",
    flex: 1,
    flexDirection: "column",

  },
  textBrand:{
    color:"#f5be33",
    fontSize:40,

    textAlign:"center",
  },

  textRed:{
    color:"#DCDCDC",
    fontSize:20,
    margin: 10
  },
  textBrand2:{
    color:"#FAD6A5",
    fontSize:40,
  },
  textSubTitle:{
    fontWeight:'bold',
    color:"#f5be33",
    fontSize:16

  },
  textRed2:{
    color:"black",
    fontSize:20,
    margin: 10
  },


  
  pic:{
    width: 300,
    height: 300,
 
  },
  buttonLogin: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    width: 200,
    margin: 10,
    borderRadius: 10,
  },

  buttonRegister: {
    alignItems: "center",
    backgroundColor: "#f23f51",
    padding: 10,
    width: 200,
    margin: 10,
    borderRadius: 10
  },
  buttonText:{
    color:"white",
  },
  textMore:{
    color:"black",
    fontSize:20,
    textDecorationLine: 'underline'
  },


    space: {
      width: 20, // or whatever size you need
      height: 20,
    },
    sliderContainer:{
      height:200,
      width:'100%',

      justifyContent:'center',
      alignSelf:'center',
      borderRadius:8,
    },
    slide:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'transparent',
      borderRadius:8,
    },
    sliderImage:{
      height:'100%',
      width:'100%',
      alignSelf:'center',
      borderRadius:8,
    },
    homeSCrollview:{
      alignItems:'center',
      flexDirection:'row',
      backgroundColor:'#D5D5D5',
      marginHorizontal:10,
      borderRadius:25,
      paddingVertical:5,
      paddingHorizontal:15,
    },
    smallPic:{height:100,width:100,},
    smallPicDesc:{fontSize:20, paddingLeft:10,},
    headerPic:{ width: 50, height: 50, },
    input:{    
      backgroundColor:"white",
      height: 40,
      margin: 12,
      width: 300,
      borderRadius:5,
     
    },
    inputConcern:{    
      backgroundColor:"white",
      height: 100,

      margin: 12,
      width: 300,
      borderRadius:5,

     
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
});
