"use client";
import { TextInput } from "flowbite-react";
import { useState } from "react";
import { FcAddressBook } from "react-icons/fc";

export default function Login() {
    const [email, setEmail] = useState('')
  return (
    <div className="container mx-auto p-4">
      <form className="max-w-md mx-auto">
        <TextInput type="input" placeholder="Email" name="email" icon={FcAddressBook} value={email}/>
      </form>
    </div>
  );
}
