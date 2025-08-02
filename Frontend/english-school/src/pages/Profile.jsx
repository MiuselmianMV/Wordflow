import { useEffect, useState } from 'react';
import auth from '../api/auth';

const Profile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    auth.getProfile().then(res => setData(res.data));
  }, []);

  return data ? (
    <div>
      <h2>Профиль</h2>
      <p>Email: {data.email}</p>
      <p>Роль: {data.role}</p>
    </div>
  ) : (
    <p>Загрузка...</p>
  );
};

export default Profile;
