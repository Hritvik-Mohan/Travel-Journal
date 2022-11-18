import Navbar from "./Navbar"
import Journal from "./Journal"
import data from "./data"

export default function App() {
  const journalElement = data.map(journal => {
    return (<div>
      <Journal
        journal={journal}
      />
      <div className="horizontal-line"></div>
    </div>)
  })
  return (
    <div>
      <Navbar />
      <section className="journals">
        {journalElement}
      </section>
    </div>
  )
}
