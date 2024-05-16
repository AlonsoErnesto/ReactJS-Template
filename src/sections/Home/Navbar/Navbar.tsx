import { useSelector } from 'react-redux';
import { userAuthType } from '@interface/';
import Email from 'components/UI/Email';
import { useEffect } from 'react';
import { sharingInformationService } from 'features/services/rx/sharing-information.service';

const Navbar = () => {
  const user = useSelector((state: { user: userAuthType }) => state.user);
  const subscription$ = sharingInformationService.getSubject();
  useEffect(() => {
    subscription$.subscribe((data: any) => {
      console.log(data);
    });
  }, []);

  return (
    <header>
      <h1>Redux</h1>
      <Email />
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Username: {user.username}</li>
      </ul>
    </header>
  );
};

export default Navbar;
