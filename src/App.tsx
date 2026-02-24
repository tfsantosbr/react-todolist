import Text from "./components/text";
import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import Icon from "./components/icon";
import { Badge } from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";
import Skeleton from "./components/skeleton";

export default function App() {
  return (
    <>
      <Container>
        <div className="grid gap-3">
          <div className="class">
            <Text as="p">Olá mundo</Text>
            <Text as="p" variant="body-md-semibold">
              Olá mundo
            </Text>
            <Text as="p" variant="body-sm-semibold">
              Olá mundo
            </Text>
          </div>

          <div className="flex gap-1">
            <Icon svg={TrashIcon} className="fill-green-base" />
            <Icon
              svg={SpinnerIcon}
              className="fill-pink-base"
              animation="spin"
            />
            <Icon svg={CheckIcon} className="fill-green-light" />
            <Icon svg={PencilIcon} className="fill-green-dark" />
            <Icon svg={PlusIcon} className="fill-pink-light" />
            <Icon svg={XIcon} className="fill-pink-dark" />
          </div>

          <div className="flex gap-1">
            <Badge variant="secondary">5</Badge>
            <Badge variant="primary">2 de 5</Badge>
            <Badge loading />
          </div>

          <div className="flex gap-1">
            <Button icon={PlusIcon}>Nova tarefa</Button>
          </div>

          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} />
            <ButtonIcon icon={TrashIcon} variant="secondary" />
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon icon={TrashIcon} loading />
          </div>

          <div className="flex gap-4">
            <InputText placeholder="Add Task" />
            <InputText placeholder="Disabled" disabled />
          </div>

          <div className="flex gap-4">
            <InputCheckbox />
            <InputCheckbox loading />
            <InputCheckbox defaultChecked />
            <InputCheckbox disabled />
            <InputCheckbox defaultChecked disabled />
          </div>

          <div className="flex gap-4">
            <Card>No padding</Card>
            <Card size="md">With padding</Card>
            <Card size="md" as="section">
              As section
            </Card>
          </div>

          <div className="flex gap-4">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-32" rounded="sm" />
            <Skeleton className="h-8 w-8" rounded="full" />
          </div>
        </div>
      </Container>

      <Container className="bg-gray-100 p-2">
        <Text as="p">Container md (default)</Text>
      </Container>
      <Container as="section" className="bg-gray-200 p-2">
        <Text as="p">Container as section</Text>
      </Container>
    </>
  );
}
