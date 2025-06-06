import React, { useEffect, useState } from 'react'

let Layout
let Text

async function loadTRMNLUI(setError) {
  try {
    const mod = await import('@trmnl/ui')
    Layout = mod.Layout
    Text = mod.Text
  } catch (err) {
    console.error('Failed to load @trmnl/ui:', err)
    setError(true)
  }
}

function IndexPage() {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    loadTRMNLUI(setError).then(() => setLoaded(true))
  }, [])

  if (error) {
    return <div>TRMNL UI not installed yet</div>
  }

  if (!loaded) {
    return null
  }

  return (
    <Layout>
      <Text>Hello TRMNL!</Text>
    </Layout>
  )
}

export default IndexPage
