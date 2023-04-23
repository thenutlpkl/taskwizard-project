import { SetStateAction, useState } from 'react';
import Layout from './components/layout';
import { FaClock, FaHandsHelping, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import { FaBullseye } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import FeaturedTaskers from './components/featureTasker';
import GetStarted from './components/getstarted';
import Nav from './components/Nav';
import app from '../firebaseConfig';


const tasks = [
  {
    id: 1,
    title: 'Clean my apartment',
    description:
      'I need someone to clean my apartment once a week. It is a small 1-bedroom apartment and should take about 2 hours to clean.',
    location: 'London, ON',
    date: '2023-03-10',
    budget: '$50',
    imageUrl:
      'https://images.pexels.com/photos/3616746/pexels-photo-3616746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Assemble my new furniture',
    description:
      'I just bought a new bed and need someone to assemble it for me. It is a queen-size bed with a headboard and footboard.',
    location: 'London, ON',
    date: '2023-03-12',
    budget: '$100',
    imageUrl:
      'https://images.pexels.com/photos/4554417/pexels-photo-4554417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Help me move to a new apartment',
    description:
      'I need someone to help me move to a new apartment. I have a few large items like a couch and a dresser that will need to be moved.',
    location: 'London, ON',
    date: '2023-03-15',
    budget: '$200',
    imageUrl:
      'https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function Home() {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task: SetStateAction<null>) => {
    setSelectedTask(task);
  };

  const handleModalClose = () => {
    setSelectedTask(null);
  };

    return (
      
      <Layout>
      <Nav />
        
        <div
          className="flex justify-center items-center h-screen"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/2501965/pexels-photo-2501965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        >
      



      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-800">Find a Service</span>
          <FaBullseye className="text-blue-500 text-2xl mr-2" />
            </div>
            <div className="flex justify-center items-center mb-4">
            <div className="relativ w-1/2">
            <input 
              type="text" 
              placeholder="Enter your location"
              className="bg-gray-100 rounded-full px-4 py-2 w-full hover:shadow-md transition duration-300 ease-in-out text-gray-800 pl-3"
            />
          </div>

          <select 
            className="bg-gray-100 rounded-full px-4 py-2 ml-4 hover:shadow-md transition duration-300 ease-in-out text-gray-800"
          >
            <option value="">Select a job type</option>
            <option value="cleaning">Cleaning</option>
            <option value="maintenance">Maintenance</option>
            <option value="assembly">Furniture Assembly</option>
            <option value="moving">Moving</option>
          </select>
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4"
          >
            Search
          </button>
        </div>
      </div>
        </div>


        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Why Choose Us?</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl text-blue-500 mr-2">
            <FaShieldAlt />
          </span>
          <h3 className="text-lg font-semibold text-gray-800">Secure and Reliable</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          We take security and reliability seriously. Our platform is designed with the latest security features to ensure that your data is safe and secure.
        </p>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl text-blue-500 mr-2">
            <FaClock />
          </span>
          <h3 className="text-lg font-semibold text-gray-800">Fast and Efficient</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Our service providers are experts in their field and will get the job done quickly and efficiently. You can trust us to deliver high-quality services in a timely manner.
        </p>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl text-blue-500 mr-2">
            <FaHandsHelping />
          </span>
          <h3 className="text-lg font-semibold text-gray-800">Friendly Support</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Our support team is always ready to help you with any questions or concerns you may have. We pride ourselves on our friendly and helpful customer service.
        </p>
      </div>
    </div>
  </div>
</div>

        

        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Services by Categories</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/5591488/pexels-photo-5591488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Home Services" className="w-full h-48 object-cover rounded-lg" />
                <h3 className="text-lg font-bold mb-1">Home Services</h3>
                <a href="#" className="text-blue-500 mt-2 inline-block">Learn more</a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/6197116/pexels-photo-6197116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Commercial Services" className="w-full h-48 object-cover rounded-lg" />
                <h3 className="text-lg font-bold mb-1">Commercial Services</h3>
                <a href="#" className="text-blue-500 mt-2 inline-block">Learn more</a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Carpet Cleaning" className="w-full h-48 object-cover rounded-lg" />
                <h3 className="text-lg font-bold mb-1">Carpet Cleaning</h3>
                <a href="#" className="text-blue-500 mt-2 inline-block">Learn more</a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/9462093/pexels-photo-9462093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Home Services" className="w-full h-48 object-cover rounded-lg" />
                <h3 className="text-lg font-bold mb-1">Window Cleaning Services</h3>
                <a href="#" className="text-blue-500 mt-2 inline-block">Learn more</a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/8543606/pexels-photo-8543606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Commercial Services" className="w-full h-48 object-cover rounded-lg" />
                <h3 className="text-lg font-bold mb-1">Outside Cleaning Services</h3>
                <a href="#" className="text-blue-500 mt-2 inline-block">Learn more</a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Carpet Cleaning" className="w-full h-48 object-cover rounded-lg" />
                <h3 className="text-lg font-bold mb-1">Plumber</h3>
                <a href="#" className="text-blue-500 mt-2 inline-block">Learn more</a>
              </div>
            </div>
          </div>
        </section>


        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Tasks near your location</h2>
          <div className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => (
              <div key={task.id} className="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img className="w-full h-48 object-cover" src={task.imageUrl} alt={task.title} />
              <div className="px-4 py-4">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-900 mr-2 pb-1">{task.title}</h3>
                </div>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-gray-400" />
                  <p className="text-gray-500 ml-1">{task.location}</p>
                </div>
              <p className="mt-2 text-gray-600">{task.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm font-medium text-gray-900">{task.budget}</div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                View Details
              </button>
              </div>
            </div>
          </div>

          
        ))}
      </div>
      </div>
      <FeaturedTaskers />
      <GetStarted />
      </Layout>
      
    );
  }