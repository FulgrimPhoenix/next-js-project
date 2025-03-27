import { Button, TextField, Title } from "@/ui";
import styles from "./Comments.module.scss";
import cn from "classnames";

const Comments = () => {
  return (
    <section className={cn(styles.comments)}>
      <Title tag="h3">Комментарии</Title>
      <TextField variant="text" placeholder="Имя" style={{ width: "80%" }} />
      <TextField
        variant="textarea"
        placeholder="Комментарий"
        style={{ width: "80%" }}
      />
      <Button>Отправить</Button>
    </section>
  );
};

export default Comments;
