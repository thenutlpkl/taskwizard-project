import FeaturedTaskerCard from './featuretaskcard';

const FeaturedTaskers = () => {
  return (
    <div className="text-center mt-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Top Taskers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <FeaturedTaskerCard
            name="John Doe"
            rating={4.5}
            skills={[
              { name: "Cleaning", price: "$20/hour" },
              { name: "Gardening", price: "$25/hour" },
              { name: "Painting", price: "$30/hour" }
            ]}
            image="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div className="col-span-1">
          <FeaturedTaskerCard
            name="Jane Smith"
            rating={4.8}
            skills={[
              { name: "Dog walking", price: "$15/hour" },
              { name: "Pet sitting", price: "$20/hour" },
              { name: "Training", price: "$30/hour" }
            ]}
            image="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div className="col-span-1">
          <FeaturedTaskerCard
            name="Bob Johnson"
            rating={4.2}
            skills={[
              { name: "Handyman", price: "$25/hour" },
              { name: "Plumbing", price: "$35/hour" },
              { name: "Electrical", price: "$40/hour" }
            ]}
            image="https://images.pexels.com/photos/3758116/pexels-photo-3758116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedTaskers;
