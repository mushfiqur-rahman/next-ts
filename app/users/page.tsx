import Link from "next/link";
import React from "react";
import UserTable from "./UserTable";

const UsersPage = () => {
  return (
    <>
      <h1>Users</h1>
      <UserTable />

      <Link href="/" className="text-3xl text-green-500 mt-5">
        ⬅️
      </Link>
    </>
  );
};

export default UsersPage;
