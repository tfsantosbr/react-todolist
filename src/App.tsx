import Text from './components/text';
import CheckIcon from './assets/icons/check.svg?react';
import PencilIcon from './assets/icons/pencil.svg?react';
import PlusIcon from './assets/icons/plus.svg?react';
import SpinnerIcon from './assets/icons/spinner.svg?react';
import TrashIcon from './assets/icons/trash.svg?react';
import XIcon from './assets/icons/x.svg?react';
import Icon from './components/icon';
import { Badge } from './components/badge';
import Button from './components/button';
import ButtonIcon from './components/button-icon';
import InputText from './components/input-text';

export default function App() {
  return (
    <div className='grid gap-3'>
      <div className='class'>
        <Text as='p'>Olá mundo</Text>
        <Text as='p' variant='body-md-semibold'>
          Olá mundo
        </Text>
        <Text as='p' variant='body-sm-semibold'>
          Olá mundo
        </Text>
      </div>

      <div className='flex gap-1'>
        <Icon svg={TrashIcon} className='fill-green-base' />
        <Icon svg={SpinnerIcon} className='fill-pink-base' animation='spin' />
        <Icon svg={CheckIcon} className='fill-green-light' />
        <Icon svg={PencilIcon} className='fill-green-dark' />
        <Icon svg={PlusIcon} className='fill-pink-light' />
        <Icon svg={XIcon} className='fill-pink-dark' />
      </div>

      <div className='flex gap-1'>
        <Badge variant='secondary'>5</Badge>
        <Badge variant='primary'>2 de 5</Badge>
      </div>

      <div className='flex gap-1'>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>

      <div className='flex gap-1'>
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant='secondary' />
        <ButtonIcon icon={TrashIcon} variant='tertiary' />
      </div>

      <div className='flex gap-4'>
        <InputText placeholder='Add Task' />
        <InputText placeholder='Disabled' disabled />
      </div>
    </div>
  );
}
