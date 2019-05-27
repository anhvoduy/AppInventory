import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    /* first column */
    repoCell: {
        width: 100,
        alignItems: 'center'
    },
    repoCellImage: {
        width: 80,
        height: 80
    },
    repoCellLabel: {
        textAlign: 'center'
    },
    
    /* second column */
    infoCell: {
        width: 200,
    },
    infoCellLabel: {
        textAlign: 'left',
        marginTop: 5,
    },
    
    /* third column */
    likedCell: {
        width: 100,
        alignItems: 'center',
    },
    likedCellLabel: {
        textAlign: 'center',
    }
});

export default styles;