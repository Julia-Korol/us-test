import { useSelector } from 'react-redux';
import CenteredWrapper from '../../components/centered-wrapper/CenteredWrapper';
import './Profile.css';

function Profile() {
  const userName = useSelector((state) => state.user.name);

  return (
    <CenteredWrapper>
      <div className="profile__container">
        <div className="profile__card">
          <img
            className="profile__icon"
            src="https://img.icons8.com/material/96/000000/administrator-male--v1.png"
            alt="user icon"
          />
          <h1 className="profile__title">{userName}</h1>
        </div>
      </div>
    </CenteredWrapper>
  );
}

export default Profile;
