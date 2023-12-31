import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import ResultIMC from "./Resultimc";
import styles from "./style";
export default function Form(){

const [height, setHeight]=  useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("preencha o peso e altura");
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")
}

    return(
      <View style={styles.formContext}> 
        <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            />
            
            <Text>Peso</Text>
            <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.656"
            keyboardType="numeric"
            />

            <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() =>{
                    validationImc()
                }}
                >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
            <View>
                <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
            </View>
        </View>
      </View>  
    );
}