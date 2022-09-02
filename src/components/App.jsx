import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';
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
      <Profile data={user} />
      <Statistic stat={data} title="Upload Stats" />
    </div>
  );
};
