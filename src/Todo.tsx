export const Todo = (props) => {
  const { title, userid } = props;
  return (
    <div>
      <p>{`${title}(ユーザー:#{userid})`}</p>
    </div>
  );
};
