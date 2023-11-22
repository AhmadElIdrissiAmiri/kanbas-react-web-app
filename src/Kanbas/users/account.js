import * as client from "../users/client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const signout = async () => {
    await client.signout();
    navigate("/kanbas/signin");
  };



  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }

  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input value={account.username}
            onChange={(e) => setAccount({
              ...account,
              username: e.target.value
            })} />
          <input value={account.firstName}
            onChange={(e) => setAccount({
              ...account,
              firstName: e.target.value
            })} />
          <input value={account.lastName}
            onChange={(e) => setAccount({
              ...account,
              lastName: e.target.value
            })} />
          <input value={account.dob}
            onChange={(e) => setAccount({
              ...account,
              dob: e.target.value
            })} />
          <input value={account.email}
            onChange={(e) => setAccount({
              ...account,
              email: e.target.value
            })} />
          
          <input value={account.role}
            onChange={(e) => setAccount({
              ...account,
              role: e.target.value
            })} />
          <button onClick={save}>
            Save
          </button>
          <button onClick={signout}>
    Signout
  </button>
          <Link to="/kanbas/users/table" className="btn btn-warning w-100">
            Users
          </Link>

        </div>
      )}
    </div>
  );
}
export default Account;