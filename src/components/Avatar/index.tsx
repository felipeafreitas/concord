import { AvatarComponent } from './styles';

type Props = {
  name: string;
  image?: string;
};

function Avatar({ name, image }: Props) {
  return <AvatarComponent name={name} marginRight='10px' src={image} />;
}

export default Avatar;
