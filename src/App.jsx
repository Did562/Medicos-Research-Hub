import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", interest: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = Medicos Research Hub Application:%0A%0AName: ${form.name}%0AEmail: ${form.email}%0AInterest: ${form.interest};

    window.open(https://wa.me/250793095633?text=${message}, "_blank");
    window.open(mailto:hirwadidier8@gmail.com?subject=Research Hub Application&body=${message}, "_blank");

    setForm({ name: "", email: "", interest: "" });
  };

  return (
    <div className="min-h-screen text-white">

      {/* 🌈 LIVE BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-900 via-teal-800 to-purple-900 animate-pulse"></div>

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-md sticky top-0">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
            MRH
          </div>
          <h1 className="font-bold text-lg">Medicos Research Hub</h1>
        </div>

        <nav className="space-x-6 text-sm">
          <a href="#mission">Mission</a>
          <a href="#vision">Vision</a>
          <a href="#values">Values</a>
          <a href="#apply">Apply</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-24">
        <h2 className="text-5xl font-bold">
          Advancing Medical Research
        </h2>
        <p className="mt-4 text-gray-200">
          A collaborative hub for scientists, students, and clinicians in Africa
        </p>
      </section>

      {/* IMAGE SECTION (FIXED) */}
      <section className="flex justify-center py-10">
        <img
          src="https://images.unsplash.com/photo-1581091870620-3f5f0b3c1a2b?auto=format&fit=crop&w=1200&q=80"
          className="rounded-xl shadow-2xl w-3/4"
          alt="research lab"
        />
      </section>

      {/* MISSION / VISION */}
      <section className="grid md:grid-cols-2 gap-6 px-10 py-10">

        <div id="mission" className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
          <h3 className="text-2xl font-bold">Mission</h3>
          <p>
            To promote high-quality, multidisciplinary medical research and innovation in Africa.
          </p>
        </div>

        <div id="vision" className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
          <h3 className="text-2xl font-bold">Vision</h3>
          <p>
            To become a leading African research hub driving scientific discovery and healthcare innovation.
          </p>
        </div>

      </section>

      {/* VALUES */}
      <section id="values" className="px-10 py-10 text-center">
        <h3 className="text-2xl font-bold mb-6">Core Values</h3>

        <div className="grid md:grid-cols-5 gap-4">
          {["Integrity", "Innovation", "Collaboration", "Evidence", "Ethics"].map(v => (
            <div key={v} className="bg-white/10 p-4 rounded-xl">
              {v}
            </div>
          ))}
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="px-10 py-10 bg-black/20">
        <h3 className="text-2xl font-bold mb-4">Join the Research Hub</h3>

        <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-2 rounded text-black"
            onChange={handleChange}
            value={form.name}
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded text-black"
            onChange={handleChange}
            value={form.email}
          />

          <textarea
            name="interest"
            placeholder="Research Interest"
            className="w-full p-2 rounded text-black"
            onChange={handleChange}
            value={form.interest}
          />

          <button className="bg-white text-black px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-6 text-gray-300">
        © Medicos Research Hub — Rwanda
      </footer>

    </div>
  );
}
