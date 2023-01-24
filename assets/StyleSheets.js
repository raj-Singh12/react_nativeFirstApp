import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    Row: {
        display: 'flex',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    input: {
        marginRight: 10,
        borderBottomColor: '#000',
        padding: 15,
        borderWidth: 1,
        height: 40
    },
    hr: {
        marginTop: 40,
        marginBottom: 40,
        width: '100%',
        borderWidth: 1,
        borderBottomColor: '#000',
    },
    GoalTitle: {
        color: 'red'
    }
});