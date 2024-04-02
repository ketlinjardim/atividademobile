import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from "react-native"
import { estilo } from "./styles"
import Card from "../../components/card"
export default function Home(){

    const Lista = ["ketlin","bruno","yas","lele", "keket","babu","haha"]

    return(
        <View style = {estilo.tela}>

            <View>

                <View style ={estilo.cabecalho}>

                   
                    <View style={estilo.forai}>
                        <TextInput style = {estilo.input}>
                            BABALU
                        </TextInput>
                    </View>
                    <TouchableOpacity style ={estilo.botaolupa}>
                    <Image source={require('../../assets/procurar.png')} style={estilo.imglupa}  />
                    </TouchableOpacity>



                </View>
            </View>

            <View style={estilo.tela2}>
            <Text style={estilo.titulo}>MY LIST</Text>
            <Text style ={estilo.sutitulo}> Adicine itens a sua lista</Text>
            <View style={estilo.form}>
                <TextInput style={estilo.inputtext} />
                <TouchableOpacity style={estilo.botao}>
                    <Text  style={estilo.adicionar}>
                        +
                    </Text>
                </TouchableOpacity>
               
            </View>
          
            </View>
             <FlatList
           data={Lista}
           keyExtractor={item => item}
           renderItem={({item} )=>(
            <Card key={item} name={item}/>
           )} 

           style ={estilo.cards}
          
           />
        </View>
    )
}