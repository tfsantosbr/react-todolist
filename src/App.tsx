import Text from "./components/text"

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="class">
        <Text as="p">Olá mundo</Text>
        <Text as="p" variant="body-md-semibold">
          Olá mundo
        </Text>
        <Text as="p" variant="body-sm-semibold">
          Olá mundo
        </Text>
      </div>
    </div>
  )
}
