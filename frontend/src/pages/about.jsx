import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>

      <div className="py-16 sm:py-20">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* IMAGE */}
          <img
            src="./att.jpg"
            className="rounded-xl w-full md:w-1/2 shadow"
            alt="academy"
          />

          {/* TEXT */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              About Miklajung Academy
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Miklajung Academy is a modern educational institution providing quality learning from Nursery to Class 8.
              Our goal is to build strong academic foundations and develop confident, capable students.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We focus on practical learning, discipline, and creativity to prepare students for future academic success.
            </p>

          </div>

        </div>

        {/* MISSION / VISION / VALUES */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600">Our Mission</h3>
            <p className="text-gray-600 mt-3">
              To provide quality education that builds knowledge, confidence, and creativity in every student.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600">Our Vision</h3>
            <p className="text-gray-600 mt-3">
              To become a leading educational institution known for excellence and student success.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600">Our Values</h3>
            <p className="text-gray-600 mt-3">
              Discipline, respect, creativity, and continuous learning for lifelong growth.
            </p>
          </div>

        </div>

        {/* EXTRA SECTION */}
        <div className="mt-16 text-center max-w-3xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We provide a supportive learning environment where students receive personal attention,
            modern teaching methods, and strong academic guidance from experienced educators.
          </p>

        </div>

      </div>

    </Layout>
  );
}