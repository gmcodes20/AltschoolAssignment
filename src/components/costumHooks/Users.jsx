import React from "react";
import spinner from "../../assets/spinner.gif";

function Users({ data, loading, error }) {
  if (loading) {
    return (
      <>
        <div className="spinner-image">
          <img src={spinner} alt="" />
        </div>
      </>
    );
  }

  if (!loading && error !== null) {
    return <div>Error fetching Database {error.message}</div>;
  } else {
    return (
      <>
        <h2>Users</h2>
        <ul className="card-cover   grid">
          {data?.map((user) => {
            return (
              <li key={user.cell} className="card flex">
                <div className="thumbnail">
                  <img src={user.picture.large} alt="thumbnail" />
                </div>

                <div>
                  <div className="name-cover p-1">
                    <h3 className="detail name">
                      {user.name.title}. {user.name.first}, {user.name.last}{" "}
                    </h3>
                    <p className="address">{user.email}</p>
                  </div>
                  <hr />
                  <div className="details other-details p-1">
                    <p className="detail">
                      Age: <span className="strong">{user.dob.age}</span>
                    </p>

                    <p className="detail">
                      City:{" "}
                      <span className="strong"> {user.location.city}</span>
                    </p>
                    <p className="detail">
                      State:{" "}
                      <span className="strong">{user.location.state}</span>
                    </p>
                    <p className="detail">
                      Country:{" "}
                      <span className="strong"> {user.location.country}</span>
                    </p>
                    <p className="detail">
                      Phone: <span className="strong">{user.phone}</span>
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Users;
