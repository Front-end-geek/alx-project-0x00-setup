import Card from "@/components/Card"
import Button from "@/components/Button"


const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight"> Landing Page</h1>
            <Card />
            <div className="flex flex-col items-center space-y-4 p-8">
      {/* Small Buttons */}
      <Button title="Small Rounded" styles="text-sm rounded-sm bg-blue-500 hover:bg-blue-700" />
      <Button title="Small Medium Rounded" styles="text-sm rounded-md bg-green-500 hover:bg-green-700" />
      <Button title="Small Full Rounded" styles="text-sm rounded-full bg-red-500 hover:bg-red-700" />

      {/* Medium Buttons */}
      <Button title="Medium Rounded" styles="text-base rounded-sm bg-blue-500 hover:bg-blue-700" />
      <Button title="Medium Medium Rounded" styles="text-base rounded-md bg-green-500 hover:bg-green-700" />
      <Button title="Medium Full Rounded" styles="text-base rounded-full bg-red-500 hover:bg-red-700" />

      {/* Large Buttons */}
      <Button title="Large Rounded" styles="text-lg rounded-sm bg-blue-500 hover:bg-blue-700" />
      <Button title="Large Medium Rounded" styles="text-lg rounded-md bg-green-500 hover:bg-green-700" />
      <Button title="Large Full Rounded" styles="text-lg rounded-full bg-red-500 hover:bg-red-700" />
    </div> 
           

        </div>
    )
}

export default Landing