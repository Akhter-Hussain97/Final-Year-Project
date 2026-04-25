import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../../api";
import "./Booking.css";
const Booking = () => {
  const location = useLocation();
  const packageData = location.state?.package;

  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
    persons: 1,
    price: "",
  });

  // ✅ AUTO FILL ONLY IF PACKAGE EXISTS
  useEffect(() => {
    if (packageData) {
      setForm((prev) => ({
        ...prev,
        destination: packageData.location || "",
        price: packageData.fees
          ? Number(packageData.fees.replace("$", ""))
          : "",
      }));
    }
  }, [packageData]);

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ SUBMIT
  const handleSubmit = async () => {
    // 🔥 VALIDATION (VERY IMPORTANT)
    if (!form.name || !form.email || !form.destination || !form.date) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      const res = await API.post("booking/create/", form);
      alert("Booking Successful 🎉");
      //console.log(res.data);
    } catch (error) {
      //console.error(error);
      alert("Booking Failed ❌");
    }
  };

  return (
    <div className="booking-containers">
      <h2>Book Your Trip</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />

      {/* ✅ NOW EDITABLE */}
      <input
        name="destination"
        placeholder="Destination"
        value={form.destination}
        onChange={handleChange}
      />

      <input type="date" name="date" onChange={handleChange} />

      <input
        type="number"
        name="persons"
        value={form.persons}
        onChange={handleChange}
      />

      {/* ✅ EDITABLE IF EMPTY */}
      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Confirm Booking</button>
    </div>
  );
};

export default Booking;