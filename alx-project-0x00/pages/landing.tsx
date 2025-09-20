import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      <Button title="Small Rounded" styles="text-sm rounded-sm px-2 py-1" />
      <Button title="Medium Rounded" styles="text-base rounded-md px-4 py-2" />
      <Button title="Large Rounded" styles="text-lg rounded-full px-6 py-3" />
    </div>
  )
}

export default Landing;