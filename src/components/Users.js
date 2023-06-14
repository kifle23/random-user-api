import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../stores/users/usersSlice';
import emailSvg from '../assets/email.svg';
import locaSvg from '../assets/location.svg';
import phoneSvg from '../assets/phone.svg';
import './Users.css';

const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }
  console.log(users);
  return (
    <>
      {users.map((user) => (
        <div className="card">
          <div className="left">
            <div
              className="img"
              style={{ backgroundImage: ` url(${user.picture.large})   ` }}
            ></div>
            <div className="icon-box">
              <img src={emailSvg} alt="email" className=" icon" />

              <img src={phoneSvg} alt="location" className=" icon" />

              <img src={locaSvg} alt="phone" className=" icon" />
            </div>
          </div>
          <div className="right">
            <p className="name">
              {' '}
              {user.name.title} {user.name.first} {user.name.last}{' '}
            </p>
            <p className="email">{user.email} </p>
            <p className="phone">{user.cell}</p>
            <p className="loca">
              {user.location.city}-{user.location.country}
            </p>
            <div className="age">
              <p>Age : {user.dob.age}</p>
              <p className="register">
                Register Date : {user.registered.date.slice(0, 10)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Users;
