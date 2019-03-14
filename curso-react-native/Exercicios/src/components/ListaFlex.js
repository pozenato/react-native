import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    {id: 1, nome: 'João', nota: 10.0},
    {id: 2, nome: 'Maria', nota: 7.0},
    {id: 3, nome: 'Carla', nota: 3.7},
    {id: 4, nome: 'Bruno', nota: 8.4},
    {id: 5, nome: 'Gabriella', nota: 6.9},
    {id: 6, nome: 'Raquel', nota: 5.0},
    {id: 7, nome: 'Pedro', nota: 4.9},
    {id: 8, nome: 'Gustavo', nota: 7.8},
    {id: 9, nome: 'Mayara', nota: 8.8},
    {id: 10, nome: 'Everton', nota: 6.0},
    {id: 11, nome: 'Kelvin', nota: 5.1},
    {id: 12, nome: 'Francisco', nota: 3.9},
    {id: 13, nome: 'Elena', nota: 9.0},
    {id: 14, nome: 'Rute', nota: 8.2},
    {id: 15, nome: 'Davi', nota: 7.4},
    {id: 16, nome: 'Natalia', nota: 8.1},
    {id: 17, nome: 'Carmem', nota: 6.4},
    {id: 18, nome: 'Jose', nota: 9.6},
    {id: 19, nome: 'Julio', nota: 5.9},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }} >Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}








