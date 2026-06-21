import Layout from "../components/Layout";

export default function Courses() {
  const sections = [
    {
      title: "Early Childhood",
      color: "bg-pink-100 text-pink-700",
      classes: ["Nursery", "LKG", "UKG"],
    },
    {
      title: "Primary Level",
      color: "bg-blue-100 text-blue-700",
      classes: ["Class 1", "Class 2", "Class 3", "Class 4"],
    },
    {
      title: "Middle Level",
      color: "bg-green-100 text-green-700",
      classes: ["Class 5", "Class 6", "Class 7", "Class 8"],
    },
  ];

  return (
    <Layout>
      <div className="py-20">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center mb-3">
          Our Academic Structure
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Structured learning journey from Nursery to Class 8
        </p>

        {/* SECTIONS */}
        <div className="space-y-10">

          {sections.map((section, index) => (
            <div key={index}>

              {/* SECTION TITLE */}
              <h2 className="text-2xl font-semibold mb-4">
                {section.title}
              </h2>

              {/* CLASS CARDS */}
              <div className="grid md:grid-cols-3 gap-5">

                {section.classes.map((cls, i) => (
                  <div
                    key={i}
                    className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition border"
                  >
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${section.color}`}
                    >
                      {section.title}
                    </div>

                    <h3 className="text-xl font-semibold mt-3">
                      {cls}
                    </h3>

                    <p className="text-gray-600 mt-2 text-sm">
                      Complete learning program designed for {cls}.
                    </p>

                    <button className="mt-4 text-blue-600 font-medium hover:underline">
                      View Details →
                    </button>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </Layout>
  );
}