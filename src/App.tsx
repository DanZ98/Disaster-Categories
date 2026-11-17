import { Route, Routes, useParams } from 'react-router'

// Temporary placeholder pages. We'll replace these with real pages later.
function Placeholder({ title }: { title: string }) {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center">
      <h1 className="text-4xl font-bold text-safety">{title}</h1>
    </main>
  )
}

function CategoryPlaceholder() {
  const { categoryId } = useParams()
  return <Placeholder title={`Category: ${categoryId}`} />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Placeholder title="Home" />} />
      <Route path="/category/:categoryId" element={<CategoryPlaceholder />} />
      <Route path="/cart" element={<Placeholder title="Cart" />} />
      <Route path="/clearance" element={<Placeholder title="Clearance" />} />
      <Route path="*" element={<Placeholder title="Page not found" />} />
    </Routes>
  )
}

export default App
