import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    forntSize: 15,
    headerRation: 0.15,
    difficultLevel: 0.1,
    getColumnsAmout() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const borderHeight = totalHeight * (1 - this.headerRation)
        return Math.floor(borderHeight / this.blockSize)
    }
}

export default params