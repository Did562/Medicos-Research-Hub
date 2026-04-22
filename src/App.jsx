import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", interest: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New Medicos Research Hub Application:%0A%0AName: ${form.name}%0AEmail: ${form.email}%0AInterest: ${form.interest}`;

    window.open(`https://wa.me/250793095633?text=${message}`, "_blank");
    window.open(`mailto:hirwadidier8@gmail.com?subject=Research Hub Application&body=${message}`, "_blank");

    setForm({ name: "", email: "", interest: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0">
        <h1 className="font-bold text-xl">Medicos Research Hub</h1>

        <nav className="space-x-6 text-sm">
          <a href="#home">Home</a>
          <a href="#mission">Mission</a>
          <a href="#vision">Vision</a>
          <a href="#values">Values</a>
          <a href="#apply">Apply</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="text-center py-20 bg-blue-50">
        <h2 className="text-4xl font-bold">
          Medicos Research Institute
        </h2>
        <p className="mt-4 text-gray-600">
          Advancing Medical Research & Innovation in Rwanda and Africa
        </p>
      </section>

      {/* IMAGE BANNER */}
      <section className="py-10 text-center">
        <img
          src="https://images.unsplash.com/photo-1582719471387-0c1c3b8b8b8b"
          alt="research"
          className="mx-auto rounded-xl shadow-lg w-4/5"
        />
      </section>

      {/* MISSION & VISION */}
      <section className="grid md:grid-cols-2 gap-6 px-10 py-10">

        <div id="mission" className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-2">Mission</h3>
          <p>
            To advance multidisciplinary medical research through collaboration
            of students, clinicians, and researchers to produce impactful scientific evidence.
          </p>
        </div>

        <div id="vision" className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-2">Vision</h3>
          <p>
            To become a leading African research hub driving innovation,
            scientific discovery, and evidence-based healthcare improvement.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section id="values" className="px-10 py-10 bg-white">
        <h3 className="text-2xl font-bold mb-6 text-center">Core Values</h3>

        <div className="grid md:grid-cols-5 gap-4 text-center">
          {["Integrity", "Innovation", "Collaboration", "Evidence-Based", "Ethics"].map((v) => (
            <div key={v} className="p-4 bg-gray-100 rounded-xl">
              {v}
            </div>
          ))}
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="px-10 py-10 bg-blue-50">
        <h3 className="text-2xl font-bold mb-4">Apply to Join</h3>

        <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <textarea
            name="interest"
            placeholder="Research Interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit Application
          </button>
        </form>
      </section>

      {/* FOUNDER */}
      <section className="px-10 py-10 bg-white text-center">
        <h3 className="text-xl font-bold">Founder</h3>
        <p>MUGISHA HIRWA Didier</p>
        <p className="text-gray-600">hirwadidier8@gmail.com</p>
        <p className="text-gray-600">WhatsApp: +250793095633</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-6 text-gray-500">
        © {new Date().getFullYear()} Medicos Research Hub
      </footer>

    </div>
  );
}
