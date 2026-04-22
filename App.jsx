import { useState } from "react";
import { Mail, Phone, Users } from "lucide-react";

const Card = ({ children }) => (
  <div className="bg-white rounded-xl shadow p-4">{children}</div>
);

const Button = ({ children, ...props }) => (
  <button {...props} className="bg-blue-600 text-white px-4 py-2 rounded">
    {children}
  </button>
);

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", interest: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New Application:%0AName: ${form.name}%0AEmail: ${form.email}%0AInterest: ${form.interest}`;

    window.open(`https://wa.me/250793095633?text=${message}`, "_blank");
    window.open(`mailto:hirwadidier8@gmail.com?subject=Application&body=${message}`, "_blank");

    setForm({ name: "", email: "", interest: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-6 bg-white shadow flex justify-between">
        <h1 className="font-bold">Medicos Research Hub</h1>
      </header>

      <section className="p-10 text-center bg-blue-50">
        <h2 className="text-3xl font-bold">Advancing Medical Research in Rwanda</h2>
        <p className="mt-2 text-gray-600">A collaborative research hub for students and clinicians</p>
      </section>

      <section className="p-10 grid md:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-bold">Mission</h3>
          <p>Advance multidisciplinary medical research and innovation.</p>
        </Card>

        <Card>
          <h3 className="font-bold">Vision</h3>
          <p>Become a leading African research ecosystem.</p>
        </Card>
      </section>

      <section className="p-10">
        <h3 className="text-xl font-bold mb-4">Apply to Join</h3>
        <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
          <input name="name" placeholder="Name" className="w-full p-2 border" onChange={handleChange} value={form.name} />
          <input name="email" placeholder="Email" className="w-full p-2 border" onChange={handleChange} value={form.email} />
          <textarea name="interest" placeholder="Interest" className="w-full p-2 border" onChange={handleChange} value={form.interest}></textarea>
          <Button type="submit">Submit</Button>
        </form>
      </section>

      <footer className="p-6 text-center text-gray-500">
        © Medicos Research Hub
      </footer>
    </div>
  );
}
