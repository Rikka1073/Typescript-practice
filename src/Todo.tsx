type Todotype = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: Todotype) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return (
    <div>
      <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>
    </div>
  );
};
