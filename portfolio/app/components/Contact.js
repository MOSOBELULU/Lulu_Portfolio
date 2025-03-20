export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12" id="contact">
      <h1 className="text-3xl font-semibold text-center mb-6">Get In Touch With Me</h1>
      <div className="text-center mb-4">
        <a href="mailto:mosobelulu@gmail.com" className="text-blue-600 hover:underline">mosobelulu@gmail.com</a>
      </div>
      <p className="text-center mb-4">Call me on: <span className="font-semibold">+27 76 527 5896</span></p>
      <p className="text-center mb-6">Or Simply fill Out the Form Below</p>
      
      <form className="max-w-xl mx-auto" action="https://formsubmit.co/mosobelulu@gmail.com" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            autoComplete="name" 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
          <input 
            type="text" 
            id="surname" 
            name="surname" 
            required 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            autoComplete="family-name" 
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Leave a message for me</label>
          <textarea 
            id="description" 
            name="description" 
            required 
            rows="5" 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          ></textarea>
        </div>

        <div className="text-center">
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
