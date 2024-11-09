import ModelViewer from '@/components/ModelViewer'

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <h1 className="text-4xl font-bold p-4 text-center">Sail GP boat viewer</h1>
      <div className="flex-grow">
        <ModelViewer />
      </div>
    </main>
  )
}