import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold">NEVER STOP #DOINGSPORTS</div>
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12">
        {/* Hero Section */}
        <section className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              WHY TO CHOOSE A PERSONAL COACH?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expert Guidance and Motivation</li>
              <li>Personalized Workout Plans</li>
              <li>Injury Prevention and Recovery</li>
              <li>Healthy Supplement Advice</li>
            </ul>
          </div>
          <div>
            <img
              src="coach-image.jpg"
              alt="Personal Coach"
              className="w-64 h-64 rounded-full"
            />
            <h3 className="text-2xl font-bold text-center mt-4">
              MY NAME IS REGIS ROHER
            </h3>
          </div>
        </section>

        {/* Reasons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">REASONS TO START NOW</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-xl font-bold mb-2">01</h3>
              <p>Access Anytime</p>
            </div>
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-xl font-bold mb-2">02</h3>
              <p>Lose Weight</p>
            </div>
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-xl font-bold mb-2">03</h3>
              <p>Feel Fit</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">SERVICES I PROVIDE</h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <img
                src="service-image-1.jpg"
                alt="Service 1"
                className="rounded"
              />
              <h3 className="text-xl font-bold mt-2">CARDIO POWER</h3>
            </div>
            <div>
              <img
                src="service-image-2.jpg"
                alt="Service 2"
                className="rounded"
              />
              <h3 className="text-xl font-bold mt-2">STRENGTH POWER</h3>
            </div>
            <div>
              <img
                src="service-image-3.jpg"
                alt="Service 3"
                className="rounded"
              />
              <h3 className="text-xl font-bold mt-2">BOXING SKILLS</h3>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">REVIEWS FROM MY CLIENTS</h2>
          <div className="bg-gray-800 p-6 rounded">
            <blockquote>
              <p>
                "My fitness trainer is amazing! He guides me through each
                exercise and provides excellent feedback to ensure I'm
                performing them correctly."
              </p>
            </blockquote>
            <div className="flex items-center mt-4">
              <img
                src="client-image.jpg"
                alt="Client"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-lg font-bold">John Doe</h4>
                <p className="text-gray-400">Client</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">MY PRICING PLANS</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded text-center">
              <h3 className="text-xl font-bold mb-4">STARTER</h3>
              <p className="text-4xl font-bold mb-4">$99</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded">
                Get Started
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded text-center">
              <h3 className="text-xl font-bold mb-4">ADVANCED</h3>
              <p className="text-4xl font-bold mb-4">$119</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded">
                Get Started
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded text-center">
              <h3 className="text-xl font-bold mb-4">PREMIUM</h3>
              <p className="text-4xl font-bold mb-4">$199</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">RECENT NEWS</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded">
              <img src="news-image-1.jpg" alt="News 1" className="mb-4" />
              <h3 className="text-xl font-bold mb-2">New Training Program</h3>
              <p>Check out our new training program designed for beginners.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded">
              <img src="news-image-2.jpg" alt="News 2" className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Gym Renovation</h3>
              <p>
                Our gym has undergone a complete renovation with the latest
                equipment.
              </p>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            SUBSCRIBE TO OUR INSTAGRAM
          </h2>
          <div className="grid grid-cols-6 gap-4">
            <img
              src="instagram-image-1.jpg"
              alt="Instagram 1"
              className="rounded"
            />
            <img
              src="instagram-image-2.jpg"
              alt="Instagram 2"
              className="rounded"
            />
            <img
              src="instagram-image-3.jpg"
              alt="Instagram 3"
              className="rounded"
            />
            <img
              src="instagram-image-4.jpg"
              alt="Instagram 4"
              className="rounded"
            />
            <img
              src="instagram-image-5.jpg"
              alt="Instagram 5"
              className="rounded"
            />
            <img
              src="instagram-image-6.jpg"
              alt="Instagram 6"
              className="rounded"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">DON'T DELAY, START NOW!</h2>
          <button className="bg-green-500 text-white py-3 px-6 rounded">
            Get Started
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 px-6 flex justify-between items-center">
        <div>&copy; 2024 Personal Trainer</div>
        <nav>
          <ul className="flex space-x-4">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
