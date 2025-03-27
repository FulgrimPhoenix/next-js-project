"use client";

import { Button, Divider, Paragraph, Tag, TextField, Title } from "@/ui";
import styles from "./Comments.module.scss";
import cn from "classnames";
import useCommentStore from "@/store/useCommentStore";
import { useState } from "react";
import { IComment } from "@/types/comments.types";

const Comments = () => {
  const [values, setValues] = useState<Omit<IComment, "id">>({
    name: "",
    email: "example@mail.ru",
    text: "",
  });
  const { comments, addComment } = useCommentStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAddComment = () => {
    addComment(values.name, values.email, values.text);
    setValues({
      name: "",
      email: "example@mail.ru",
      text: "",
    });
  };

  return (
    <section className={cn(styles.comments)}>
      <Title tag="h3">Комментарии</Title>
      <div className={cn(styles["comments-list"])}>
        {comments.map((el, i) => (
          <div className={cn(styles["comment"])} key={i}>
            <div className={cn(styles["tag-bar"])}>
              <Tag color="accent">{el.name}</Tag>
              <Divider variant="md" />
              <Tag color="ghost">{el.email}</Tag>
            </div>
            <Paragraph size="md">{el.text}</Paragraph>
          </div>
        ))}
      </div>
      <TextField
        variant="text"
        placeholder="Имя"
        name="name"
        style={{ width: "80%" }}
        onChange={handleChange}
      />
      <TextField
        variant="textarea"
        placeholder="Комментарий"
        name="text"
        style={{ width: "80%" }}
        onChange={handleChange}
      />
      <Button onClick={handleAddComment}>Отправить</Button>
    </section>
  );
};

export default Comments;
