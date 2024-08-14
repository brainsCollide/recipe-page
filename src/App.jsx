import headImage from './assets/image-omelette.jpeg'


function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center bg-yellow-200 p-4 sm:flex-row sm:p-0">
        <div className='max-w-screen-lg w-full h-auto bg-white p-6 sm:p-10 mx-auto'>
          <div className='mb-4 sm:mb-10'>
            <img src={headImage} alt="head image" className="w-full sm:w-3/4 mx-auto border rounded-3xl" />
          </div>

          <div className='my-6 sm:my-10 text-center sm:text-left'>
            <h1 className='font-outfit font-bold text-3xl sm:text-5xl'>Simple Omelette Recipe</h1>
            <p className='mt-4 text-lg sm:text-2xl'>
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>

          <div className='my-6 sm:my-10 mx-auto sm:mx-14 rounded-2xl bg-orange-100 p-6 sm:p-10'>
            <h3 className='font-bold text-xl sm:text-2xl mb-4'>
              Preparation Time
            </h3>

            <ul className="list-disc list-inside ml-4 text-lg sm:text-2xl">
              <li className="marker:text-yellow-700">
                <b>Total</b>: Approximately 10 minutes
              </li>
              <li className="marker:text-yellow-700"> 
                <b>Preparation</b>: 5 minutes 
              </li>
              <li className="marker:text-yellow-700"> 
                <b>Cooking</b>: 5 minutes 
              </li>
            </ul>
          </div>

          <div className='my-6 sm:my-10 mx-auto sm:mx-4'>
            <h2 className='font-bold font-youngSerif lg:text-4xl sm:text-3xl mb-4 text-amber-800'>Ingredients</h2> 
            <ul className="list-disc list-inside ml-4 text-lg sm:text-2xl">
              <li className="marker:text-yellow-700">2-3 large eggs</li>
              <li className="marker:text-yellow-700">Salt, to taste</li>
              <li className="marker:text-yellow-700">Pepper, to taste</li>
              <li className="marker:text-yellow-700">1 tablespoon of butter or oil</li>
              <li className="marker:text-yellow-700">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </div>

          <div className='border-t border-gray-300 my-6 sm:my-10 mx-auto sm:mx-4'></div> 

          <div className='my-6 sm:my-10 mx-auto sm:mx-4'>
            <h2 className='font-bold font-youngSerif lg:text-4xl sm:text-3xl mb-4 text-amber-800'>Instructions</h2> 
            <ol className="list-decimal list-inside text-lg sm:text-2xl text-black">
              <li className='flex my-2 items-start'> 
                <span className='text-yellow-700 font-bold mr-2'>1.</span> 
                <span className='ml-2'><b className=' text-yellow-800'>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of salt and pepper until well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span>
              </li>
              <li className='flex my-2 items-start'>
                <span className='text-yellow-700 font-bold mr-2'>2.</span>   
                <span className='ml-2'><b className=' text-yellow-800'>Heat the pan</b>: Place a non-stick frying pan over medium heat and add butter or oil.</span> 
              </li>
              <li className='flex my-2 items-start'>
                <span className='text-yellow-700 font-bold mr-2'>3.</span>   
                <span className='ml-2'><b className=' text-yellow-800'>Cook the omelette</b>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span> 
              </li>
              <li className='flex my-2 items-start'>
                <span className='text-yellow-700 font-bold mr-2'>4.</span>   
                <span className='ml-2'><b className=' text-yellow-800'>Add fillings (optional)</b>: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span>
              </li>
              <li className='flex my-2 items-start'>
                <span className='text-yellow-700 font-bold mr-2'>5.</span>   
                <span className='ml-2'><b className=' text-yellow-800'>Fold and serve</b>: Carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span> 
              </li>
              <li className='flex my-2 items-start'>
                <span className='text-yellow-700 font-bold mr-2'>6.</span>   
                <span className='ml-2'><b className=' text-yellow-800'>Enjoy</b>: Serve immediately and enjoy your meal!</span> 
              </li>
            </ol>
          </div>

          <div className='border-t border-gray-300 my-6 sm:my-10 mx-auto sm:mx-4'></div> 

          <div className='my-6 sm:my-10 mx-auto sm:mx-4'>
            <h2 className='font-bold font-youngSerif lg:text-4xl sm:text-3xl mb-4 text-amber-800'>Nutrition</h2>
            <p className='text-lg sm:text-2xl mb-4'>The table below shows nutritional values per serving without the additional fillings.</p>

            <table className='text-lg sm:text-2xl w-full'>
              <tbody>
                <tr>
                  <td className='py-2 px-4 border-b-2 border-gray-300'>Calories</td>
                  <td className='py-2 px-4 pl-16 text-yellow-700 font-medium border-b-2 border-gray-300'><b>277kcal</b></td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b-2 border-gray-300'>Carbs</td>
                  <td className='py-2 px-4 pl-16 text-yellow-700 font-medium border-b-2 border-gray-300'><b>0g</b></td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b-2 border-gray-300'>Protein</td>
                  <td className='py-2 px-4 pl-16 text-yellow-700 font-medium border-b-2 border-gray-300'><b>20g</b></td>
                </tr>
                <tr>
                  <td className='py-2 px-4'>Fat</td>
                  <td className='py-2 px-4 pl-16 text-yellow-700 font-medium'><b>22g</b></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='text-center'>
            <p className="text-lg">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="underline text-blue-600">Frontend Mentor</a>. 
              Coded by <a href="#" className="underline text-blue-600">Fauzan</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default App