import Card from "@/components/Card"
import Button from "@/components/Button"  

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>
      
      <Card />

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-lg font-medium mb-4">Button Sizes</h2>
          <div className="flex gap-4">
            <Button title="Small" className="text-sm px-2 py-1" />
            <Button title="Medium" className="text-base px-4 py-2" />
            <Button title="Large" className="text-lg px-6 py-3" />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Button Shapes</h2>
          <div className="flex gap-4">
            <Button title="Rounded-sm" className="rounded-sm" />
            <Button title="Rounded-md" className="rounded-md" />
            <Button title="Rounded-full" className="rounded-full" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing;