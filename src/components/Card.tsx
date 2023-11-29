import React from 'react'

const handleClick = () => {}

const Card = () => {
  return (
    <div className="flex mx-auto bg-white rounded-md shadow-lg">
        <div className="p-6">
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Description</h2>
                <p className="text-gray-700">Artificial Intelligence is the intelligence possessed by the machines under which they can perform various functions with human help. With the help of A.I, machines will be able to learn, solve problems, plan things, think, etc. Artificial Intelligence, for example, is the simulation of human intelligence by machines. In the field of technology, Artificial Intelligence is evolving rapidly day by day and it is believed that in the near future, artificial intelligence is going to change human life very drastically and will most probably end all the crises of the world by sorting out the major problems. 


Our life in this modern age depends largely on computers. It is almost impossible to think about life without computers. We need computers in everything that we use in our daily lives. So it becomes very important to make computers intelligent so that our lives become easy. Artificial Intelligence is the theory and development of computers, which imitates the human intelligence and senses, such as visual perception, speech recognition, decision-making, and translation between languages. Artificial Intelligence has brought a revolution in the world of technology. </p>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Pricing</h2>
                <p className="text-gray-700">$19.99</p>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Duration</h2>
                <p className="text-gray-700">1 month</p>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Model</h2>
                <p className="text-gray-700">Standard</p>
            </div>

    
            <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Buy</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">Rent</button>
                <button onClick={handleClick} className="bg-purple-500 text-white px-4 py-2 rounded-md">Invoke</button>
            </div>
        </div>
    </div>

  )
}

export default Card