```jsx
import { useAuth } from "../context/AuthContext";

function ThreadItem({ thread }) {
  const { user } = useAuth();

  const isAuthor =
    user?.userId === thread.authorId;

  const isAdmin =
    user?.role === "admin";

  const canEdit = isAuthor || isAdmin;

  return (
    <article>
      <h3>{thread.title}</h3>
      <p>{thread.body}</p>

      {canEdit && (
        <div className="controls">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </article>
  );
}

export default ThreadItem;
```
