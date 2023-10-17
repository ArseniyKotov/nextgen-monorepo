"use client"

import { getCurrentUser, signIn } from "aws-amplify/auth"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function Login() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  async function handleLogin() {

    try {
      const user = await getCurrentUser()
      if (user) {
        router.replace('/')
        return
      }
    } catch (e) {
      console.log(e)
    }
    if (usernameRef && passwordRef) {
      await signIn({
        username: usernameRef.current?.value!,
        password: passwordRef.current?.value!
      })

      router.replace('/')
    }

  }

  return <div>
    <input name="username" placeholder="username" type='text' ref={usernameRef} />
    <input name="password" placeholder="password" type='password' ref={passwordRef} />

    <button onClick={handleLogin}>Login</button>
  </div>
}