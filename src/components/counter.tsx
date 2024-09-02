import {View, Text, StyleSheet} from 'react-native';
import {useTypedSelector} from '../hooks/redux';
import selectorService from '../services/selectors';

const CounterCard = ({count, title}: {count: number; title: string}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const Counter = () => {
  const selector = useTypedSelector(selectorService.getAttempts);

  return (
    <View style={styles.container}>
      <CounterCard count={selector.accessDenied} title={'Failed'} />
      <CounterCard count={selector.accessGranted} title={'Success'} />
      <CounterCard
        count={selector.accessDenied + selector.accessGranted}
        title={'Total'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    width: '30%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 1,
    borderRadius: 10,
  },
  count: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
});

export default Counter;
