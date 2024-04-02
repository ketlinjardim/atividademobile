import { View,Text,TouchableOpacity, Image } from "react-native"
import {estile} from "./styles"

export default function Card({name}){
    return(

        <View >
            <View>
            <View style = {estile.container}>
               <Image  source={require('../../assets/favicon.png')} />
              <Text style = {estile.textol}>
                {name}
              </Text>
              <TouchableOpacity style ={estile.excluir}>
                <Text style={estile.minimizar}>
                    -
                </Text>
              </TouchableOpacity>
            </View>
            </View> 
         
        </View>
       
    )
}