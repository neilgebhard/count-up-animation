import { useEffect, useState } from 'react'

const Count = ({ n }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      const increment = n / 200
      setCount((target) => {
        if (target < n) {
          return Math.floor(target + increment)
        }
        clearInterval(timer)
        return n
      })
    }, 5)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='text-4xl border p-5 bg-slate-50 text-slate-900 font-semibold'>
      {count}
    </div>
  )
}

function App() {
  return (
    <main className='min-h-screen flex items-center justify-center bg-slate-100'>
      <div className='flex flex-col items-center gap-4'>
        <Count n={5000} />
        <Count n={1000000} />
        <Count n={999999999} />
      </div>
    </main>
  )
}

export default App
