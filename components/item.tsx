const Item = (props) => {
    return (
        <View>
            <Image source={require('../assets/images/cursor.png')}/>
            {props.name} {props.cost} {}
        </View>
    )
}
export default Item