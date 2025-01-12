import Image from "next/image";

export default function Home() {
  const unusedVariable = "This is an unused variable"; // This will cause a lint error, 

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">CAIS</h1>
      <p className="text-lg">Welcome to Carleton&apos;s Artificial Intelligence Society.</p>
    </div>
  )
}
