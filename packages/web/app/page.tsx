import Button from 'ui/button'
// imports work as expected, but has no add import quick fix 

export default function Home() {
  return (
    <main>
      {/* typing "<Frame" shows no import intellisense */}
      <Button></Button>
    </main>
  )
}
