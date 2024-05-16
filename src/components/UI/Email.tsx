import { changeEmail } from 'redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthType } from 'interfaces/userAuth';
import { Button } from '@nextui-org/button';
import { sharingInformationService } from 'features/services/rx/sharing-information.service';

const Email = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: { user: userAuthType }) => state.user.email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmail(e.target.value));
  };

  const handleClick = () => {
    sharingInformationService.setSubject('ernesto');
  };

  return (
    <>
      <Button onClick={handleClick}>Press me</Button>
      <input type="email" value={email} placeholder="email" onChange={handleChange} />;
    </>
  );
};

export default Email;
