import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./costumHooks/Users";
import Pagination from "../components/Pagination";

function DisplayUsers() {
  // const [data] = useFetch("https://randomuser.me/api/?results=100");

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  // Get current posts
  const indexOfLastUser = currentPage * usersPerPage;
  const skip = indexOfLastUser - usersPerPage;
  const currentPosts = data?.results?.slice(skip, indexOfLastUser);

  let totalUsers = data?.results?.length;

  //  Get Total Page Count
  const totalPageCount = Math.ceil(totalUsers / usersPerPage);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://randomuser.me/api/?results=100");
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const updatePage = (e) => {
    e.preventDefault();
    setCurrentPage(e.target.innerHTML);
  };

  const next = () =>
    currentPage >= totalPageCount
      ? setCurrentPage(currentPage)
      : setCurrentPage(Number(currentPage) + 1);

  const prev = () =>
    currentPage <= 1
      ? setCurrentPage(1)
      : setCurrentPage(Number(currentPage) - 1);

  return (
    <div className="wrapper">
      <div className="container users-container flex">
        <Users data={currentPosts} loading={loading} error={error} />

        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={totalUsers}
          updatePage={updatePage}
          currentPage={currentPage}
          prev={prev}
          next={next}
          totalPageCount={totalPageCount}
        />
      </div>
    </div>
  );
}

export default DisplayUsers;
