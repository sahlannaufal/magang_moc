"use client";
import React, { useState } from "react";
import { TextInput } from "flowbite-react";
import { FcAddressBook } from "react-icons/fc";

export default function Login() {
  const [email, setEmail] = useState('')
  return (
    <div className="container mx-auto p-4">
      <form className="max-w-md mx-auto">
        <TextInput
          type="email"
          placeholder="example@example.com"
          name="email"
          icon={FcAddressBook}
          value={email}
          onChange={(event)=>setEmail(event.target.value)}
        />
        
      </form>
    </div>
  );
}
