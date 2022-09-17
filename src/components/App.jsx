import { ThemeProvider } from 'styled-components';
import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistics';
import { Frendlist } from './Frendlist/Frendlist';
import { Transaction } from 'Transaction/Transaction';
import { theme } from './commonStyle/Thema';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ThemeProvider theme={theme}>
        <Profile data={user} />
        <Statistic stat={data} title="Upload Stats" />
        <Frendlist data={friends} />
        <Transaction data={transactions} />
      </ThemeProvider>
    </div>
  );
};
