import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput
} from 'react-native';

import ServiceURL from '../Common/Service'

export default class BookList extends Component{
    constructor(){
        super();
        this.state = {
            books:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            })
        }
        this.fetchData();
    };

    fetchData(){
        fetch(ServiceURL.bookRead)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                this.setState({
                    books:this.state.books.cloneWithRows(responseData.collections)
                })
            })
            .done();
    };

    renderBookList(item){
        return(
            <View style={styles.item}>
                <View style={styles.itemImage}>
                    <Image
                        style={styles.image}
                        source={{uri:item.book.images.large}} />
                </View>
                <View style={styles.itemContent}>
                    <Text style={styles.itemTitle}>
                        {item.book.title}
                    </Text>
                    <Text style={styles.itemMeta}>
                        {item.book.author}
                    </Text>
                    <Text style={styles.itemMeta}>
                        {item.book.publisher}
                    </Text>
                    <Text style={styles.itemScore}>
                        豆瓣评分：{item.book.rating.average}
                    </Text>
                </View>
            </View>
        );
    }

    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.search}>
                    <TextInput placeholder="请输入图书的名称" style={styles.input} />
                    <TouchableOpacity style={styles.btn} onPress={this._search}>
                        <Text style={styles.btnText}>搜索</Text>
                    </TouchableOpacity>
                </View>
                <ListView
                    dataSource={this.state.books}
                    renderRow={
                        this.renderBookList.bind(this)}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#F5FCFF',
    },
    search: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 45,
        flexDirection: 'row'
    },
    input:{
        borderWidth: 1,
        height:35,
        borderColor:'#ccc',
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        paddingLeft:5,
        flex: 8
    },
    btn: {
        height:35,
        width: 50,
        backgroundColor: '#3377aa',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2
    },
    btnText: {
        color: 'rgba(255,255,255,0.9)',
        letterSpacing: 3,
    },
    item:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'rgba(100,53,201,0.1)',
        paddingBottom:6,
        paddingTop:6,
        flex:1,
    },
    image:{
        height:96,
        width:74,
        margin:6,
    },
    itemTitle:{
        fontSize:14,
        fontFamily:'Helvetica Neue',
        fontWeight:'500',
        color:'#3377aa',
        marginBottom:16,
    },
    itemContent:{
        flex:1,
        marginLeft:13,
        marginTop:6,
    },
    itemMeta:{
        fontSize:12,
        color:'#666666',
        marginBottom:12,
    },
    itemScore:{
        marginTop:10,
        color:'#3377aa',
        fontSize:13,
    },
});

// AppRegistry.registerComponent('BookList', () => BookList);
