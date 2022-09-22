import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { Transaction } from 'components/Transactions/Transactions';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
export const App = theme => {
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
      <Profile data={user} />
      <Statistic stat={data} title="Upload Stats" />
      <Friends data={friends} />
      <Transaction data={transactions} />
    </div>
  );
};
