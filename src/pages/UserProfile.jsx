import { useOutletContext, useParams } from "react-router-dom"

function UserProfile() {
  const { id } = useParams();
  const users = useOutletContext() ?? [];

  console.log("UserProfile params", { id }, "users", users)

  if (users.length === 0) {
    return (
      <aside>
        <h1>Loading...</h1>
      </aside>
    )
  }

  const user = users.find(user => String(user.id) === String(id))
  console.log("matched user", user)

  return (
    <aside>
      {user ? <h1>{user.name}</h1> : <h1>User not found</h1>}
    </aside>
  )
}

export default UserProfile