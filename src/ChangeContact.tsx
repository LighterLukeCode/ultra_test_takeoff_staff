import React from "react";
import { useDispatch } from "react-redux";
import { editContact } from "./redux/contactSlice";

type ChangeContactProps = {
  id: string;
  setIsChangeOpen: (isOpen: boolean) => void;
  title: string;
};

const ChangeContact: React.FC<ChangeContactProps> = ({ id, setIsChangeOpen, title }) => {
  const [changeTitle, setChangeTitle] = React.useState(title);
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editContact({ id, title: changeTitle }));
    setIsChangeOpen(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={event => setChangeTitle(event.target.value)}
        value={changeTitle}
        placeholder="Введите новое имя..."
      />
      <button type="submit">подтвердить</button>
    </form>
  );
};

export default ChangeContact;