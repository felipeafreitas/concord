import RequireAuth from '../hocs/RequireAuth';

function Chat() {
  return (
    <RequireAuth>
      <div></div>
    </RequireAuth>
  );
}

export default Chat;
