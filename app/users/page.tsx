import Link from "next/link";
import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />

      <Link href="/" className="text-3xl text-green-500 mt-5">
        ⬅️
      </Link>
    </>
  );
};

export default UsersPage;
