import { type DesignateUser, type HaveNever } from "@prisma/client";
import React from "react";

interface UserListProps {
  users: DesignateUser[] | undefined;
}

export const UserList = ({ users }: UserListProps) => {
  return (
    <>
      {users &&
        users.map((user) => (
          <div
            key={user.id}
            className="w-48 italic text-black flex items-center justify-center rounded-2xl border-2 border-secondary bg-white p-5 shadow-2xl"
          >
            {user.name}
          </div>
        ))}
    </>
  );
};
