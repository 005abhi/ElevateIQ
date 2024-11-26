"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const SignOut = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/skillhive" })}>
      <FontAwesomeIcon
        icon={faRightFromBracket}
        className="text-white text-2xl"
      />
    </button>
  );
};

export default SignOut;
