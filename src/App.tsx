import './App.css'
import Button from './components/Button'
import Button2, { Button3 } from './components/Button2'

function App() {
  return (
    <>
      <span className="text-3xl font-bold underline">
        Hello world!
      </span>
      <Button backgroundColor='lime' fontSize={2} textcolor='red' />
      <Button2  style={{ backgroundColor: 'red', fontSize: '2rem'}}/>
      <Button3  style={{ backgroundColor: 'Green', fontSize: '2rem', padding: '0.5rem', margin: '2rem' }}/>
    </>
  )
}
export default App
