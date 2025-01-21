import React from 'react'

export default function Recipes() {
    const recipes = [
        {
          title: "Easy Cucumber Salad",
          image: "/pumpkin-cheesecake.jpg",
          nutrition: [
            { label: "Calories", value: "150" },
            { label: "Carbs", value: "12g" },
            { label: "Fat", value: "5g" },
            { label: "Protein", value: "14g" },
          ],
        },
        {
            title: "Chickpea “Tuna” Salad Sandwich",
            image: "/pumpkin-cheesecake.jpg",
            nutrition: [
              { label: "Calories", value: "150" },
              { label: "Carbs", value: "12g" },
              { label: "Fat", value: "5g" },
              { label: "Protein", value: "14g" },
            ],
          },
          {
            title: "Protein Pumpkin Pie",
            image: "/pumpkin-cheesecake.jpg",
            nutrition: [
              { label: "Calories", value: "150" },
              { label: "Carbs", value: "12g" },
              { label: "Fat", value: "5g" },
              { label: "Protein", value: "14g" },
            ],
          },
        // Add more recipes here...
      ];
    
      return (
        <section className="container px-4 mx-auto my-8">
          <h2 className="mb-6 text-2xl font-semibold text-center">Recipes we're lovin' right now</h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="min-w-[400px] border rounded-lg shadow hover:shadow-lg p-4"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="object-cover w-full h-40 rounded"
                />
                <h3 className="mt-2 text-lg font-semibold">{recipe.title}</h3>
                <div className="mt-2">
                  {recipe.nutrition.map((item, i) => (
                    <p key={i} className="text-sm text-gray-600">
                      {item.label}: {item.value}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 hover:underline">
              See More Recipes
            </a>
          </div>
        </section>
      );
}
