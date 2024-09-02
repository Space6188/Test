import {ICharacter} from '../../types/ICharacter';

const userDTO = (user: ICharacter) => ({
  id: user.id,
  name: user.name,
  image: user.image,
});

export default userDTO;
