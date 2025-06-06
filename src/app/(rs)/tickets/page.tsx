"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Tickets() {

  const [count, setCount] = useState<number>(0);
  const router = useRouter();


  const handleIncrementCount = () => {
    setCount(count + 1)
  }

  const handleDecrementCount = () => {
    setCount(count - 1)
  }

  const handleResetCount = () => {
    setCount(0)
  }

  return (
    <div>
      <h2>Tickets Page</h2>
      <div className="flex flex-col gap-6 p-6 max-w-5xl">
        <Button onClick={handleIncrementCount}>Click to increase ticket selection</Button>
        <Button onClick={handleDecrementCount}>Click to lower ticket selection</Button>
        <Button onClick={handleResetCount}>Click to reset ticket selection</Button>
      </div>
      <p>You have selected {count} tickets</p>
      <Button onClick={() => router.push(`/tickets/checkout/${count}`)}>Checkout</Button>
    </div>
  )



}


